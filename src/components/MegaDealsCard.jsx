import React from 'react'

function MegaDealsCard(props) {
    return (
        <div className="MegaDealsCard p-3 bg-white">
            <img width="270px" src={props.data['img-url']} alt="" />
            <h3>{props.data.title}</h3>
            <div className="d-flex flex-row align-items-center justify-content-between">
                <h3>Under <br /> <strong>{props.data.price}</strong></h3>
                <button className="shopNowBtn bg-warning"><strong>Shop Now</strong></button>
            </div>
        </div>
    )
}

export default MegaDealsCard