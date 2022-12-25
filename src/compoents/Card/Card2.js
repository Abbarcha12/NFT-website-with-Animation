import React from 'react'
import CardTwoProps from './Card2Props';

import man1 from './imgs/man1.PNG'
import man2 from './imgs/man2.PNG'
import man3 from './imgs/man3.PNG'

const CardTwo = () => {
  return (
    <div className="container-fluid">
        <div className="row">
        <div className="col-lg-3 mt-3">
        <CardTwoProps
       imgsrc={man1}
       title1="Marcus Friggieri"
       description="Operations Lead"
       />
        </div>
        <div className="col-lg-3 mt-3">
        <CardTwoProps
       imgsrc={man2}
       title1="Marcus Friggieri"
       description="Operations Lead"
       />
        </div>
        <div className="col-lg-3 mt-3">
        <CardTwoProps
       imgsrc={man3}
       title1="Marcus Friggieri"
       description="Operations Lead"
       />
        </div>
        <div className="col-lg-3 mt-3">
        <CardTwoProps
       imgsrc={man1}
       title1="Marcus Friggieri"
       description="Operations Lead"
       />
        </div>
        

        
        </div>
    </div>
  )
}

export default CardTwo