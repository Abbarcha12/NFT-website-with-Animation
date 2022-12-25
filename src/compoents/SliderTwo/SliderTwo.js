import React from "react";
import "./SliderTwo.css";
import Carousel from "better-react-carousel";

//import images
import BgImage from "../../assest/images/bg.png";
import fegex from "../../assest/images/fegex.png";
import bilaxy from "../../assest/images/bilaxy.png";
import cointiger from "../../assest/images/cointiger.png";
import xt from "../../assest/images/xt.png";
import whitebit from "../../assest/images/whitebit.png";
import inch from "../../assest/images/1inch.png";

function SliderTwo() {
  return (
    <>
      <div className="slider_two">
        <div className="slider-content">
          <h1 className="pb-4">Where to Buy $KLEE</h1>
          <Carousel cols={4} rows={1} gap={0} loop autoplay={2000} hideArrow={true} >
            <Carousel.Item>
              <img width="70%" src={bilaxy} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="70%" src={fegex} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="70%"
                src={cointiger}
                alt=""
                className="contiger_img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img width="70%" src={xt} alt="" className="contiger_img" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="70%" src={whitebit} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="70%" src={inch} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="70%" src={bilaxy} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="70%" src={fegex} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img
                width="70%"
                src={cointiger}
                alt=""
                className="contiger_img"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img width="70%" src={xt} alt="" className="contiger_img" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="70%" src={whitebit} alt="" />
            </Carousel.Item>
            <Carousel.Item>
              <img width="70%" src={inch} alt="" />
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
      <div className="slider_pic">
        <img src={BgImage} alt="" />
      </div>
    </>
  );
}

export default SliderTwo;
