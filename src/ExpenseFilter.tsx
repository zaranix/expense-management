import categories from "./categories"

interface Props {
  onSelectCategory : (category : string) => void
}

const ExpenseFilter = ({onSelectCategory} : Props) => {
  return (
    <div>  <select onChange={(event) => onSelectCategory(event.target.value)}  className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
    <option >All categories</option>
    {categories.map(category => <option key={category} value={category}>{category}</option>)}
  </select></div>
  )
}

export default ExpenseFilter