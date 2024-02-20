import React from 'react'
import {Row,Col, Button, Card} from 'react-bootstrap'
import useFetch from '../Hooks/useFetch'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../redux/slice/wishlistslice'
import { addToCart } from '../redux/slice/cartslice'

function Home() {

const data = useFetch('https://dummyjson.com/products')
const dispatch = useDispatch()


  return (
    <>
    
    <Row className='ms-5' style={{marginTop:'100px'}}>


{  data?.length>0?data?.map((product,index)=>(
  
  <Col className='mb-5' sm={12} lg={4} xl={3} md={6}  key={index}>

  <Card className='shadow rownded' style={{ width: '20rem',height:'30rem'  }}>
  <Card.Img variant="top" height={'200px'} src={product?.thumbnail}  />
  <Card.Body>
    <Card.Title>{product?.title}</Card.Title>
    <Card.Text>
      <p>{product.description.slice(0,50)}...</p>
      <h5>${product.price}</h5>
    </Card.Text>
    <div className="d-flex justify-content-between">
    <Button onClick={()=>dispatch(addToWishlist(product))} className='btn btn-light'><i className='fa-solid fa-heart text-danger fa-lg'></i></Button>
    <Button onClick={()=>dispatch(addToCart(product))}  className='btn btn-light'><i className='fa-solid fa-cart-shopping text-warning fa-lg'></i></Button>


    </div>
  </Card.Body>
</Card>

     </Col>


))


       :<p className='text-danger fw-bolder'>Nothing to display</p>  }
    </Row>
    
    
    </>
  )
}

export default Home