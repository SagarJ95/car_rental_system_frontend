import React, { useEffect } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
function Services() {

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
                            <div className="col-md-9 pb-5" data-aos="fade-up">
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>Services <i className="ion-ios-arrow-forward" /></span></p>
                                <h1 className="mb-3 bread">Our Services</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center heading-section " data-aos="fade-up">
                                <span className="subheading">Services</span>
                                <h2 className="mb-3">Our Latest Services</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="services services-2 w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route" /></div>
                                    <div className="text w-100">
                                        <h3 className="heading mb-2">Wedding Ceremony</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="services services-2 w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route" /></div>
                                    <div className="text w-100">
                                        <h3 className="heading mb-2">City Transfer</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="services services-2 w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route" /></div>
                                    <div className="text w-100">
                                        <h3 className="heading mb-2">Airport Transfer</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="services services-2 w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-route" /></div>
                                    <div className="text w-100">
                                        <h3 className="heading mb-2">Whole City Tour</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-intro" style={{ backgroundImage: 'url(images/bg_3.jpg)' }}>
                    <div className="overlay" />
                    <div className="container">
                        <div className="row justify-content-end">
                            <div className="col-md-6 heading-section heading-section-white" data-aos="fade-up">
                                <h2 className="mb-3">Do You Want To Earn With Us? So Don't Be Late.</h2>
                                <a href="#" className="btn btn-primary btn-lg">Become A Driver</a>
                            </div>
                        </div>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Services