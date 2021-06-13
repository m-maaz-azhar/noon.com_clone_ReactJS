import React from 'react'

function ShopByCategory() {
    let products = {
        "Home & Kitchen": "https://i.ibb.co/G9TfbVV/kitchen.jpg",
        "Appliance": "https://i.ibb.co/4N1bz5m/appliance.jpg",
        "Groceries": "https://i.ibb.co/ckcSbPB/groceries.jpg",
        "Sports": "https://i.ibb.co/ZTVY9Pj/en-mb-category-10.jpg",
        "Laptops": "https://i.ibb.co/Wt65SfY/laptops.jpg",
        "Women's Fasion": "https://i.ibb.co/kx7NWd0/womenfashion.jpg",
        "Men's Fashion": "https://i.ibb.co/xjXBZpV/menfashion.jpg",
        "Beauty": "https://i.ibb.co/HqDwk3Z/beauty.jpg",
        "Fragrances": "https://i.ibb.co/whnsNYC/fragnance.jpg",
        "Toys & Games": "https://i.ibb.co/tqDqyvN/toys.jpg",
        "Mobiles": "https://i.ibb.co/mJ6x55V/mobiles.jpg",
        "Electronics": "https://i.ibb.co/NrLk0B6/electronics.jpg"
    }

    let productsList = [];
    for (let [productName, ImgPath] of Object.entries(products)) {
        productsList.push(<><img width="110px" height="110px" className="rounded-circle" src={ImgPath} alt={productName} /><h3>{productName}</h3></>)
    }
    return (
        <div className="mx-3 mt-5 mb-3 d-flex flex-row flex-wrap justify-content-between">
            {productsList.map((product) => {
                console.log(product)
                return (
                    <span className="CategoryProducts text-center">{product}</span>
                )
            })}
        </div>
    )
}

export default ShopByCategory
