import { useEffect } from 'react';
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
import img1 from'./images/istockphoto-1206800961-612x612.jpg'
import img2 from'./images/ecommerce-web-page-concept-illustration_114360-8204.webp'
import img3 from'./images/ecommerce-10.webp'

function Home() {
  const products=useSelector((state)=> state.products)
  const dispatch = useDispatch()
  useEffect(()=>{
    dispatch(productFetch())
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
    <h1 className='text-md-center my-5 text-sm-center'>Our Products</h1>
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
      <Button variant="primary"
      onClick={()=>dispatch(addtoCart(product))}
      className='text-md-center text-sm-center'
      >Order Now</Button>
    </Card>
   
    </Col>
      ))} 
      </Row>
    </Container>
    </>
  )
}
export default Home