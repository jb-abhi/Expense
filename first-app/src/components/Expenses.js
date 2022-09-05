import React, {useState} from 'react';
import Card from './Card';
import './Expenses.css';
import ExpensesFilter from './NewExpense/ExpenseFilter';
import ExpenseList from './NewExpense/ExpenseList';
import ExpensesChart from './ExpensesChart'

function Expenses(props) {

  const [filteredYear,setFilteredYear] = useState('2019');
 
  const saveSelectionDataHandler = (selection) => {
    setFilteredYear(selection);
  }

  const filteredExpenses = props.items.filter(expense =>{
    return expense.date.getFullYear().toString() === filteredYear
  })
 
  return (
    <div>
    <ExpensesFilter selected = {filteredYear} onSaveSelection = {saveSelectionDataHandler}></ExpensesFilter>
    <Card className="expenses">
      <ExpensesChart expenses = {filteredExpenses}/>
      <ExpenseList items= {filteredExpenses}/>
    </Card>
    </div>

    // <div>
    // <ExpensesFilter selected = {filteredYear} onSaveSelection = {saveSelectionDataHandler}></ExpensesFilter>
    // {filteredExpenses.length === 0 && 
    // <Card className="expenses">
    //   <p>No expenses found.</p></Card>
    //   }
    // {filteredExpenses.length > 0 && 
    // <Card className="expenses">
    //   {filteredExpenses.map( (expense) =>(
    //     <ExpenseItem 
    //     key={expense.id} 
    //     title = {expense.title} 
    //     amount = {expense.amount} 
    //     date={expense.date}/> 
    //   ))}
    // </Card>}
    
    // </div>
  );
}

export default Expenses;

