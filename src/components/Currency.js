import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
    const {dispatch} =useContext(AppContext)
    const [currency, setCurrency]=useState('£')

    const handleCurrencyChange = (event) => {
        const newCurrency = event.target.value;
        setCurrency(newCurrency);
        
        // Update the currency symbol in the context
        dispatch({ type: 'CHG_CURRENCY', payload: newCurrency });
    };

  return (
    <div className='alert alert-success'>
         
         <div className="row align-items-center">
        <div className="col">
            <span>Currency:</span>
        </div>
        <div className="col">
            <select className="form-select form-select-sm w-100" id="inputCurrency" value={currency} onChange={handleCurrencyChange} required>
                <option value="$">Dollar ($)</option>
                <option value="£">Pound (£)</option>
                <option value="€">Euro (€)</option>
                <option value="₹">Rupee (₹)</option>
            </select>
        </div>
    </div>

                
    </div>
  )
}

export default Currency