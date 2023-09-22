import React, { useEffect, useState } from 'react'
import CardHeader from './CardHeader';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { DLT , ADD, REMOVE} from '../Redux/Actions/Action';

const CardDetails = () => {

  const[data, setData]=useState([]);
  const {id} = useParams();


  const getdata = useSelector((state)=>state.cartreducer.carts)
  console.log(getdata, 'getdata');

 const dispatch = useDispatch();


 //detele items
 const dlt = (id) => {
   dispatch(DLT(id))
   history("/buyProducts")
  }

  const history = useNavigate()

  const compare = () => {
    let compareData = getdata.filter((item) =>{
      return item.id == id
    })
    //console.log(compareData, 'compareData');
    setData(compareData)
  }

  //increment Quantity
  const increment = (data) => {
    //console.log(data ,'event');
    dispatch(ADD(data));
  };

  // remove or decrement Quantity
  const decrement = (item) => {
    dispatch(REMOVE(item))
  }


  useEffect (() => {
    compare();
  }, [id])
  return (
   <>
    <CardHeader/>
    <div className='container mt-2'>
      <h2>Item Details Page</h2>
      <section className='container mt-3'>
       <div className='d-flex me-5'>

        {
          data.map((item) => {
            return(
              <>
               <div className="itemsdetails">
            <img style={{width:"130px", padding:"10px"}} src={item.image} alt="" />
        </div>

        <div className="details">
            <Table>
                <tbody>
                   <tr>
                     <td>
                        <p><strong>Title</strong>:{item.title}</p>
                        <p><strong>Price</strong>:₹ {item.price} </p>
                        <p><strong>Category</strong>:{item.category}</p>
                        <p><strong>Total</strong>:₹ {item.price * item.quantity}</p>
                        <div className='d-flex mt-4 justify-content-between align-items-center p-1' style={{width:100, cursor:"pointer", backgroundColor:"#dddd", color:"#111"}}>
                          <span onClick={item.quantity <= 1? ()=>dlt(item.id) : ()=> decrement(item)} style={{fontSize:28}}>-</span>
                          <span style={{fontSize:24}}>{item.quantity}</span>
                          <span onClick={()=>increment(item)} style={{fontSize:28}}>+</span>
                        </div>
                     </td>
                     <td>
                        <p><strong>Rating :</strong> <span style={{backgroundColor:"green"}}> {item.rating.rate}★</span></p>
                        <p><strong>Description :</strong> <span >{item.description} </span></p>
                        <p><strong>Remove :</strong> <span style={{cursor:"pointer"}} onClick={()=>dlt(item.id)} > <i class="fa-sharp fa-solid fa-trash" style={{color:"red"}}></i> </span></p>
                     </td>
                   </tr>   
                </tbody>   
            </Table>
        </div>
              </>
            )
          })
        }
      
       </div>
      </section>
    </div>
   </>
  )
}

export default CardDetails
