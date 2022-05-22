import React from 'react'
import { Fragment } from 'react'
import Select from './Select'
import Input from './Input'

const Form = ({setSelectedValue, setLinea1, setLinea2}) => {
  return (
    <Fragment>
        <div className="row d-flex justify-content-center mt-3 mb-3 me-2">
            <Select setSelectedValue={setSelectedValue}/>
        </div>
        <div className="row d-flex justify-content-center input-group mb-3">
            <Input setLinea={setLinea1} placeholder="Insertar texto arriba..."/>
        </div>
        <div className="row d-flex justify-content-center input-group mb-3">
            <Input setLinea={setLinea2} placeholder="Insertar texto abajo..."/>
        </div>
    </Fragment>
  )
}

export default Form