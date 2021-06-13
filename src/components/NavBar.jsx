import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'

function NavBar() {
    return (
        <nav className="main-navbar border-bottom d-flex flex-row">
            <ul className="pt-3">
                <li className="border-right d-flex flex-row justify-content-between py-1 px-3 text-primary"><span>ALL CATEGORIES</span> <FontAwesomeIcon icon={faCaretDown} size={'lg'}/></li>
            </ul>
            <ul className="d-flex flex-row pt-3">
                <li className="py-1 pr-3">ELECTRONICS</li>
                <li className="py-1 px-3">MEN</li>
                <li className="py-1 px-3">WOMEN</li>
                <li className="py-1 px-3">HOME</li>
                <li className="py-1 px-3">BEAUTY &#38; FRAGRANCE</li>
                <li className="py-1 px-3">BABY &#38; TOYS</li>
                <li className="py-1 px-3">GROCERY</li>
                <li className="py-1 px-3">SPORTS</li>
                <li className="py-1 px-3">THE DUBAI MALL STORE</li>
            </ul>
        </nav>
    )
}

export default NavBar
