
interface Expense  {
  description : string,
  amount : number,
  category : string
  id : number
  }
//send expenses as a list 
interface Props {
  expenses : Expense[]
//because the list of expenses passed by props so we should update them in parent component so we need callback function
  onDelete : (id: number) => void
}
  const ExpenseList = ({ expenses , onDelete} : Props) => {
  console.log(expenses)
    return (
      <>

      <table className="table table-bordered">
      <thead>
        <tr>
          <th>Description</th>
          <th>Amount</th>
          <th>Category</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map(expense => <tr key={expense.id}>
          <td>{expense.description}</td>
          <td>{expense.amount}</td>
          <td>{expense.category}</td>
          <td><button className="btn btn-outline-danger" onClick={() => onDelete(expense.id)} >delete</button></td></tr>)}
      </tbody>
      <tfoot>
        <tr>
          <td>Total</td>
          <td>{expenses.reduce((acc , expense) => acc + expense.amount , 0).toFixed(2)}</td>
          <td></td>
          <td></td>
        </tr>
      </tfoot>
      </table>
      </>
  
  
    )
  }
  
  export default ExpenseList