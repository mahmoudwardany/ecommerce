import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import { useDispatch ,useSelector} from 'react-redux'
import { productFetch } from '../../feature/productSlice';
import './home.css'
import Card from 'react-bootstrap/Card';
import { addtoCart } from '../../feature/cartSlice';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Carousel from 'react-bootstrap/Carousel';
import img1 from'./images/isto.jpg'
import img2 from'./images/ecommerce-web-page-concept-illustration_114360-8204.webp'
import img3 from'./images/ecommerce-10.webp'
import Spinner from 'react-bootstrap/Spinner';

function Home() {
  const products=useSelector((state)=> state.products)
  const[isPending,setisPending]=useState(true)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(productFetch())
    setisPending(false)
    },[])
  return (
  <> 
  <Carousel className='car'>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    <h1 className='text-md-center my-5 text-sm-center text-center'>Our Products</h1>
    {isPending &&  <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>}
    <Container className='py-4 col-sm-9 m-sm-auto text-sm-center '>
      <Row className='py-4  '>
    {products?.map ((product)=>(
    <Col key={product.id} className='text-sm-center my-2'>
    <Card   style={{ width: '18rem'}}>
        <Card.Img variant="top" className='text-md-center text-sm-center' src={product.image} style={{width:"200px",height:"200px"}}/>
      <Card.Body>
        <Card.Title className='text-md-center text-sm-center'>{product.title}</Card.Title>
        <Card.Text className='text-md-center text-sm-center'>{product.description}
        </Card.Text>
        <Card.Text className='text-md-center text-sm-center'>{product.price} $
        </Card.Text>
      </Card.Body>
      <div className='btn text-decoration-none'>
        <Button variant="primary"
      onClick={()=>dispatch(addtoCart(product))}
      className='text-md-center text-sm-center text-decoration-none'
      >Add to Cart</Button>
      </div>
      
    </Card>
   
    </Col>
      ))} 
      </Row>
    </Container>
    </>
  )
}
export default Home