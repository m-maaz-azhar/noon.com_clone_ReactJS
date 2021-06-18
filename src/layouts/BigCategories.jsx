import React from 'react'
import {Row,Col} from 'react-bootstrap'

function BigCategories(props) {
    let productsList = [];
    for (let [productName, ImgPath] of Object.entries(props.products)) {
        productsList.push(<><img className="img-fluid" src={ImgPath} alt={productName} /><h4>{productName}</h4></>)
    }
    return (
        <div>
            <Row className="p-4">
                {productsList.map((product) => {
                    return (
                        <Col className="col-md-4">{product}</Col>
                    )
                })}
            </Row>
        </div>
    )
}

export default BigCategories
