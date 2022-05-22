import React from 'react'

const Select = ({setSelectedValue}) => {
    const onChangeValue = (e) => {
        setSelectedValue(e.target.value)
    }
    return (
        <div className="col-xs-12 col-md-8 col-lg-6">
            <select className="form-select" onChange={onChangeValue}>
                <option value="fire">House on fire</option>
                <option value="futurama">Futurama</option>
                <option value="history">History Channel</option>
                <option value="matrix">Matrix</option>
                <option value="philosoraptor">Philosoraptor</option>
                <option value="smart">Smart Guy</option>
            </select>

        </div>
    )
}

export default Select