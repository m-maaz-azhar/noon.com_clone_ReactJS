import React from 'react'
import Header from '../layouts/Header';
import ShopByCategory from '../layouts/ShopByCategory';
import ImageSlider from '../components/ImageSlider';
import ProductsSlider from '../layouts/ProductsSlider';
import MegaDeals from '../layouts/MegaDeals';
import ExclusiveDeals from '../layouts/ExclusiveDeals';
import ShopNowSlider from '../components/ShopNowSlider';
import ServicesSlides from '../layouts/ServicesSlides';
import PaymentSlides from '../layouts/PaymentSlides';
import BigCategories from '../layouts/BigCategories';
import Footer from '../layouts/Footer';

function Home() {

    let categories_1 = require('../data/categories_1.json');
    let categories_2 = require('../data/categories_2.json');
    let categories_3 = require('../data/categories_3.json');
    let categories_4 = require('../data/categories_4.json');
    let recommendedProducts = require('../data/recommended.json');
    let LaptopProducts = require('../data/laptops.json');
    let TrendingProducts = require('../data/trending.json');
    let homeKitchen = require('../data/homeKitchen.json');

    return (
        <div className="home-layout">
            <Header />
            <div className="home-container">
                <ImageSlider />
                <ShopByCategory products={categories_1} />
                <h4 className="ml-3">Recommended for you</h4>
                <ProductsSlider data={recommendedProducts} />
                <MegaDeals />
                <h4 className="mt-5 ml-3">Trending Deals</h4>
                <ProductsSlider data={TrendingProducts} />
                <ShopNowSlider />
                <ExclusiveDeals />
                <h4 className="mt-5 ml-3">Top Picks in Laptops</h4>
                <ProductsSlider data={LaptopProducts} />
                <ServicesSlides />
                <h2 className="px-4 pt-2">Shop By Category</h2>
                <ShopByCategory products={categories_2} />
                <PaymentSlides />
                <BigCategories products={categories_3} />
                <h4 className="my-4 ml-3">Top picks in home &amp; kitchen</h4>
                <ProductsSlider data={homeKitchen} />
                <BigCategories products={categories_4} />
            </div>
            <Footer />
        </div>
    )
}

export default Home
