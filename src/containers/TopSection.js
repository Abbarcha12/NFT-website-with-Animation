import React from 'react'
import "./TopSection.css"
const TopSection = () => {
 return (
  <div>
   <div className='game_header container'>
    <div className="row d-flex justify-content-center">
     <div className="col-lg-10  text-center" data-aos="zoom-in" >
      <img src='https://kleerun.game/images/kleerun-text.png' />
     </div>
    </div>
   </div>
   <div className="container">
    <div className="row d-flex justify-content-center " data-aos="zoom-in-up"   >
     <div className="col-lg-10 ">

      <div className='game-title ' data-aos="fade-up"
      >
       <h3>The future of gaming and E-sports <br /> over Blockchain is already here!</h3>

      </div>
     </div>
    </div>
   </div>
   <div className='play-container '>
    <div className='play-btn jiggle' data-aos="fade-right"  >
     <button>PLAY KLEERUN</button>
    </div>
    <div className='google-img jiggle'   >
     <img src='https://kleerun.game/images/google-play-badge.en.png' className='img-fluid' data-aos="fade-left" />
    </div>
   </div>
   <div className="container Vframe slide-up fade-in-up" data-aos="zoom-in-up"  >
    <div className="row">
     <div className="col-lg-12 d-flex justify-content-center">
      <div class="video">
       <iframe src="https://www.youtube.com/embed/FhzjgQVqwtw" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="">
       </iframe>
      </div>
     </div>
    </div>
   </div>
  </div>
 )
}

export default TopSection