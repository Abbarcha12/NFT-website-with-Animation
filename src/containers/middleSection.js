import React from 'react'
import "./middleSection.css"
import MiddleCard from "../compoents/MiddleSectionComonents/MiddleCard"
import MiddleCardOne from "../compoents/MiddleSectionComonents/MiddleCardone"
import middle from "../assest/images/middlebackground.png"
import SliderTwo from "../compoents/SliderTwo/SliderTwo"
import Bullish from "../compoents/Cat/Bullish"
// import Card from '../compoents/Card/Card'
import Stats from "../compoents/stats/Stats"
import Slider from "../compoents/Silder/Slider"
import man1 from '../assest/images/man1.PNG'
import man2 from '../assest/images/man2.PNG'
import man3 from '../assest/images/man3.PNG'
import SliderThree from '../compoents/Sliderthree/SliderThree'
import Tokenomic from "../containers/Tokenomic"
const MiddleSection = () => {
  return (
    <>
      <div className='MainSection'>
        <div className="container">
          <div className="row d-flex justify-content-center ">

            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-2 MiddleCard " data-aos="fade-right" ease-in-sine="ease-in" data-aos-delay="300" data-aos-duration="800" >
              <MiddleCard title="BUY WITH CRYPTOCURRENCY"
                dec="* Decentralized exchanges below. Ethereum GAS fees are to be expected" />
            </div>
            <div className="col-lg-5 col-md-6 col-sm-12 col-xs-2 MiddleCard" data-aos="fade-left" ease-in-sine="ease-in" data-aos-delay="300" data-aos-duration="800" ><MiddleCardOne title="Buy with fiat / credit card" dec="* Transaction fees will apply. KYC verification required. Not validated in all countries" /></div>
          </div>
        </div>

        <div>

        </div>
      </div>
      <div className="container Mmm">
        <div className="row d-flex justify-content-center ">

          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 MiddleCard ">
            <MiddleCard title="BUY WITH CRYPTOCURRENCY"
              dec="* Decentralized exchanges below. Ethereum GAS fees are to be expected" />
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-xs-12 MiddleCard"><MiddleCardOne title="Buy with fiat / credit card" dec="* Transaction fees will apply. KYC verification required. Not validated in all countries" /></div>
        </div>
      </div>
      <div className='MainSection1 '>
        <img src={middle} alt="" className='img-fluid' />
      </div>
      <div className="SliderOne">
        <div className="ms-5">
          <h1 className='ms-5 mb-5'>
            Latest News
          </h1>
          <Slider className="mt-4" />
        </div>
      </div>
      <div>
        <Stats />
      </div>

      <Bullish />
      <SliderTwo />
      <div classID="ourteam">
        <SliderThree />
      </div>
      <div>
        <Tokenomic />
      </div>
    </>


  )
}

export default MiddleSection