import React from "react";
import "../SliderTwo/SliderTwo.css";
import Carousel from "better-react-carousel";
import CardTwoProps from "./CardTwoProps";
//import images
import BgImage from "../../assest/images/bg.png";
import man1 from '../../assest/images/man1.PNG'
import man2 from '../../assest/images/man2.PNG'
import man3 from '../../assest/images/man3.PNG'
import Fade from 'react-reveal/Fade';
function SliderThree() {
 return (
  <>
   <div classID="ourteam" className="slider_three " data-aos="fade-up-right" ease-in-sine="ease-in-out" data-aos-delay="100" data-aos-duration="600" >
    <div className="slider-content1">
     <h1 className="pb-4 text-blod text-center" >Our team</h1>

     <div className="" >
      <Carousel cols={4} rows={1} gap={0} loop autoplay={1500} hideArrow={true}  >
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man1}
         title1="Marcus Friggieri"
         description="Operations Lead"
        />
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man3}
         title1="Marcus Friggieri"
         description="Operations Lead"
        ></CardTwoProps>
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man2}
         title1="Marcus Friggieri"
         description="Operations Lead"
        />
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man1}
         title1="Marcus Friggieri"
         description="Operations Lead"
        />
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man2}
         title1="Marcus Friggieri"
         description="Operations Lead"
        />
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man3}
         title1="Marcus Friggieri"
         description="Operations Lead"
        />
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man1}
         title1="Marcus Friggieri"
         description="Operations Lead"
        />
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man1}
         title1="Marcus Friggieri"
         description="Operations Lead"
        />
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man1}
         title1="Marcus Friggieri"
         description="Operations Lead"
        />
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man3}
         title1="Marcus Friggieri"
         description="Operations Lead"
        >
        </CardTwoProps>
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man2}
         title1="Marcus Friggieri"
         description="Operations Lead"
        />
       </Carousel.Item>
       <Carousel.Item>
        <CardTwoProps
         imgsrc={man3}
         title1="Marcus Friggieri"
         description="Operations Lead"
        >
        </CardTwoProps>
       </Carousel.Item>
      </Carousel>
     </div>


    </div>
   </div>
  </>
 );
}

export default SliderThree;
