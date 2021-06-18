import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInfo, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faTwitter, faFacebook, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { Container, Col, Row } from 'react-bootstrap'

function Footer() {
    return (
        <footer className="border-top bg-white">
            <div className="bg-light py-3 mx-5 d-flex flex-row flex-wrap align-items-center justify-content-between border-bottom">
                <div>
                    <h5>We Are Always Here To Help</h5>
                    <p className="text-grey">reach out to us through any of these support channels</p>
                </div>
                <div className="d-flex flex-row">
                    <div className="d-flex flex-row">
                        <div className="mx-2">
                            <FontAwesomeIcon icon={faInfo} size={'sm'} />
                        </div>
                        <div className="mx-2">
                            <p>HELP CENTER</p>
                            <h5>help.noon.com</h5>
                        </div>
                    </div>
                    <div className="d-flex flex-row">
                        <div className="mx-2">
                            <FontAwesomeIcon icon={faEnvelope} size={'sm'} />
                        </div>
                        <div className="mx-2">
                            <p>EMAIL SUPPORT</p>
                            <h5>care@noon.com</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className="py-4 footer-a">
                <Container>
                    <Row className="py-1">
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6>ELECTRONICS</h6>
                                <li>Mobiles</li>
                                <li>Tablets</li>
                                <li>Laptops</li>
                                <li>Home Appliances</li>
                                <li>Camera , Photo &amp; Video</li>
                                <li>Television</li>
                                <li>Video Games</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6>FASHION</h6>
                                <li>Women's Fashion</li>
                                <li>Men's Fashion</li>
                                <li>Girl's Fashion</li>
                                <li>Boy's Fashion</li>
                                <li>Watches</li>
                                <li>Jewellery</li>
                                <li>Women's Handbags</li>
                                <li>Men's Eyewears</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6>HOME AND KITCHEN</h6>
                                <li>Bath</li>
                                <li>Home Decor</li>
                                <li>Kitchen &amp; Dining</li>
                                <li>Tools &amp; Home Improvement</li>
                                <li>Audio &amp; Video</li>
                                <li>Furniture</li>
                                <li>Patio , Lawn &amp;amp; Garden</li>
                                <li>Pet Supplies</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6>BEAUTY</h6>
                                <li>Fragrance</li>
                                <li>Make-up</li>
                                <li>Haircare</li>
                                <li>Skincare</li>
                                <li>Personal Care</li>
                                <li>Tool &amp; Accessories</li>
                                <li>Men's Groming</li>
                                <li>Health Care Essentials</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6>BABY</h6>
                                <li>Strollers &amp; Prams</li>
                                <li>Car Seats</li>
                                <li>Feeding</li>
                                <li>Bathing &amp; Skincare</li>
                                <li>Diapering</li>
                                <li>Baby Clothing &amp; Shoes</li>
                                <li>Baby &amp; Toddler Toys</li>
                                <li>Baby Foods</li>
                            </ul>
                        </Col>
                        <Col xs={12} md={6} lg={2}>
                            <ul className="list-unstyled">
                                <h6>TOP BRANDS</h6>
                                <li>Mother Care</li>
                                <li>Apple</li>
                                <li>Nike</li>
                                <li>Samsung</li>
                                <li>Tefal</li>
                                <li>L'Oreal Paris</li>
                                <li>Sketchers</li>
                                <li>Silsal</li>
                            </ul>
                        </Col>
                    </Row>
                </Container>
            </div>

            <div className="py-3 mx-5 d-flex flex-row flex-wrap text-center align-items-center justify-content-around border-bottom">
                <div>
                    <h5>SHOP ON THE GO</h5>
                    <div>
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/app-store.svg" alt="" />
                        <img width="130px" src="https://z.nooncdn.com/s/app/com/common/images/logos/google-play.svg" alt="" />
                    </div>
                </div>
                <div>
                    <h5>Connect With Us</h5>
                    <div>
                        <FontAwesomeIcon className="mx-2 social-icon" icon={faFacebook} size={"lg"} />
                        <FontAwesomeIcon className="mx-2 social-icon" icon={faTwitter} size={"lg"} />
                        <FontAwesomeIcon className="mx-2 social-icon" icon={faInstagram} size={"lg"} />
                        <FontAwesomeIcon className="mx-2 social-icon" icon={faLinkedin} size={"lg"} />
                    </div>
                </div>
            </div>
            <div className="bg-light d-flex d-row justify-content-around align-items-center flex-wrap">
                <div>
                    <p className="text-center pt-3">&copy; 2021 noon. All Right Reserved</p>
                </div>
                <div>
                    <ul className="list-unstyled d-flex d-row flex-wrap">
                        <li className="mx-2 mt-2">Carrers</li>
                        <li className="mx-2 mt-2">Warranty Policy</li>
                        <li className="mx-2 mt-2">Sell With Us</li>
                        <li className="mx-2 mt-2">Term of Use</li>
                        <li className="mx-2 mt-2">Term of Sale</li>
                        <li className="mx-2 mt-2">Privacy Policy</li>
                        <li className="mx-2 mt-2">Contact</li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
