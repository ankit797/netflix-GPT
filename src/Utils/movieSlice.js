import { createSlice } from '@reduxjs/toolkit';

const movieSlice = createSlice({
    name: 'movie',
    initialState: {
        nowPlayingMovies: null,
        popularMovies: null,
        topRated : null,
        upcoming : null,
        trailerVideo: null
    },
    reducers:{
        addNowPlayngMovies: (state, action) => {
            state.nowPlayingMovies = action.payload
        },
        addPopularMovies: (state, action) => {
            state.popularMovies = action.payload
        },
        addTopRated: (state, action) => {
            state.topRated = action.payload
        },
        addUpcoming: (state, action) => {
            state.upcoming = action.payload
        },
        addTrailerVideo: (state, action) => {
            state.trailerVideo = action.payload
        }
    }
});

export const {addNowPlayngMovies, addPopularMovies, addTopRated, addUpcoming,  addTrailerVideo}  = movieSlice.actions;
export default movieSlice.reducer;
