import React, { useEffect } from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import Testimonial from "./HomeSection/Testimonial";

function About() {
    useEffect(() => {
        AOS.init();
    }, []);

    return (
        <>
            <div>
                <section className="hero-wrap hero-wrap-2 js-fullheight" style={{ backgroundImage: 'url("images/bg_3.jpg")' }} data-stellar-background-ratio="0.5">
                    <div className="overlay" />
                    <div className="container">
                        <div className="row no-gutters slider-text js-fullheight align-items-end justify-content-start">
                            <div className="col-md-9  pb-5" data-aos="fade-up">
                                <p className="breadcrumbs"><span className="mr-2"><a href="index.html">Home <i className="ion-ios-arrow-forward" /></a></span> <span>About us <i className="ion-ios-arrow-forward" /></span></p>
                                <h1 className="mb-3 bread">About Us</h1>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="ftco-section ftco-about">
                    <div className="container">
                        <div className="row no-gutters">
                            <div className="col-md-6 p-md-5 img img-2 d-flex justify-content-center align-items-center" style={{ backgroundImage: 'url(images/about.jpg)' }}>
                            </div>
                            <div className="col-md-6 wrap-about" data-aos="fade-up">
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
            </div>

        </>
    )
}

export default About