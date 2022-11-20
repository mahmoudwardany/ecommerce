import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import './nav.css'
function Navbars() {
  const cart=useSelector(state =>state.cart.cartitem)
  return (
    <section >
    <Navbar fixed='top'className='bg-light 'expend='bg'>
    <Container>
        <Link className='navbar-brand ' to="/ecommerce"><h2>Online shop</h2></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
          <Link to='/cart'>
<div className="bg-bar text-sm-start">
<svg xmlns="http://www.w3.org/2000/svg" 
width="35"
 height="35"
  fill="currentColor"
   className="bi bi-cart-plus-fill"
    viewBox="0 0 16 16">
  <path d="M.5 1a.5.5 0 0 0 0 1h1.11l.401 1.607 1.498 7.985A.5.5 0 0 0 4 12h1a2 2 0 1 0 0 4 2 2 0 0 0 0-4h7a2 2 0 1 0 0 4 2 2 0 0 0 0-4h1a.5.5 0 0 0 .491-.408l1.5-8A.5.5 0 0 0 14.5 3H2.89l-.405-1.621A.5.5 0 0 0 2 1H.5zM6 14a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm7 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM9 5.5V7h1.5a.5.5 0 0 1 0 1H9v1.5a.5.5 0 0 1-1 0V8H6.5a.5.5 0 0 1 0-1H8V5.5a.5.5 0 0 1 1 0z"/>
</svg>

      <h5 className='quan  text-center'>{cart.length}</h5>
</div>
 </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
      </Navbar>
      </section>
  )
}
export default Navbars      