import * as types from '../actions/actionTypes';

const initialState = {
  movies: [],
  selectedMovie: {},
  apiMovies: [],
  loading: true
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
        movies: action.payload.movies,
        selectedMovie: action.payload.selectedMovie,
      }
    }
    case types.API_MOVIES: {
      return {
        ...state,
        apiMovies: action.payload.apiMovies,
        loading: action.payload.loading,
      }
    }

    default: return state;
  }
}

export default moviesState