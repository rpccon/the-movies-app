import * as types from './actionTypes';

export const update_movies = data => ({
  type: types.UPDATE_MOVIES,
  payload: {
      movies: data.movies
  }
});

export const update_selected_movie = data => ({
  type: types.UPDATE_SELECTED_MOVIE,
  payload: {
    selectedMovie: data.selectedMovie
  }
});