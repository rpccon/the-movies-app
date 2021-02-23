import axios from 'axios';
import ListGroupContainer from "../listGroupContainer/ListGroupContainer";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { update_api_movies } from '../../redux/actions/moviesActions';
import './TopMovies.sass';

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
      alert("Cors from the API attached are not supporting this origin");
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
