import React from 'react'
import ExpenseForm from './ExpenseForm'
import './NewExpese.css'
export default function NewExpense( { onExpenseData } ) {
    const sumbitFormDatahandler = ( enteredData ) => {
        const expenseData = { ...enteredData, id: Math.random().toString() }
        onExpenseData( expenseData )
    }
    return (
        <div className='new-expense'>
            
            <ExpenseForm onSubmitForm={ sumbitFormDatahandler } />
        </div>
    )
}
