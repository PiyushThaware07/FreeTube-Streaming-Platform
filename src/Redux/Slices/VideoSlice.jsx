import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    videoArray: []
}

const VideoSlice = createSlice({
    name: "video",
    initialState,
    reducers: {
        setVideos: (state, action) => {
            // console.log(action.payload);
            console.log(`setting videos`);
            state.videoArray = [...action.payload]
        }
    }
})

export default VideoSlice.reducer;
export const { setVideos } = VideoSlice.actions;

