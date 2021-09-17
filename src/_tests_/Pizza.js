import React from 'react';

export default function Pizza(props) {
    const {values, submit, change, disabled} = props

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onChange = evt => {
        const {name,value,checked,type} = evt.target
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse)
    }

    return (
    <form className='form-container' id='pizza-form' onSubmit={onSubmit}>
        <h1>Pizza Maker</h1> 
        <div className='pizza-form'>
            <label>Name
                <input 
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={onChange}
                />
            </label>
            <label>Size 
                <select name="size">
                    <option value='option1'>Small</option>                 
                    <option value='option2'>Medium</option>
                    <option value='option3'>Large</option>
                    <option value='option4'>X-Large</option>
                </select>
            </label>
            <label>Pepperoni
                <input
                   name='pepperoni'
                   type='checkbox'
                   checked={values.pepperoni}
                   onChange={onChange}
                   />
            </label>
            <label>Sausage
                <input
                   name='sausage'
                   type='checkbox'
                   checked={values.sausage}
                   onChange={onChange} 
                   />
            </label>
            <label>Bacon
                <input
                   name='bacon'
                   type='checkbox'
                   checked={values.bacon}
                   onChange={onChange} 
                   />
            </label>
            <label>Chicken
                <input
                   name='chicken'
                   type='checkbox'
                   checked={values.chicken}
                   onChange={onChange} 
                   />
            </label>
            <label>Special Instructions
                <input 
                name='special'
                type='text'
                value={values.special}
                onChange={onChange}
                />
            </label>
            <button id='order-button' disabled={disabled}>Submit</button>
        </div>
    </form>
    )
}
