import React from 'react'
import "./Roadmap.css"

import Zoom from 'react-reveal/Zoom';
import Rocket from "../assest/images/roket.png"
import roadmap from "../assest/images/roadmap.png"

import CheckIcon from '@material-ui/icons//Check';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';
import Montain from "../assest/images/bg.png"

function Roadmap() {
    return (
        <div>
            <div className='transform '>
              
            </div>
            <div className='Roadmap pb-5'>
                <div className="container">
                    <div className="row">
                        <div className="col-md-12" >

                            <div className='Rocket-img py-5' >
                                <img src={Rocket} alt="Rocket" data-aos="fade-left" ease-in-sine="ease-in" data-aos-delay="400" data-aos-duration="2000" />
                                <h2 className='mt-5'>Roadmap</h2>
                            </div>

                            <div className='roadmap-heading-container'>
                                <div className='Roadmap-headings'>
                                    <h2>Phase&nbsp;1&nbsp;-&nbsp;Launch<CheckIcon /></h2>
                                    <h2>Phase&nbsp;2&nbsp;-&nbsp;Growth <CheckIcon /></h2>
                                    <h2>Phase&nbsp;3&nbsp;-&nbsp;Expansion</h2>
                                    <h2>Phase&nbsp;4&nbsp;-&nbsp;Utility</h2>
                                </div>
                                <div className='roadmap-img ps-5'>
                                    <img src={roadmap} className="img-fluid w-100" alt="roadmap" />
                                </div>
                            </div>
                        </div>
                        <div className='radmap-lists'>
                            <div className='launch border-left posittion'>
                                <div className='roadmap-lists-heading'>
                                    <div className='circle-outline'>
                                        <div className='circle'></div>
                                    </div>
                                    <h2 className='my-2'>Phase&nbsp;1&nbsp;-&nbsp;Launch <CheckIcon /></h2>
                                </div>
                                <ul>
                                    <li className='d-flex my-1'>
                                        <span className='me-2'><CheckIcon /></span>
                                        <span> CoinGecko, CoinMarketCap, CoinSniper Listings</span></li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Klee Swap (Decentralized Exchange)</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Audit Report (By TechRate)</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>1,000 Holders</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>1,000 Telegram members</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Website release</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='growth border-left'>
                                <div className='roadmap-lists-heading'>
                                    <div className='circle-outline'>
                                        <div className='circle'></div>
                                    </div>
                                    <h2 className='my-2'>Phase&nbsp;1&nbsp;-&nbsp;growth <CheckIcon /></h2>
                                </div>
                                <ul>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>CoinTiger, BiBox, Bilaxy Listings</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>5,000 Telegram members</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>5,000 Holders</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Zerion Certification</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Interactive Browser Klee Game</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Marketing through Social Influencers</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Part-time Social Media Marketing Team</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Regular AMA/Telegram Discussions</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Updated Mascot/Character</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='expansion border-left'>
                                <div className='roadmap-lists-heading'>
                                    <div className='circle-outline'></div>
                                    <h2 className='my-2'>Phase&nbsp;1&nbsp;-&nbsp;expansion <CheckIcon /></h2>
                                </div>
                                <ul>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Website Redesign</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>10,000 Holders</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-3'><FiberManualRecordIcon className='dot' /></span>
                                        <span>10,000 Telegram Members</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>iOS/Android Klee Mobile Game (First release)</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span> Influencer Marketing Partnerships</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-3'><FiberManualRecordIcon className='dot' /></span>
                                        <span>Full-time Social Media Marketing Team</span>
                                    </li>
                                </ul>
                            </div>
                            <div className='Utility'>
                                <div className='roadmap-lists-heading'>
                                    <div className='circle-outline left-1'></div>
                                    <h2 className='my-2'>Phase&nbsp;1&nbsp;-&nbsp;Utility <CheckIcon /></h2>
                                </div>
                                <ul>
                                    <li className="d-flex">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>20,000 Holders</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-3'><FiberManualRecordIcon className='dot' /></span>
                                        <span>20,000 Telegram Members</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-3'><FiberManualRecordIcon className='dot' /></span>
                                        <span>KLEEKAI official NFT store</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-3'><FiberManualRecordIcon className='dot' /></span>
                                        <span>HotBit, KuCoin, CoinSpot Exchange Listings</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-3'><FiberManualRecordIcon className='dot' /></span>
                                        <span>Additional Marketing Partnerships</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-3'><FiberManualRecordIcon className='dot' /></span>
                                        <span>Social Media Campaigns</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-3'><FiberManualRecordIcon className='dot' /></span>
                                        <span>iOS/Android Klee Mobile Game (Second release)</span>
                                    </li>
                                    <li className="d-flex my-1">
                                        <span className='me-2'><CheckIcon /></span>
                                        <span>Charity fundraising/Donations</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Roadmap