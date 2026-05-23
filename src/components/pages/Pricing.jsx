import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
function Pricing() {

    useEffect(() => {
        AOS.init()
    }, [])


    return (
        <>
            <div>
                <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: 'url("images/bg_3.jpg")' }} data-stellar-background-ratio="0.5">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                            <div className="col-md-9  pb-5" data-aos="fade-up">
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Pricing <i className="ion-ios-arrow-forward" /></span></p>
                                <h1 className="mb-3 bread">Pricing</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-cart">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 " data-aos="fade-up">
                                <div className="car-list">
                                    <table className="table">
                                        <thead className="thead-primary">
                                            <tr className="text-center">
                                                <th>&nbsp;</th>
                                                <th>&nbsp;</th>
                                                <th className="bg-primary heading">Per Hour Rate</th>
                                                <th className="bg-dark heading">Per Day Rate</th>
                                                <th className="bg-black heading">Leasing</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className>
                                                <td className="car-image"><div className="img" style={{ backgroundImage: 'url(images/car-1.jpg)' }} /></td>
                                                <td className="product-name">
                                                    <h3>Cheverolet SUV Car</h3>
                                                    <p className="mb-0 rated">
                                                        <span>rated:</span>
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                    </p>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 10.99</span>
                                                            <span className="per">/per hour</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 60.99</span>
                                                            <span className="per">/per day</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 995.99</span>
                                                            <span className="per">/per month</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                            </tr>{/* END TR*/}
                                            <tr className>
                                                <td className="car-image"><div className="img" style={{ backgroundImage: 'url(images/car-2.jpg)' }} /></td>
                                                <td className="product-name">
                                                    <h3>Cheverolet SUV Car</h3>
                                                    <p className="mb-0 rated">
                                                        <span>rated:</span>
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                    </p>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 10.99</span>
                                                            <span className="per">/per hour</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 60.99</span>
                                                            <span className="per">/per day</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 995.99</span>
                                                            <span className="per">/per month</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                            </tr>{/* END TR*/}
                                            <tr className>
                                                <td className="car-image"><div className="img" style={{ backgroundImage: 'url(images/car-3.jpg)' }} /></td>
                                                <td className="product-name">
                                                    <h3>Cheverolet SUV Car</h3>
                                                    <p className="mb-0 rated">
                                                        <span>rated:</span>
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                    </p>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 10.99</span>
                                                            <span className="per">/per hour</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 60.99</span>
                                                            <span className="per">/per day</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 995.99</span>
                                                            <span className="per">/per month</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                            </tr>{/* END TR*/}
                                            <tr className>
                                                <td className="car-image"><div className="img" style={{ backgroundImage: 'url(images/car-4.jpg)' }} /></td>
                                                <td className="product-name">
                                                    <h3>Cheverolet SUV Car</h3>
                                                    <p className="mb-0 rated">
                                                        <span>rated:</span>
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                    </p>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 10.99</span>
                                                            <span className="per">/per hour</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 60.99</span>
                                                            <span className="per">/per day</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 995.99</span>
                                                            <span className="per">/per month</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                            </tr>{/* END TR*/}
                                            <tr className>
                                                <td className="car-image"><div className="img" style={{ backgroundImage: 'url(images/car-5.jpg)' }} /></td>
                                                <td className="product-name">
                                                    <h3>Cheverolet SUV Car</h3>
                                                    <p className="mb-0 rated">
                                                        <span>rated:</span>
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                    </p>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 10.99</span>
                                                            <span className="per">/per hour</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 60.99</span>
                                                            <span className="per">/per day</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 995.99</span>
                                                            <span className="per">/per month</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                            </tr>{/* END TR*/}
                                            <tr className>
                                                <td className="car-image"><div className="img" style={{ backgroundImage: 'url(images/car-6.jpg)' }} /></td>
                                                <td className="product-name">
                                                    <h3>Cheverolet SUV Car</h3>
                                                    <p className="mb-0 rated">
                                                        <span>rated:</span>
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                        <span className="ion-ios-star" />
                                                    </p>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 10.99</span>
                                                            <span className="per">/per hour</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 60.99</span>
                                                            <span className="per">/per day</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                                <td className="price">
                                                    <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                    <div className="price-rate">
                                                        <h3>
                                                            <span className="num"><small className="currency">$</small> 995.99</span>
                                                            <span className="per">/per month</span>
                                                        </h3>
                                                        <span className="subheading">$3/hour fuel surcharges</span>
                                                    </div>
                                                </td>
                                            </tr>{/* END TR*/}
                                        </tbody>
                                    </table>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Pricing