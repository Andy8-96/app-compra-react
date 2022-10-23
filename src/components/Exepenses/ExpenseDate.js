import React  from 'react';

import  './ExpenseDate.css';


const ExpenseDate = (props) => {

    const mes = props.date.toLocaleString('es-ES', { month : 'long'});
    const dia = props.date.toLocaleString('es-ES', { day : '2-digit'});
    const anio = props.date.getFullYear();

    return(
        <div className='expense-date'>
            <div className='expense-date__month'>{mes}</div>
            <div className='expense-date__year'>{anio}</div>
            <div className='expense-date__day'>{dia}</div>
        </div>
    )

}
export default ExpenseDate;