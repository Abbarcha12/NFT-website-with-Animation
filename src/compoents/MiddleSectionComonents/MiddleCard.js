import React from 'react'
import "./MiddleCard.css"
import shark from "../../assest/images/kaiba.png"
import hourse from "../../assest/images/hourse.png"

const MiddleCard = (props) => {
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
     <li className='plan me-5 '><a href="#">
      <img class="sharimg ms-2" src={shark} alt="kaiba.png" />
      <span className='ms-5' >Kaibex</span>
     </a>
     </li>
     <li className='plan me-5 mb-5'><a href="#">
      <img class="sharimg ms-2" src={hourse} alt="kaiba.png" />
      <span className='ms-5 ' >Uniswap</span>
     </a>
     </li>
    </ul>
   </div>
  </div>
 )
}

export default MiddleCard