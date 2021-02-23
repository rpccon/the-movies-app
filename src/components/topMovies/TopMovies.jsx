import './TopMovies.sass';
import { connect } from 'react-redux';
import axios from 'axios';
import { useEffect } from 'react';
import { update_api_movies } from '../../redux/actions/moviesActions';
import ListGroupContainer from "../listGroupContainer/ListGroupContainer";

const TopMovies = ({update_api_movies,loading, apiMovies}) => {
  useEffect(() => {
    update_api_movies({
      apiMovies: [],
      loading: true,
    });
    axios.get("http://www.mocky.io/v2/5dc3c053300000540034757b")
    .then(({ data }) => {
      update_api_movies({
        apiMovies: data.movies,
        loading: false,
      });
    })
    .catch((error) => {
      console.log("Error", error);
    })
  }, [])

  return (
    <div>
        { loading ? 'Cargando datos ...': ''}
        {
          apiMovies && apiMovies.length
          ? <ListGroupContainer
            title={"Movies"}
            movies={apiMovies}
            activeIdMovieChange={0}
            classData={"api-list"}
            selectedMovie={0}
            update_selected_movie={0}
          />
          : ''
        }
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    apiMovies: state.moviesState.apiMovies,
    loading: state.moviesState.loading
  }
}

export default connect(
  mapStateToProps,
  { update_api_movies }
)(TopMovies);
