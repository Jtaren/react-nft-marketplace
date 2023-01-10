import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import { Link } from 'react-router-dom'
import './hero-section.css'

import heroImg from '../../assets/images/hero.jpg'

const HeroSection = () => {
  return <section className="hero__section">
    <Container>
        <Row>
            <Col lg="6" md="6">
            <div className="hero__content">
                <h2>
                    Discover rare digital art and collect <span>sell extraordinary</span> NFTs 
                </h2>
                    <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Maxime aliquam nemo, 
                    eligendi quasi expedita delectus optio quas, earum aut sunt, cupiditate qui. Eveniet non magni,
                     asperiores provident pariatur iste odio!
                    </p>
                    <div className="hero__btns d-flex align-items-center gap-4">
                    <button className=" explore__btn d-flex align-items-center gap-2">
                        <i class="ri-rocket-line"></i><Link to="/market">Explore</Link>
                        </button>
                    <button className=" create__btn d-flex align-items-center gap-2">
                        <i class="ri-ball-pen-line"></i><Link to="/market">Explore</Link>
                        </button>
                    </div>
            
            </div>
            </Col>
        </Row>

        <Col lg="6" md="6">
            <div className="hero__img">
                <img src={heroImg} alt="" className="w-100"/>
            </div>
        </Col>
    </Container>
  </section>
}

export default HeroSection