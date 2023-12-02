import { categories } from "./App"

const ExpenseForm = () => {
  return (
    <form action="">
      <div className="mb-3">
        <label htmlFor="description" className="form-label">Description</label>
        <input id='description' type="text" className="form-control" /></div>
        <div className="mb-3">
        <label htmlFor="amount" className="form-label">Amount</label>
        <input id='amount' type="number" className="form-control" /></div>
        <div className="mb-3">
          <label htmlFor="" className="form-label">Category</label>
          <select name="" id="" className="form-select">
          {categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select></div>
            <div className="mb-3">

            <button className="btn btn-primary">submit</button>
            </div>
    </form>
  )
}

export default ExpenseForm