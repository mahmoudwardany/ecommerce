import Button from 'react-bootstrap/esm/Button';
import './cart.css'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import {  ClearCart,  removeFromCart } from '../../feature/cartSlice';
 function Cart() {
  const cart=useSelector(state => state.cart.cartitem)
  const disptach=useDispatch()

const totalPrice=cart.reduce((acc,product)=>{
  acc +=product.price * product.cartQuantity
return acc
},0)
  return (
    <>
<h1 className="pt-5 text-md-center text-sm-center">Your Cart</h1>
       <Button
 variant='warning'
 onClick={()=> disptach(ClearCart())}
  className='mx-sm-auto mx-md-auto mb-3 text-center d-flex'>
    Clear All Products
    </Button>  
 <section className='tb '>
<table    className='pt=5 bordered striped hover'>
      <thead>
        <tr>
        <th>Id</th>
          <th>Title</th>
          <th>Image</th>
           <th>Price</th>
        <th>Qauntity</th>
        <th>Total </th>
          <th>Actions</th>

        </tr>
      </thead>
      <tbody>
        {cart.map(product =>(  <tr key={product.id}>
          <td>{product.id}</td>
          <td>{product.title}</td>
          <td><img src={product.image} alt={product.name}style={{width:"100px",height:"100px"}}/></td>
           <td>{product.price} $</td>
          <td>{product.cartQuantity} </td>
        <td>{product.cartQuantity * product.price}</td>
          <td><Button variant='danger'
          onClick={()=> disptach(removeFromCart(product))}
          >Delete</Button></td>
        </tr>       ) )}
      
      </tbody>
    </table> 
    <span>
    <h4 className='text-md-center mx-3 text-sm-center mt-2'>Total Price : {totalPrice } $</h4>
    
      <Link className='nav-link text-md-center text-sm-center m-sm-auto m-md-auto'
      to='/info'>
      <Button variant='success'>Order Now
      </Button>
      </Link>
    </span> 
    </section> 


</>
  )
}
export default Cart