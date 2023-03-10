import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'

import img01 from '../../../assets/images/img-01.jpg'
import ava01 from '../../../assets/images/ava-01.png'

import './live-auction.css'

const LiveAuction = () => {
  return <section>
    <Container>
        <Row>
            <Col lg="12" className="mb-4">
                <div className="live__auction__top d-flex align-items-center justify-content-between">
                    <h3>Live Auction</h3>
                    <span><Link to='/market'>Explore more</Link></span>
                </div>
            </Col>

            <Col lg="3">
                <div className="single__nft__card">
                    <div className="nft__img">
                        <img src={img01} alt="" className="w-100"/>
                    </div>

                    <div className="nft__content">
                        <h5 className="nft__title">
                            Travel Monkey Club
                        </h5>

                        <div className="creator__info-wrapper d-flex gap-3">
                            <div className="creator__img">
                                <img src={ava01} alt="" className="w-100"/>
                            </div>

                            <div className="creator__info d-flex align-items-center justify-content-between">
                                <div className="w-50">
                                    <h6>
                                       Created By
                                    </h6>
                                    <p>Trista Francis</p>
                                </div>

                                <div>
                                    <h6>Current Bid</h6>
                                    <p>4.89 ETH</p>
                                </div>
                            </div>
                        </div>

                        <div className="d-flex align-items-center justify-content-between">
                            <button className="bid__btn d-flex align-items-center gap-1"><i class="ri-shopping-bag-line"></i>Place Bid</button>
                            <span className="history__link">
                                <Link to="#">View History</Link>
                            </span>
                        
                        </div>

                    </div>
                </div>
            </Col>
        </Row>
    </Container>
  </section>
}

export default LiveAuction