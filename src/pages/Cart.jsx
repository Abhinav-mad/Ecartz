import React, { useEffect, useState } from 'react'
import { Button } from 'react-bootstrap'

import { useDispatch, useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import { removeFromcart,emptyCart } from '../redux/slice/cartslice'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function Cart() {

  const cartArray=useSelector((state)=>state.cartReducer)
  const dispatch=useDispatch()
  const [total,setTotal] = useState()
  const navigate = useNavigate()

  const getCartTotal = ()=>{
    if(cartArray.length>0){
      setTotal(cartArray.map(item=>item.price).reduce((p1,p2)=>p1+p2))
    }
    else{
      setTotal(0)
    }
  }


useEffect(()=>{
  getCartTotal()
},[cartArray])


const handeCart= ()=>{
dispatch(emptyCart())
alert('Your order placed successfully...thank you for purchasing')
navigate('/')

}


  return (
    <div style={{marginTop:"100px"}}>
  
  {
    cartArray.length>0?
    <div className='row'>
      <div className='col-lg-8'>
        <table className='table shadow rounded'>
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Product image</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
             cartArray.map((product,index)=>(
             <tr key={index}>
              <td>{index+1}</td>
              <td>{product.title}</td>
              <td><img width={"100px"} height={"100px"} src={product.thumbnail} alt="" /></td>
              <td>{product.price}</td>
              <td><Button onClick={()=>dispatch(removeFromcart(product.id))} className='btn btn 'style={{background: "none"}} ><i class="fa-solid fa-trash"  style={{color: "#f34949"}}></i></Button>
</td>
             </tr>
             )) 
            }
          </tbody>
          

        </table>


      </div>


      <div className="col-lg-3">
        <div className="border rounded shadow p-2 mt-3x">
          <h1 className="text-primary">Cart summary</h1>
          <h4>Total products : <span>{cartArray.length}</span></h4>
          <h4>Total : <span className='text-danger fw-bolder fs-2'>${total}</span></h4>
          <div className="d-grid">
            <button onClick={handeCart} className='btn btn-success ,t-5 rounded'>checkout</button>
          </div>
        </div>
      </div>

    </div>
    
    



   :<div style={{height:'100vh'}} className='w-100 d-flex flex-column justify-content-center align-items-center'>
    <img height={'500px'} width={'500px'} src="https://img.freepik.com/premium-vector/girl-is-looking-empty-trolley_118167-11735.jpg?w=740" alt="" />
    <h3 className='text-center text-danger'>Cart Array!!</h3>
    <Link style={{textDecoration:'none'}} className='btn btn-warning rounded ' to={'/'}>Back to Home</Link>

  </div>
}

  

      

    </div>
  )
}

export default Cart