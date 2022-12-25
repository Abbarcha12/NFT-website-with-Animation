import React from 'react'
import "./Footer.css"

import Img from "../assest/images/ch-all.png"
import Cute from "../assest/images/cute.png"
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import RedditIcon from '@material-ui/icons/Reddit';
import NearMeIcon from '@material-ui/icons/NearMe';
import Fade from 'react-reveal/Fade';
function Footer() {
 return (
  <footer className='footer ' >
   <div className="container-fluid">
    <div className="row">


     <div className="col-md-12 px-0" data-aos="fade-up" ease-in-sine="ease-in" data-aos-delay="100" data-aos-duration="600">

      <img src={Img} className="w-100 img-fluid" alt="cartoons" />

     </div>

    </div>
   </div>
   <div className='container'>
    <div className="row">
     <div className="col-md-12">
      <div className="text-center footer-head">
       <div className='footer-main-heading'>
        <h2 className='fancy-title py-5'><span>KLEERUN</span> IS PIONEERING THE <span>BLOCKCHAIN</span> GAMING <span>INDUSTRY!</span></h2>
       </div>
       <div className='sub-heading mx-auto' data-aos="fade-up" ease-in-sine="ease-in" data-aos-delay="100" data-aos-duration="600">
        <h3>Invest in the future!</h3>
       </div>
      </div>
      <div className="footer-body border-bottom border-secondary mb-5">
       <div className='cuteCat-logo my-4' data-aos="fade-up" ease-in-sine="ease-in" data-aos-duration="600">
        <img src={Cute} alt="cat" />
        <span className='ms-3'>KleeKai</span>
       </div>
       <div className='footer-icons' data-aos="fade-up" ease-in-sine="ease-in" data-aos-delay="100" data-aos-duration="600">
        <a href="#">
         <InstagramIcon />
        </a>
        <a href="#">
         <TwitterIcon />
        </a>
        <a href="#">
         <RedditIcon />
        </a>
        <a href="#">
         <NearMeIcon />
        </a>

       </div>
      </div>
      <div className='footer-policies px-5 py-4'>
       <a href="#" className='my-3'>All Rights Reserved to © 2022 KleeKai</a>
       <a href="#" className='my-3'>Privacy Policy</a>
      </div>
     </div>
    </div>
   </div>
  </footer>
 )
}

export default Footer