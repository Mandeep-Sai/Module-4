import React from 'react'
import {Field,ErrorMessage} from 'formik'
import { TextField } from '@material-ui/core'

const InputField =({label,name})=>{
  return (
    <div>
      <Field fullWidth 
      required 
      as={TextField} 
      id="standard-basic" 
      label={label} 
      name={name}
      color ='secondary'
      helperText = {<ErrorMessage name={name}/>} />
    </div>
  )
}

export default InputField