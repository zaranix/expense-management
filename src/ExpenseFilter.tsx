
interface Props {
  onSelectCategory : (category : string) => void
}

const ExpenseFilter = ({onSelectCategory} : Props) => {
  return (
    <div>  <select onChange={(event) => onSelectCategory(event.target.value)}  className="form-select form-select-lg mb-3" aria-label=".form-select-lg example">
    <option >All categories</option>
    <option value="Groceries">Groceries</option>
    <option value="Utilities">Utilities</option>
    <option value="Entertainment">Entertainment</option>
  </select></div>
  )
}

export default ExpenseFilter