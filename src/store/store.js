import { configureStore } from "@reduxjs/toolkit";
import getFeatureCarlist from '../Producer/feature_car'
import getCarDetails from '../Producer/getAllCarDetails'
import fetchBlogs from '../Producer/Blogs_producer'
import fetchPricingList from '../Producer/Pricing_list'
const store = configureStore({
    reducer: {
        fetureCarList: getFeatureCarlist,
        getCarDetails: getCarDetails,
        fetchBlogs: fetchBlogs,
        fetchPricingList: fetchPricingList
    }
})

export default store