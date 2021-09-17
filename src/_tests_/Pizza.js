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
    <form onSubmit={onSubmit}>
        <h1>Pizza Maker</h1> 
        <div id='pizza-form'>
            <label>Name
                <input id='name-input'
                    name='name'
                    type='text'
                    value={values.name}
                    onChange={onChange}
                />
            </label>
            <label>Size 
                <select id='size-dropdown' value={values.size} name="size" onChange={onChange}>
                    <option value='Small'>Small</option>                 
                    <option value='Medium'>Medium</option>
                    <option value='Large'>Large</option>
                    <option value='X-Large'>X-Large</option>

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
                <input id='special-text'
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
