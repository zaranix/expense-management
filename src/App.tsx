import { useState } from "react";
import ExpenseList from "./expenseList";

const App = () => {

  const [expenses , setExpenses] = useState([
   { description : "string",
  amount : 2,
  catergory : "string",
  id : 2},
  { description : "string",
  amount : 2,
  catergory : "string",
  id : 4}
  ])
  
  const deleteHandler = (id : number) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  console.log(id)};
    if(expenses.length !== 0)
  return (
    <ExpenseList expenses={expenses} onDelete={deleteHandler} />
  )
}

export default App