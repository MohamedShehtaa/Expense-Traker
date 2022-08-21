import React, { useState } from 'react'
import './ExpenseForm.css'

export default function ExpenseForm( { onSubmitForm } ) {
    const [ add, setAdd ] = useState( false )
    const [ inputELmentValues, setInputElmentValues ] = useState( {
        title: "",
        amount: "",
        date: new Date( 2019, 1, 1 )
    } )
    const titleChangeHandler = ( event ) => {
        setInputElmentValues( ( prevExpenses ) => {
            return {
                ...prevExpenses,
                title: event.target.value
            }
        } )
    }
    const amountChangeHandler = ( event ) => {
        setInputElmentValues( ( prevExpenses ) => {
            return {
                ...prevExpenses,
                amount: event.target.value
            }
        } )

    }
    const dateChangeHandler = ( event ) => {
        setInputElmentValues( ( prevExpenses ) => {
            return {
                ...prevExpenses,
                date: new Date( event.target.value )
            }
        } )
    }
    const submitHandler = ( event ) => {
        event.preventDefault()
        onSubmitForm( inputELmentValues )
        setInputElmentValues( () => {
            return {
                title: "",
                amount: "",
                date: new Date( 2019, 1, 1 ),
            }
        } )
    }

    const clickHnadeler = () => {
        setAdd( !add )
    }
    const cancelHandeler = () => {
        setAdd( !add )
    }
    return (
        <>
            { !add && <button className='new-expense__actions' onClick={ clickHnadeler }>Add New Expense</button> }
            { add && <form onSubmit={ submitHandler }>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" value={ inputELmentValues.title } onChange={ titleChangeHandler } />
                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={ inputELmentValues.amount } onChange={ amountChangeHandler } />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" min="2019-01-01" max="2022-12-31" value={ inputELmentValues.date } onChange={ dateChangeHandler } />
                    </div>
                </div>
                <div className='btn-contaiers'>
                    <div className='new-expense__actions'>
                        <button type='submit'>Add Expense</button>
                    </div>
                    <div className='new-expense__actions'>
                        <button onClick={ cancelHandeler }>Cancel</button>
                    </div>
                </div>

            </form> }
        </>

    )
}

