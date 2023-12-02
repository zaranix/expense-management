import { useState } from "react";
import ExpenseFilter from "./ExpenseFilter";
import ExpenseList from "./expenseList";


const App = () => {

  const [expenses , setExpenses] = useState([
   { description : "Groceries",
  amount : 2,
  category : "Groceries",
  id : 2},
  { description : "Entertainment",
  amount : 2,
  category : "Entertainment",
  id : 4}
  ])

  const[category , setCategory] = useState("")

  const visibleExpenses = category
    ? expenses.filter((expense) => expense.category === category)
    : expenses;

  const deleteHandler = (id : number) => {
    setExpenses(expenses.filter(expense => expense.id !== id))
  console.log(id)};
    if(visibleExpenses.length !== 0)
  return (
    <>
    <ExpenseFilter onSelectCategory={(category) => setCategory(category)} />
    <ExpenseList expenses={visibleExpenses} onDelete={deleteHandler} />
    </>
  )
}

export default App