import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

function Card(props) {
    return (
        <div className="Card my-3">
            <img src={props.data['img-url']} className="d-block mx-auto" alt={props.data['product-id']} />
            <div className="product-details">
                <p>{props.data.title}</p>
                <p className="price">AED <span>{props.data.price}</span></p>
                <p>Arrives <strong>{props.data.date}</strong></p>
                <div className="d-flex flex-row justify-content-between">
                    <span className="delivery bg-warning rounded-left px-1">express</span>
                    <span className="rating"><FontAwesomeIcon className="text-warning" icon={faStar} size={'sm'} /> <span className="text-warning">{props.data.rating}</span> {props.data.reviews}</span>
                </div>
            </div>
        </div>
    )
}
export default Card;