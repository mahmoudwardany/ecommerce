import Button from 'react-bootstrap/esm/Button';
import Table from 'react-bootstrap/Table';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  ClearCart,  removeFromCart } from '../../feature/cartSlice';
 function Cart() {
  const cart=useSelector(state => state.cart.cartitem)
  const disptach=useDispatch()

const totalPrice=cart.reduce((acc,product)=>{
  acc +=product.price
return acc
},0)
  return (
    <>
<h1 className="pt-5 text-md-center text-sm-center">Welcome to Your Cart</h1>
 
 <section className='tb'>
<Table striped bordered hover className='pt=5 '>
      <thead>
        <tr>
        <th>Id</th>
          <th>Title</th>
          <th>Image</th>
          <th>Description</th> 
           <th>Price</th>
        <th>Qauntity</th>
        <th>Total </th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        {cart.map(product =>(  <tr>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><img src={product.image} alt={product.name}style={{width:"100px",height:"100px"}}/></td>
          <td>{product.description}</td>
           <td>{product.price} $</td>
          <td>{product.quantity} </td>
        <td>{product.quantity * product.price}</td>
          <td><Button variant='danger'
          onClick={()=> disptach(removeFromCart(product))}
          >Delete</Button></td>
        </tr>       ) )}
      
      </tbody>
    </Table> 
        <Button
 variant='warning'
 onClick={()=> disptach(ClearCart())}
  className='text-md-center text-center mt-3 m-sm-auto mt-5'>
    Clear All Products
    </Button>  
    <h4 className='text-end mx-3'>Total Price : {totalPrice} $</h4>
    <Link className='nav-link text-md-center text-sm-center' to='/info'><Button variant='success'>Order Now</Button></Link>
    </section> 


</>
  )
}
export default Cart