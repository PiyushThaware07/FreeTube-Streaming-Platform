import { combineReducers, configureStore } from "@reduxjs/toolkit";
import VideoSlice from "./Slices/VideoSlice";

const rootReducer = combineReducers({
    videoReducer: VideoSlice,
})

const store = configureStore({
    reducer: rootReducer,
})

export default store;