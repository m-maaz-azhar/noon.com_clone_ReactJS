import React from 'react'
import { Carousel } from 'react-bootstrap'
import sliderImg1 from "../assets/slider-images/8.png"
import sliderImg2 from "../assets/slider-images/9.gif"
import sliderImg3 from "../assets/slider-images/10.png"

function ShopNowSlider() {
    return (
        <div className="ShopNowSlider py-5">
            <Carousel>
                <Carousel.Item interval={1000}>
                    <img
                        className="d-block w-100"
                        src={sliderImg1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <img
                        className="d-block w-100"
                        src={sliderImg2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderImg3}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ShopNowSlider
