import React from 'react'

const Input = ({placeholder, setLinea}) => {
    // if placeholder has a value, then we will use it
    // otherwise we will use the default placeholder
    const placeholderValue = placeholder || 'Enter your text here'
    const onChangeValue = (e) => {
        setLinea(e.target.value)
    }
    return (
        <div className="col-sm-12 col-md-8 col-lg-6"> 
            <input type="text" onChange={onChangeValue} className="form-control" placeholder={placeholderValue} aria-label="Username" aria-describedby="basic-addon1" />
        </div>
    )
}

export default Input