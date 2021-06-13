import React from 'react'
import {Carousel} from 'react-bootstrap'
import sliderImg1 from "../assets/slider-images/01.gif"
import sliderImg2 from "../assets/slider-images/02.gif"
import sliderImg3 from "../assets/slider-images/3.png"
import sliderImg4 from "../assets/slider-images/4.png"
import sliderImg5 from "../assets/slider-images/5.png"
import sliderImg6 from "../assets/slider-images/6.png"
import sliderImg7 from "../assets/slider-images/7.png"

function ImageSlider() {
    return (
        <div>
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
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderImg4}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderImg5}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderImg6}
                        alt="Third slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={sliderImg7}
                        alt="Third slide"
                    />
                </Carousel.Item>
            </Carousel>
        </div>
    )
}

export default ImageSlider
