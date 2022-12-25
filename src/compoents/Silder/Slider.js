import React from 'react'
import "./slider.css"
import img1 from '../../assest/images/man.nft.PNG'
import img2 from '../../assest/images/nft.2.PNG'
import img3 from '../../assest/images/nft.3.PNG'
import img4 from '../../assest/images/nft.4.PNG'
import img5 from '../../assest/images/nft.5.PNG'
import img11 from '../../assest/images/iosmig.PNG'
import img12 from '../../assest/images/eaaaa.PNG'

import img6 from '../../assest/images/insider.PNG'
import img7 from '../../assest/images/easports.PNG'
import img8 from '../../assest/images/klee.PNG'
import img9 from '../../assest/images/nike.PNG'
import img10 from '../../assest/images/ubisoft.PNG'
import Carousel from 'better-react-carousel'
import CardProps from '../Card/Card'
const Slider = () => {

  return (

    <div className='Parent' >
      <Carousel cols={4} rows={1} gap={2} loop autoplay={2000} hideArrow={true}  >
        <Carousel.Item>
          <CardProps

            imgsrc={img1}
            titleimg={img6}

            date="01/01/2023"
            description="Reddit cofounder Alexis Ohanian
        predicts play-to-earn crypto will be the
         only type of games people play in 5
          years"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardProps
            imgsrc={img2}
            titleimg={img10}
            date="01/01/2023"
            description="Ubisoft drinks the crypto Kool-Aid, announces plans to develop blockchain games"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardProps
            imgsrc={img3}
            titleimg={img8}
            date="01/01/2023"
            description="$KLEE Android User Migration Guide"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardProps
            imgsrc={img4}
            titleimg={img8}
            date="01/01/2023"
            description="KleeKai Migration — All you need to know"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardProps
            imgsrc={img5}
            titleimg={img9}
            date="01/01/2023"
            description="Nike Acquires RTFKT"
          />
        </Carousel.Item>

        <Carousel.Item>
          <CardProps
            imgsrc={img12}
            titleimg={img7}
            date="01/01/2023"
            description="Reddit cofounder Alexis Ohanian
        predicts play-to-earn crypto will be the
         only type of games people play in 5
          years"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardProps
            imgsrc={img11}
            titleimg={img8}
            date="01/01/2023"
            description="Reddit cofounder Alexis Ohanian
        predicts play-to-earn crypto will be the
         only type of games people play in 5
          years"
          />
        </Carousel.Item>
        <Carousel.Item>
          <CardProps
            imgsrc={img12}
            titleimg={img7}
            date="01/01/2023"
            description="Reddit cofounder Alexis Ohanian
        predicts play-to-earn crypto will be the
         only type of games people play in 5
          years"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Slider