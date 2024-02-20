import React from 'react'
import { Badge } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import {useSelector} from 'react-redux'
  

function Header() {
  const wishlist = useSelector((state)=>state.wishlistReducer)
  const cart = useSelector((state)=>state.cartReducer)

  return (
    <>
        <Navbar style={{zIndex:'1'}} expand="lg" className="bg-info top-0 position-fixed w-100 text-light">
      <Container>
        <Navbar.Brand ><Link to={'/'} style={{color:'White', fontWeight:'bold' ,textDecoration:'none'}} >
            <i class="fa-solid fa-truck-fast fa-bounce  me-2"></i> E-cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link ><Link to={'/wishlist'} className='d-flex align-items-center'  style={{color:'red', fontWeight:'bold' ,textDecoration:'none'}} >
            <i class="fa-solid fa-heart fa-beat-fade me-2"></i>wishlist
            <Badge className='rounded ms-2 bg-success'>{wishlist.length}</Badge>
            </Link></Nav.Link>
            <Nav.Link href="#link">
            <Link to={'/cart'} className='d-flex align-items-center'  style={{color:'red', fontWeight:'bold' ,textDecoration:'none'}} >
            <i class="fa-solid fa-shopping-cart fa-beat-fade me-2"></i>cart
            <Badge className='rounded ms-2 bg-success'>{cart.length}</Badge>
            </Link>

            </Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default Header