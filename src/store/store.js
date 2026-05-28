import { configureStore } from "@reduxjs/toolkit";
import getFeatureCarlist from '../Producer/feature_car'
const store = configureStore({
    reducer: {
        fetureCarList: getFeatureCarlist
    }
})

export default store