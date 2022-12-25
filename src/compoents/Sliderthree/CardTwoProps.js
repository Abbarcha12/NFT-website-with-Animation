import React from 'react'
import '../Card/Card.css';
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
const CardTwoProps = (props) => {
 return (
  <div className="container">
   <div className='card2'>

    <div className="card1">

     <div className="card1-img">
      <img src={props.imgsrc} className="img-fluid " alt="" />
      <div className='overlay'>
       <div className='icon-bg mx-1'>
        <TwitterIcon />
       </div>
       <div className='icon-bg mx-1'>
        <LinkedInIcon />
       </div>
      </div>
     </div>
     <div className="card1-info mb-4">

      <h3 className='ps-3 mt-3'>{props.title1}</h3>
      <h5 className='ps-3 pb-3 text-muted '> {props.description} </h5>


     </div>
    </div>


   </div>
  </div>

 )
}

export default CardTwoProps