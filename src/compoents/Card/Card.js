import React from 'react'
import './Card.css';



const CardProps = (props) => {
  return (
    <div className='container ' data-aos="fade-up-left" ease-in-sine="ease-in" data-aos-delay="100" data-aos-duration="600">

      <a href="">


        <div className="card3">
          <div className="card-img">
            <img src={props.imgsrc} alt="" className='img-fluid' />
          </div>
          <div className="card-info mb-4">
            <div className="title-img1">
              <img src={props.titleimg} className="img-fluid" alt="" />
            </div>
            {/* <div className="title-name ">
            <h6>{props.title}</h6>
          </div> */}
            <div className="title-date">
              <h6>{props.date}</h6>
            </div>
          </div>
          <div className="card-desc">
            <h4>{props.description} </h4>
          </div>
        </div>


      </a>
    </div>

  )
}

export default CardProps