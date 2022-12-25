import React from 'react'
import './Stats.css'
import CatBG from '../../assest/images/catBG.png'
import Diamond from '../../assest/images/diamondIcon.png'
import GamePad from '../../assest/images/gamingPad.png'
import Crown from '../../assest/images/crownIcon.png'
import CatIcon from '../../assest/images/catIcon.png'
import Box from '../../assest/images/boxIcon.png'
import Boxes from '../../assest/images/fourBoxes.png'
import Rock from '../../assest/images/Rock.png'

function Stats() {
    return (
        <div>
            <div className='img2'></div>
            <div className='container-fluid sats'>
                <div className='row'>
                    <div className='col-md-6' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                        <div className='catBg-img'>
                            <img src={CatBG} className="catBg img-fluid" alt="" />
                        </div>
                    </div>
                    <div className=' col-md-6 pe-0'>
                        <div className='statsBox' data-aos="fade-up" data-aos-easing="ease-in-sine" data-aos-duration="600" >
                            <div className='statsBox-text '>
                                <div className='text-box mt-5 margin'>
                                    <img src={Diamond} alt="" className='ms-4 ' />
                                    <p className='mt-1 ms-4 mb-2'>Holders: <span>27,000</span></p>
                                </div>
                                <div className='text-box mt-2'>
                                    <img src={GamePad} alt="" className='ms-4' />
                                    <p className='mt-1 ms-4 mb-2'>Industry:  <span>Gaming</span></p>
                                </div>
                                <div className='text-box mt-2'>
                                    <img src={Crown} alt="" className='ms-4' />
                                    <p className='mt-1 ms-4 mb-2'>Industry Size: <span>173 Billion</span></p>
                                </div>
                                <div className='text-box mt-2'>
                                    <img src={CatIcon} alt="" className='ms-4' />
                                    <p className='mt-1 ms-4 mb-2'>Total players outside blockchain: <span>2.9 Billion</span></p>
                                </div>
                                <div className='text-box mt-2'>
                                    <img src={Box} alt="" className='ms-4' />
                                    <p className='mt-1 ms-4 mb-2'>Total games outside blockchain: <span>4 Million</span></p>
                                </div>
                                <div className='text-box mt-2'>
                                    <img src={Boxes} alt="" className='ms-4' />
                                    <p className='mt-1 ms-4 mb-2'>Total games inside blockchain: <span>Very few</span></p>
                                </div>
                            </div>
                        </div>
                        <div className="RockImg">
                            <img src={Rock} className="mt-5" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Stats