import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
function Testimonial() {
    return (
        <>
            <section className="ftco-section testimony-section bg-light">
                <div className="container">
                    <div className="row justify-content-center mb-5">
                        <div className="col-md-7 text-center heading-section" data-aos="fade-up">
                            <span className="subheading">Testimonial</span>
                            <h2 className="mb-3">Happy Clients</h2>
                        </div>
                    </div>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={20}
                        navigation={true}
                        loop={true}

                        autoplay={{
                            delay: 2000,
                            disableOnInteraction: false,
                        }}

                        modules={[Navigation, Autoplay]}

                        breakpoints={{
                            320: {
                                slidesPerView: 1,
                            },
                            768: {
                                slidesPerView: 2,
                            },
                            1024: {
                                slidesPerView: 3,
                            },
                        }}
                    >

                        <SwiperSlide>
                            <div className="testimony-wrap rounded text-center py-4 pb-5">
                                <div
                                    className="user-img mb-2"
                                    style={{
                                        backgroundImage: "url(/images/person_1.jpg)",
                                        width: "100px",
                                        height: "100px",
                                        borderRadius: "50%",
                                        margin: "0 auto",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                ></div>

                                <div className="text pt-4">
                                    <p className="mb-4">
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                                    </p>

                                    <p className="name">Roger Scott</p>

                                    <span className="position">
                                        Marketing Manager
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimony-wrap rounded text-center py-4 pb-5">
                                <div
                                    className="user-img mb-2"
                                    style={{
                                        backgroundImage: "url(/images/person_2.jpg)",
                                        width: "100px",
                                        height: "100px",
                                        borderRadius: "50%",
                                        margin: "0 auto",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                ></div>

                                <div className="text pt-4">
                                    <p className="mb-4">
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                                    </p>

                                    <p className="name">Roger Scott</p>

                                    <span className="position">
                                        Interface Designer
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="testimony-wrap rounded text-center py-4 pb-5">
                                <div
                                    className="user-img mb-2"
                                    style={{
                                        backgroundImage: "url(/images/person_3.jpg)",
                                        width: "100px",
                                        height: "100px",
                                        borderRadius: "50%",
                                        margin: "0 auto",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                ></div>

                                <div className="text pt-4">
                                    <p className="mb-4">
                                        Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts
                                    </p>

                                    <p className="name">Roger Scott</p>

                                    <span className="position">
                                        UI Designer
                                    </span>
                                </div>
                            </div>
                        </SwiperSlide>



                    </Swiper>

                </div>
            </section>
        </>
    )
}

export default Testimonial