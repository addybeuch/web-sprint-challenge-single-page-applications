import React from 'react';

export default function pizza(props) {
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
    <form className='form-container' onSubmit={onSubmit}>
        <h1>Pizza Maker</h1> 
        <div className='pizza-form'>
            <label>Name
                <input 
                    value={values.name}
                    onChange={onChange}
                    name='name'
                    type='text'
                />
                    
            </label>                 
        </div>
    </form>
    )
}