import React, { useState } from 'react';
import ExpensesFilter from '../NewExpense/ExpenseFilter';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = ( props ) => {
    const [ filteredYear, setFillteredYear ] = useState( '2020' );
    const filterChangeHandeler = ( selectedYear ) => {
        setFillteredYear( selectedYear )
    }
    const filteredExpense = props.items.filter( expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    } );

    let expenseContent = <p style={ { color: "white", textAlign: "center" } }>No Expense Found</p>;
    if ( filteredExpense.length > 0 ) {
        expenseContent = filteredExpense.map( ( expens ) =>
        (
            <ExpenseItem
                title={ expens.title }
                amount={ expens.amount }
                date={ expens.date }
                key={ expens.id }
            /> )
        )
    }
    return (
        <Card className="expenses">
            <ExpensesFilter
                selected={ filteredYear }
                onChangeFilter={ filterChangeHandeler }
            />
            { expenseContent }
        </Card>
    );
}

export default Expenses;