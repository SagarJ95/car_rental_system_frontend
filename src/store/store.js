import { configureStore } from "@reduxjs/toolkit";
import getFeatureCarlist from '../Producer/feature_car'
import getCarDetails from '../Producer/getAllCarDetails'
import fetchBlogs from '../Producer/Blogs_producer'
const store = configureStore({
    reducer: {
        fetureCarList: getFeatureCarlist,
        getCarDetails: getCarDetails,
        fetchBlogs: fetchBlogs
    }
})

export default store