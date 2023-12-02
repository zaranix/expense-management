import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from 'zod'
import categories from './categories'


interface Props {
  onSubmit : (data: formData) => void
}
const schema = z.object({
  description : z.string().min(3 , {message : "Description should br more than 3 words."}),
  amount : z.number(),
  category : z.enum(categories , {
    errorMap: () => ({ message : 'category is required'})
  })
})

type formData = z.infer<typeof schema>;


const ExpenseForm = ( {onSubmit} : Props) => {
  const {
    register ,
    handleSubmit,
    reset,
    formState : {errors}
  } = useForm<formData>({resolver:zodResolver(schema)})
  return (
    <form onSubmit={handleSubmit(data => {
      onSubmit(data)
      reset()
    })} action="" >
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input {...register("description")} id='description' type="text" className="form-control" />
        {errors.description && <p>{errors.description.message}</p>}</div>
        <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input {...register("amount" , {valueAsNumber: true })} id='amount' type="number" className="form-control" />
        {errors.amount && <p>{errors.amount.message}</p>}</div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Category</label>
          <select {...register("category")} name="" id="" className="form-select">
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select></div>
            <div className="mb-3">

            <button className="btn btn-primary">submit</button>
            </div>
    </form>
  )
}

export default ExpenseForm