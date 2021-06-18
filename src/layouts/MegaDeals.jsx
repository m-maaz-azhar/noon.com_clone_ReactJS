import React from 'react'
import MegaDealsCard from '../components/MegaDealsCard'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faClock } from '@fortawesome/free-solid-svg-icons'

function MegaDeals() {
    let data = require('../data/megaDeals.json');
    return (
        <div className="MegaDeals p-4">
            <div className="d-flex flex-row align-items-center pb-3"><h2 className="mr-3">Mega deals </h2> <h3> <FontAwesomeIcon className="mr-2" icon={faClock} /> <span className="text-danger">24 hours only</span></h3></div>
            <div className="d-flex flex-row align-items-center justify-content-around flex-wrap">
                {data[0].products.map((product, i) => {
                    return (
                        <MegaDealsCard data={product} />
                    );
                })}
            </div>
        </div>
    )
}

export default MegaDeals