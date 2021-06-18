import React from 'react'
import Header from '../layouts/Header';
import ShopByCategory from '../components/ShopByCategory';
import ImageSlider from '../components/ImageSlider';
import ProductsSlider from '../layouts/ProductsSlider';
import MegaDeals from '../layouts/MegaDeals';
import LaptopSliders from '../layouts/LaptopSliders';
import ShopNowSlider from '../components/ShopNowSlider';

function Home() {
    return (
        <div className="home-layout">
            <Header />
            <div className="home-container">
                <ImageSlider />
                <ShopByCategory />
                <ProductsSlider />
                <MegaDeals />
                <LaptopSliders />
                <ShopNowSlider />
            </div>
        </div>
    )
}

export default Home
