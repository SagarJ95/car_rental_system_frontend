import React, { useEffect } from "react";
import FeatureCar from "./FeatureCar";
import AOS from "aos";
import "aos/dist/aos.css";
import Blog from "./Blog";
import Testimonial from "./Testimonial";

function Home() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <>

            <div>
                <div className="hero-wrap ftco-degree-bg" style={{ backgroundImage: 'url("images/bg_1.jpg")' }} data-stellar-background-ratio="0.5">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text justify-content-start align-items-center justify-content-center">
                            <div className="col-lg-8" data-aos="fade-up">
                                <div className="text w-100 text-center mb-md-5 pb-md-5">
                                    <h1 className="mb-4">Fast &amp; Easy Way To Rent A Car</h1>
                                    <p style={{ fontSize: 18 }}>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts</p>
                                    <a href="https://vimeo.com/45830194" className="icon-wrap popup-vimeo d-flex align-items-center mt-4 justify-content-center">
                                        <div className="icon d-flex align-items-center justify-content-center">
                                            <span className="ion-ios-play" />
                                        </div>
                                        <div className="heading-title ml-5">
                                            <span>Easy steps for renting a car</span>
                                        </div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <FeatureCar />

                <section className="ftco-section ftco-about">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/about.jpg)' }}>
                            </div>
                            <div className="col-md-6 wrap-about " data-aos="fade-up">
                                <div className="heading-section heading-section-white pl-md-5">
                                    <span className="subheading">About us</span>
                                    <h2 className="mb-4">Welcome to Carbook</h2>
                                    <p>A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <p>On her way she met a copy. The copy warned the Little Blind Text, that where it came from it would have been rewritten a thousand times and everything that was left from its origin would be the word "and" and the Little Blind Text should turn around and return to its own, safe country. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.</p>
                                    <p><a href="#" className="btn btn-primary py-3 px-4">Search Vehicle</a></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section className="ftco-section">
                    <div className="container">
                        <div className="row justify-content-center mb-5">
                            <div className="col-md-7 text-center heading-section" data-aos="fade-up">
                                <span className="subheading">Services</span>
                                <h2 className="mb-3">Our Latest Services</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-3">
                                <div className="services services-2 w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-wedding-car" /></div>
                                    <div className="text w-100">
                                        <h3 className="heading mb-2">Wedding Ceremony</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="services services-2 w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-transportation" /></div>
                                    <div className="text w-100">
                                        <h3 className="heading mb-2">City Transfer</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="services services-2 w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-car" /></div>
                                    <div className="text w-100">
                                        <h3 className="heading mb-2">Airport Transfer</h3>
                                        <p>A small river named Duden flows by their place and supplies it with the necessary regelialia.</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-3">
                                <div className="services services-2 w-100 text-center">
                                    <div className="icon d-flex align-items-center justify-content-center"><span className="flaticon-transportation" /></div>
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


                <Testimonial />

                <Blog />


                {/* <section className="ftco-counter ftco-section img bg-light" id="section-counter">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row">
                            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap " data-aos="fade-up">
                                <div className="block-18">
                                    <div className="text text-border d-flex align-items-center">
                                        <strong className="number" data-number={60}>0</strong>
                                        <span>Year <br />Experienced</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap" data-aos="fade-up">
                                <div className="block-18">
                                    <div className="text text-border d-flex align-items-center">
                                        <strong className="number" data-number={1090}>0</strong>
                                        <span>Total <br />Cars</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap" data-aos="fade-up">
                                <div className="block-18">
                                    <div className="text text-border d-flex align-items-center">
                                        <strong className="number" data-number={2590}>0</strong>
                                        <span>Happy <br />Customers</span>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-lg-3 justify-content-center counter-wrap" data-aos="fade-up">
                                <div className="block-18">
                                    <div className="text d-flex align-items-center">
                                        <strong className="number" data-number={67}>0</strong>
                                        <span>Total <br />Branches</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section> */}
            </div>

        </>
    )
}

export default Home