import React, { Component } from 'react'
import {Container,Form,Button,FormControl,InputGroup,Col} from 'react-bootstrap'
import { Formik } from 'formik';
import * as Yup from 'yup'


const schema = Yup.object({
  name : Yup.string().required('Required').min(3,'Minimum 3 characters required'),
  surname : Yup.string().required('Required').min(2,'Minimum 2 characters required'),
  email : Yup.string().required('Required').email('Invalid Email Address'),
  password : Yup.string().required('Required').matches(	
  /^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{8,}$/,'Must be 8 characters and must contain alteast 1 letter and 1 number'),
  street : Yup.string().required('Required'),
  city : Yup.string().required('Required'),
  zip : Yup.string().required('Required').min(5,'Invalid Zip Code'),
  dob:Yup.date().required('Required'),
  creditCard :Yup.number().required('Required').min(5,'Invalid card details')
  
})

class RegisterForm extends React.Component {
  state = {
    hide : true,
    data :[]
  }
  render(){
  return(
  <Container className='form mb-3'>
    <p className='display-4 text-center'>Sign Up</p>
    <Formik
    validationSchema= {schema}
    onSubmit={values => {
      this.setState({data : values})
      console.log(values);
    }}
    initialValues = {{
      name:'',
      surname:'',
      email :'',
      password:'',
      street:'',
      city :'',
      zip :'',
      dob:'',
      creditCard:''
    }}
    >
    {({
      handleSubmit,
      handleBlur,
      handleChange,
      values,
      touched,
      isValid,
      errors,
    })=>(
      <Form noValidate onSubmit={handleSubmit} >
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="name">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                name="name"
                value={values.name}
                onChange={handleChange}
                isValid={touched.name && !errors.name}
                isInvalid ={ errors.name}
                placeholder='Name*'
              />
              <Form.Control.Feedback type='valid' tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.name}
                </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="surname">
              <Form.Label>Surname</Form.Label>
              <Form.Control
                type="text"
                name="surname"
                value={values.surname}
                onChange={handleChange}
                isValid={touched.surname && !errors.surname}
                isInvalid ={errors.surname}
                placeholder='Surname*'
              />
              <Form.Control.Feedback type='valid' tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.surname}
                </Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        <Form.Row>
          <Form.Group as={Col} md="6" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                name="password"
                placeholder='Password*'
                value={values.password}
                onChange={handleChange}
                isValid={touched.password && !errors.password}
                isInvalid ={errors.password}
              />
              <Form.Control.Feedback type='valid' tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.password}
                </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="6" controlId="dob">
              <Form.Label>Birthday</Form.Label>
              <Form.Control
                type="date"
                name="dob"
                value={values.dob}
                onChange={handleChange}
                isValid={touched.dob && !errors.dob && !(parseInt(values.dob) <=1910)}
                isInvalid ={errors.dob || (parseInt(values.dob) <=1910)}
              />
              <Form.Control.Feedback type='valid' tooltip>Looks good!</Form.Control.Feedback>
              {(parseInt(values.dob)<=1910) ? 
              <Form.Control.Feedback type="invalid" tooltip>
              'Must be born after 1910'
              </Form.Control.Feedback>  :
              <Form.Control.Feedback type="invalid" tooltip>
              {errors.dob}
              </Form.Control.Feedback>
            }
            </Form.Group>
        </Form.Row>
        <Form.Group as={Col} md={13} controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="text"
            name="email"
            placeholder='Email*'
            value={values.email}
            onChange={handleChange}
            isValid={touched.email && !errors.email}
            isInvalid ={errors.email}
          />
          <Form.Control.Feedback type='valid' tooltip>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid" tooltip>
              {errors.email}
            </Form.Control.Feedback>
        </Form.Group>
      <Form.Row>
        <Form.Group as={Col} md="4" controlId="street">
              <Form.Label>Street</Form.Label>
              <Form.Control
                type="text"
                name="street"
                placeholder='Street Name*'
                value={values.street}
                onChange={handleChange}
                isValid={touched.street && !errors.street}
                isInvalid ={errors.street}
              />
              <Form.Control.Feedback type='valid' tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.street}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="city">
              <Form.Label>City</Form.Label>
              <Form.Control
                type="text"
                name="city"
                placeholder='City*'
                value={values.city}
                onChange={handleChange}
                isValid={touched.city && !errors.city}
                isInvalid ={errors.city}
              />
              <Form.Control.Feedback type='valid' tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.city}
                </Form.Control.Feedback>
            </Form.Group>
            <Form.Group as={Col} md="4" controlId="zip">
              <Form.Label>Zip</Form.Label>
              <Form.Control
                type="text"
                name="zip"
                placeholder='Zip Code*'
                value={values.zip}
                onChange={handleChange}
                isValid={touched.zip && !errors.zip}
                isInvalid ={errors.zip}
              />
              <Form.Control.Feedback type='valid' tooltip>Looks good!</Form.Control.Feedback>
              <Form.Control.Feedback type="invalid" tooltip>
                  {errors.zip}
                </Form.Control.Feedback>
            </Form.Group>
        </Form.Row>
        <Form.Group as={Col} md={13} controlId="creditCard">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control
            type="text"
            name="creditCard"
            placeholder='Credit Card Number*'
            value={values.creditCard}
            onChange={handleChange}
            isValid={touched.creditCard && !errors.creditCard}
            isInvalid ={errors.creditCard}
          />
          <Form.Control.Feedback type='valid' tooltip>Looks good!</Form.Control.Feedback>
          <Form.Control.Feedback type="invalid" tooltip>
              {errors.creditCard}
            </Form.Control.Feedback>
        </Form.Group>

        <Button className='submitBtn' type="submit" 
        disabled={(Object.keys(errors).length === 0) ? null : this.state.hide}
        >Submit form</Button>
        {console.log(errors)}
      </Form>

    )}
    </Formik>
  </Container>
  )

          }
}
export default RegisterForm
