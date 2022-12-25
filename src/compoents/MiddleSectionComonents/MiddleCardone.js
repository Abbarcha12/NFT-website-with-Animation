import React from 'react'
import "./MiddleCard.css"

import payment from "../../assest/images/payment.png"

const MiddleCardOne = (props) => {
 return (
  <div className='middlecard mt-5'>
   <div className='card '>
    <div className="cardhead">
     <h4>
      {props.title}
     </h4>
    </div>
    <div className="cardmiddle mb-2 mt-2 text-center text-white">
     {props.dec}
    </div>
    <ul className='mb-5'>
     <li className='plan me-5 p-1'><a href="#">
      <span className='ms-5' >Visit Guardarian</span>
     </a>
     </li>
    </ul>
    <div className='payments mb-2 text-center'>
     <img src={payment} alt="" className='img-fluid' />
    </div>
   </div>
  </div >
 )
}

export default MiddleCardOne