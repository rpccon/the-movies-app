import "./RouterConfig.sass"
import { nav_click } from '../../redux/actions/navActions'
import { update_movies, update_selected_movie } from '../../redux/actions/moviesActions'
import { connect } from 'react-redux'
import Home from "../home/Home"
import Header from "../header/Header"
import TopMovies from "../topMovies/TopMovies"
import AddForm from "../addForm/AddForm"
import { useEffect } from 'react'

const RouterConfig = (fullState) => {
  const {selectedMovie, update_selected_movie, movies, update_movies, match: { params }} = fullState;

  const renderSection = () => {
    switch (params.section) {
      case "home":
        return <Home
          update_movies={update_movies}
          selectedMovie={selectedMovie}
          update_selected_movie={update_selected_movie}
          movies={movies}
        />
        break;
      case "top-movies":
        return <TopMovies />;
        break;
      case "addForm":
        return <AddForm
        />;
        break;
      default:
        return;
    }
  }

  return (
    <div className="Router-config">
      <Header />
      {renderSection()}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  return {
    title: state.navState.title,
    movies: state.moviesState.movies,
    selectedMovie: state.moviesState.selectedMovie,
    section: ownProps.section,
  }
}

export default connect(
  mapStateToProps,
  { nav_click, update_movies, update_selected_movie }
)(RouterConfig);
