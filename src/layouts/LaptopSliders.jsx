import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import Card from '../components/Card'

function LaptopSliders() {
    let data = require('../laptops.json');
    const responsive = {
        superLargeDesktop: {
            // the naming can be any, depends on you.
            breakpoint: { max: 4000, min: 3000 },
            items: 7
        },
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 5
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2
        },
        mobile: {
            breakpoint: { max: 464, min: 0 },
            items: 1
        }
    };
    return (
        <>
            <div className="d-flex flex-row justify-content-between px-3 pt-3">
                <h4>Top picks in laptops</h4> <button className="btn btn-outline-dark">VIEW ALL</button>
            </div>
            <Carousel className="px-4" responsive={responsive}>
                {data[0].products.map((product, i) => {
                    return (
                        <Card data={product} />
                    );
                })}
            </Carousel>
        </>
    )
}

export default LaptopSliders