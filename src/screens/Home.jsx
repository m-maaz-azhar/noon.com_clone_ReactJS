import React from 'react'
import Header from '../layouts/Header';
import ShopByCategory from '../layouts/ShopByCategory';
import ImageSlider from '../components/ImageSlider';

function Home() {
    return (
        <div className="home-layout">
            <Header />
            <div className="home-container">
                <ImageSlider />
                <ShopByCategory/>
            </div>
        </div>
    )
}

export default Home
