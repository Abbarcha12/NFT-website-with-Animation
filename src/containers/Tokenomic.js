import React from 'react'
import './Tokenomic.css'
import CatLaptop from '../assest/images/catLaptop.png'
import Diamond from '../assest/images/diamondIcon.png'
import Coin from '../assest/images/iCoin.png'
import CatIcon from '../assest/images/catIcon.png'
import Envelop from '../assest/images/envelop.png'
import SquareDiamond from '../assest/images/square-diamond.png'
import Fade from 'react-reveal/Fade';
function Tokenomic() {
    return (
        <div>
            <div className='container' data-aos=" zoom-in-up" data-aos-easing="ease-in-sine" data-aos-duration="1000">
                <Fade bottom>
                    <div className='row'>
                        <div className='col-md-12' >
                            <div className='tokenomic-heading '>
                                <h2>IF YOU BELIEVE IN <span>GAMING</span> AND <span>BLOCKCHAIN</span> THEN YOU BELIEVE
                                    IN <span>KLEE!</span></h2>
                            </div>
                        </div>
                    </div>
                </Fade>
            </div>
            <div className='container' >
                <div className='row mt-5'>
                    <Fade bottom  >
                        <div className='col-xl-6 col-lg-12 col-md-12'>
                            <div className='cat-laptop' data-aos="fade-right" ease-in-sine="ease-in" data-aos-delay="200" data-aos-duration="1000" >
                                <img src={CatLaptop} className='catLaptop img-fluid' alt="" />
                                <h2>Join us and become an investor <br /> in the future of gaming!</h2>
                            </div>
                        </div>
                    </Fade>
                    <div className='col-xl-6 col-lg-12 col-md-12'>
                        <div className='tokenomic-list' data-aos="zoom-out-left" ease-in-sine="ease-in" data-aos-delay="200" data-aos-duration="1000" >
                            <div className='tokenBox-head'>
                                <h3 className=''>TOKENOMICS</h3>
                            </div>
                            <div className='tokenomic-box'>

                                <div className='tokenomic-textBox'>
                                    <img src={Diamond} alt="" />
                                    <p>Total Supply: <span>100 Quadrillion</span></p>
                                </div>
                                <div className='tokenomic-textBox mt-2'>
                                    <img src={Coin} alt="" />
                                    <p>P2E Game: <span>Earn income while Playing</span></p>
                                </div>
                                <div className='tokenomic-textBox mt-2'>
                                    <img src={CatIcon} alt="" />
                                    <p>Token Symbol: <span>KLEE</span></p>
                                </div>
                                <div className='tokenomic-textBox mt-2'>
                                    <img src={Envelop} alt="" />
                                    <p>Contract ID: <span><a href=''>0xa67e9f021b9d208...</a></span></p>
                                </div>
                                <div className='tokenomic-textBox mt-2'>
                                    <img src={SquareDiamond} alt="" />
                                    <p>Network: <span>ERC20</span></p>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Tokenomic