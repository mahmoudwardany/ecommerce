import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row'
import  './info.css'


const errors = {
  name: "",
  Address:"",
  number:""
};

export default function Info() {
  const [name,setName]=useState('')
  const handleSubmit=()=>{
    alert(`Thank You ${name}. We Recived Your Order`)
  }
  return (
    <div className='info'>
    <Form className='w-50  m-sm-auto bg-light'onSubmit={handleSubmit}>
      <Row className="mb-3">
        <Form.Group as={Col} md="12" className='m-sm-auto my-2'  controlId="validationCustom01">
          <Form.Label className='text-sm-start m-2'>Name</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Your Name"
            className={`${errors.name}` ? 'error-control' : 'form-control'}
            onChange={(e)=>setName(e.target.value)}
          />
        </Form.Group>
        <Row>
        <Form.Group as={Col} md="12" controlId="validationCustom02"className='m-sm-auto my-2'  >
          <Form.Label className='text-md-start m-2'>Your Address</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Address"
            className={`${errors.Address}` ? 'error-control' : 'form-control'}
          />
        </Form.Group>
        </Row>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} md="12"className='m-sm-auto my-2'  controlId="validationCustom03">
          <Form.Label className='text-md-start m-2'>Your Number</Form.Label>
          <Form.Control type="phone"
           placeholder="Number"
            required 
            className={`${errors.number}` ? 'error-control' : 'form-control'}
            />
             
        </Form.Group>
      </Row>
      
<Button type="submit"variant='success'className='mx-auto my-1 text-md-center text-sm-center'
  >Order Now</Button>  
    </Form>
  </div>
  )
}
