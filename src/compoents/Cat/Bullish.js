import React from "react";
import "./Bullish.css";

//import images
import car from "../../assest/images/car.png";
import bgcar from "../../assest/images/sec3-bg-bottom.png"

function Bullish() {
  return (
    <>
      <div className="car_section" >
        <div className="gaming_title" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" >
          <h1>
            <span>KLEERUN</span>IS PIONEERING THE <span>BLOCKCHAIN</span>GAMING{" "}
            <span>INDUSTRY!</span>
          </h1>
        </div>
        <div className="container-fluid Bullish_section">
          <div className="row">
            <div className="col-md-6" data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" >
              <img src={car} alt="" className="img-fluid" />
            </div>
            <div className="col-md-6" data-aos="zoom-in-up" data-aos-easing="ease-in-sine" data-aos-duration="600" >
              <div className="invest-title" >
                <h3>Invest in the future!</h3>
              </div>
              <h1 className="bushi">Bullish!!!</h1>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default Bullish;
