import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import  './info.css'
import { Link } from 'react-router-dom';
export default function Info() {
  return (
    <div className='info'>
    <Form className='w-50 mx-md-auto mx-md-auto g-5'>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Your Name</Form.Label>
      <Form.Control type="text" placeholder="Please Enter Your Name" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Your Number</Form.Label>
      <Form.Control type="number" placeholder="Please Enter Your Number" required/>
    </Form.Group>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Your Adress</Form.Label>
      <Form.Control type="text" placeholder="Please Enter Your Ardress" required/>
    </Form.Group>
    <Link className='nav-link'to='/greeting'><Button variant="success" type="submit">
      Order Now
    </Button> </Link> 
  </Form></div>
  )
}
