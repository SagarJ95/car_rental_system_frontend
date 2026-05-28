import React, { useEffect, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { Navigation, Autoplay } from "swiper/modules";
import { useDispatch, useSelector } from "react-redux";
import { getFeatureCarlist } from '../../../Producer/feature_car'
function FeatureCar() {
    const [paginationId, setPaginationId] = useState(0);
    const [limit, setLimit] = useState(3);


    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            getFeatureCarlist({
                paginationId,
                limit
            })
        );
    }, [dispatch, paginationId, limit])

    const { info, info_status } = useSelector((state) => state.fetureCarList || {})
    console.log("info", info)

    return (
        <section className="ftco-section ftco-no-pt bg-light">
            <div className="container">

                <div className="row justify-content-center">
                    <div className="col-md-12 heading-section text-center mb-5">
                        <span className="subheading">What we offer</span>
                        <h2 className="mb-2">Featured Vehicles</h2>
                    </div>
                </div>
                <Swiper
                    slidesPerView={3}
                    spaceBetween={20}
                    navigation={true}
                    loop={true}
                    autoplay={{
                        delay: 2000,
                        disableOnInteraction: true,
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
                    {info?.map((item, index) => (
                        <SwiperSlide>
                            <div className="car-wrap rounded" key={item.id}>
                                <div
                                    className="img rounded"
                                    style={{
                                        backgroundImage: `url(${item.main_image})`,
                                        height: "250px",
                                        backgroundSize: "cover",
                                        backgroundPosition: "center"
                                    }}
                                ></div>

                                <div className="text">
                                    <h2>{item.car_name}</h2>
                                    <p>$500/day</p>
                                    <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Book now</a> <a href="#"
                                        class="btn btn-secondary py-2 ml-1">Details</a></p>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}



                    {/* <SwiperSlide>
                        <div className="car-wrap rounded">
                            <div
                                className="img rounded"
                                style={{
                                    backgroundImage: "url(/images/car-1.jpg)",
                                    height: "250px",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>

                            <div className="text">
                                <h2>Mercedes Grand Sedan</h2>
                                <p>$500/day</p>
                                <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Book now</a> <a href="#"
                                    class="btn btn-secondary py-2 ml-1">Details</a></p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="car-wrap rounded">
                            <div
                                className="img rounded"
                                style={{
                                    backgroundImage: "url(/images/car-2.jpg)",
                                    height: "250px",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>

                            <div className="text">
                                <h2>BMW Sedan</h2>
                                <p>$450/day</p>
                                <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Book now</a> <a href="#"
                                    class="btn btn-secondary py-2 ml-1">Details</a></p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="car-wrap rounded">
                            <div
                                className="img rounded"
                                style={{
                                    backgroundImage: "url(/images/car-3.jpg)",
                                    height: "250px",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>

                            <div className="text">
                                <h2>Audi A6</h2>
                                <p>$400/day</p>
                                <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Book now</a> <a href="#"
                                    class="btn btn-secondary py-2 ml-1">Details</a></p>
                            </div>
                        </div>
                    </SwiperSlide>

                    <SwiperSlide>
                        <div className="car-wrap rounded">
                            <div
                                className="img rounded"
                                style={{
                                    backgroundImage: "url(/images/car-4.jpg)",
                                    height: "250px",
                                    backgroundSize: "cover",
                                    backgroundPosition: "center"
                                }}
                            ></div>

                            <div className="text">
                                <h2>Range Rover</h2>
                                <p>$700/day</p>
                                <p class="d-flex mb-0 d-block"><a href="#" class="btn btn-primary py-2 mr-1">Book now</a> <a href="#"
                                    class="btn btn-secondary py-2 ml-1">Details</a></p>
                            </div>
                        </div>
                    </SwiperSlide> */}

                </Swiper>

            </div>
        </section>
    );
}

export default FeatureCar;