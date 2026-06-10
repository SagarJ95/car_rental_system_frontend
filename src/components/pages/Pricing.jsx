import React, { useEffect, useState } from "react";
import AOS from 'aos'
import "aos/dist/aos.css";
import { useDispatch, useSelector } from "react-redux";
import { getPricingList } from '../../Producer/Pricing_list'
function Pricing() {

    // useEffect(() => {
    //     AOS.init()
    // }, [])

    const [paginationId, setpaginationId] = useState(0)
    const [limit, setlimit] = useState(7)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(
            getPricingList({
                paginationId, limit
            })
        )
    }, [dispatch, paginationId, limit])

    const { info, info_status } = useSelector((state) => state.fetchPricingList || [])

    console.log("info", info)
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

                                            {info?.map((item, index) => (
                                                <tr className key={item.id}>
                                                    <td className="car-image"><div className="img" style={{ backgroundImage: `url(${item.main_image})` }} /></td>
                                                    <td className="product-name">
                                                        <h3>{item.car_name}</h3>
                                                        <p className="mb-0 rated">
                                                            <span>Rated: </span>

                                                            {[1, 2, 3, 4, 5].map((star) => (
                                                                <span
                                                                    key={star}
                                                                    className={
                                                                        star <= Math.round(Number(item.avg_rating || 0))
                                                                            ? "ion-ios-star"
                                                                            : "ion-ios-star-outline"
                                                                    }
                                                                />
                                                            ))}

                                                            <span className="ms-2">
                                                                ({item.avg_rating || "No Reviews"})
                                                            </span>
                                                        </p>
                                                    </td>
                                                    <td className="price">
                                                        <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                        <div className="price-rate">
                                                            <h3>
                                                                <span className="num"><small className="currency">₹</small> {item.per_hours_rate}</span>
                                                                <span className="per">/per hour</span>
                                                            </h3>

                                                        </div>
                                                    </td>
                                                    <td className="price">
                                                        <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                        <div className="price-rate">
                                                            <h3>
                                                                <span className="num"><small className="currency">₹</small>  {item.per_day_rate}</span>
                                                                <span className="per">/per day</span>
                                                            </h3>

                                                        </div>
                                                    </td>
                                                    <td className="price">
                                                        <p className="btn-custom"><a href="#">Rent a car</a></p>
                                                        <div className="price-rate">
                                                            <h3>
                                                                <span className="num"><small className="currency">₹</small>  {item.leasing}</span>
                                                                <span className="per">/per month</span>
                                                            </h3>

                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                            {/* END TR*/}

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