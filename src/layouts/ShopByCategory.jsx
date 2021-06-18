import React from 'react'

function ShopByCategory(props) {

    let productsList = [];
    for (let [productName, ImgPath] of Object.entries(props.products)) {
        productsList.push(<><img width="110px" height="110px" className="rounded-circle" src={ImgPath} alt={productName} /><h3>{productName}</h3></>)
    }
    return (
        <div className="mx-3 mt-5 mb-3 d-flex flex-row flex-wrap justify-content-between">
            {productsList.map((product) => {
                return (
                    <span className="CategoryProducts text-center">{product}</span>
                )
            })}
        </div>
    )
}

export default ShopByCategory
