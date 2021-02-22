import * as types from '../actions/actionTypes';

const initialState = {
  movies: [],
  selectedMovie: {}
}

const moviesState = (state = initialState, action) => {
  switch (action.type) {
    case types.UPDATE_MOVIES: {
      return {
        ...state,
        movies: action.payload.movies,
      }
    }
    case types.UPDATE_SELECTED_MOVIE: {
      return {
        ...state,
        selectedMovie: action.payload.selectedMovie,
      }
    }

    default: return state;
  }
}

export default moviesState