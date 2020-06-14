import React, { Component } from 'react'
import {Formik,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'
import 'bootstrap/dist/css/bootstrap.min.css';
import {Row,Col,Form,Button} from 'react-bootstrap'
import InputField from './InputField'
import { TextField } from '@material-ui/core'

const schema = Yup.object({
  name : Yup.string().required('Required'),
  email : Yup.string().email('Invalid Email').required('Required'),
  password : Yup.string().required('Required')
})

export class FormExample extends Component {
  sendForm =()=>{
    console.log('hello')
  }
  handleSubmit =()=>{
    console.log('Yolo')
  }
  render() {
    return (
      <div id='form'>
        <Formik
        initialValues={{
          name :'',
          email:'',
          password :''
        }}
        onSubmit ={this.sendForm}
        validationSchema={schema}
        >
          {({dirty ,isValid}) =>{
            return(
              <Form onSubmit={this.handleSubmit}>
                <h4 className='text-center'>SignUp</h4>
                <Form.Group as={Row} >
                  <InputField label='Name' name='name'/>
                </Form.Group>
                <Form.Group as={Row}>
                <InputField label='Email' name='email'/>
                </Form.Group>
                <Form.Group as={Row} >
                  <InputField label='Password' name='password'/>
                </Form.Group>
                <Button disabled={!dirty || !isValid} type="submit">Submit</Button>
              </Form>
            )
          }}
        </Formik>
      </div>
    )
  }
}

export default FormExample
