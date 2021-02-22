import "./RouterConfig.sass"
import { nav_click } from '../../redux/actions/navActions'
import { update_movies, update_selected_movie } from '../../redux/actions/moviesActions'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import Home from "../home/Home"
import Header from "../header/Header"
import AddForm from "../addForm/AddForm"
import { useEffect } from 'react'

const RouterConfig = (fullState) => {
  const {title, selectedMovie, update_selected_movie, movies, nav_click, update_movies, match: { params }} = fullState;
  console.log("data sets", fullState);

  /*const buttonClick = (title) => {
    nav_click({
      title: title,
    });
  } */
  useEffect(() => {
    let title = "";

    switch (params.section) {
        case "home":
          title = "Home";
          break;
        /*case "list":
          title = "List";
          break;
        case "new":
          title = "New";
          break;*/
        default:
          title = "Home";
    }

    /*nav_click({
        title: title,
    }); */
  }, [])

  const renderSection = () => {
    console.log("try rebnder");
    switch (params.section) {
      case "home":
        return <Home
          update_movies={update_movies}
          selectedMovie={selectedMovie}
          update_selected_movie={update_selected_movie}
          movies={movies}
        />
        break;
      /*case "list":
        console.log("-----list");
        return <List />;
        break;*/
      case "addForm":
        return <AddForm
        />;
        break;
      default:
        console.log("do this baba");
        return;
    }
  }

  return (
    <div className="Router-config">
     {/* <header className="App-movies-header">
          <div>
              <h1>{title}</h1>
          </div>
          <Link to='home' onClick={() => buttonClick('Home')}>Home</Link>
          <Link to='list' onClick={() => buttonClick('List')}>List</Link>
          <Link to='new' onClick={() => buttonClick('New')}>Form</Link>


      </header> */}
      <Header />
      {renderSection()}
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  console.log("state", state);
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
