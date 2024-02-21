import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <div>
  <MDBFooter bgColor='dark' className='text-center text-lg-start   text-muted '>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block '>
          <span className='ms-5'>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='' className='me-4 text-danger'>
            <MDBIcon fab icon="facebook-f" />
          </a>
          <a href='' className='me-4 text-danger'>
            <MDBIcon fab icon="twitter" />
          </a>
          <a href='' className='me-4 text-danger'>
            <MDBIcon fab icon="google" />
          </a>
          <a href='' className='me-4 text-danger'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='' className='me-4 text-danger'>
            <MDBIcon fab icon="linkedin" />
          </a>
          <a href='' className='me-4 text-danger'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fs-5 fw-bold mb-4'>
                <MDBIcon icon="play" className="me-3" />
                <span className='text-danger'>E Cart</span>
              </h6>
              <p className='text-light'>
                Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet,
                consectetur adipisicing elit.
              </p>
            </MDBCol>

            <MDBCol md="2" lg="2" xl="2" className='mx-auto mb-4'>
              
            </MDBCol>

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4 text-light'>
              <h6 className='text-uppercase fw-bold mb-4 text-danger'>Guides</h6>
              <p>
                <a href='#!' className='text-reset' style={{textDecoration:'none'}}>
                  React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'  style={{textDecoration:'none'}}>
                  React Bootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'  style={{textDecoration:'none'}}>
                  Bootswatch
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4 text-light'>
              <h6 className='text-uppercase fw-bold mb-4 text-danger'>Contact Us</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                info@example.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-light' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2024 Copyright :
        <a className='fw-bold text-danger' href='https://mdbootstrap.com/' style={{textDecoration:'none'}}>
           E-cart. Build With React
        </a>
      </div>
    </MDBFooter>


    </div>
  )
}

export default Footer