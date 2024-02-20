import React from 'react'
import { Button, Card, Col, Row } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { removeFromWishlist } from  '../redux/slice/wishlistslice'

function Wishlist() {

  const wishlistArray = useSelector((state)=>state.wishlistReducer)
  const dispatch = useDispatch()

  return (
    <div style={{ marginTop: '100px' }}>
      <Row>{
        wishlistArray.length>0? wishlistArray.map((product, index) => {

          <Col className='mb-5' sm={12} lg={4} xl={3} md={6} key={index}>

            <Card className='shadow rownded' style={{ width: '20rem', height: '30rem' }}>
              <Card.Img variant="top" height={'200px'} src={product?.thumbnail} />
              <Card.Body>
                <Card.Title>{product?.title}</Card.Title>
                <Card.Text>
                  <p>{product.description.slice(0, 50)}...</p>
                  <h5>${product.price}</h5>
                </Card.Text>
                <div className="d-flex justify-content-between">
                  <Button onClick={()=>dispatch(removeFromWishlist(product.id))}  className='btn btn-light'><i className='fa-solid fa-trash text-danger fa-lg'></i></Button>
                  <Button className='btn btn-light'><i className='fa-solid fa-cart-shopping text-warning'></i></Button>


                </div>
              </Card.Body>
            </Card>

          </Col>
        }) : <div style={{height:'100vh'}} className="d-flex w-100 flex-column justify-content-center align-items-center">
          <img height={'500px'} src='' alt="" />
          <h3 className='text-center text-danger'>Wishlist is empty</h3>
          <Link style={{textDecoration:'none'}} className='btn btn-primary rounded' to={'/'}>Back to Home</Link>
        </div>

      }
      </Row>



    </div>
  )
}

export default Wishlist