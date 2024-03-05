import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
   
    const handleBudgetChange = (event) => {

        let updatedBudget = parseInt(event.target.value);

        const totalSpending = expenses.reduce((total, item) => total + item.cost, 0);


        if (updatedBudget < totalSpending) {
            alert('The budget cannot be lower than the total spending.');
            return;
        }


        if (updatedBudget > 20000) {

            alert('The budget cannot exceed £20,000.');
            return;
        }

        setNewBudget(updatedBudget);


    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget:{currency}</span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange} />

        </div>
    );
};
export default Budget;
