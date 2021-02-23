import Movie from "../../model/movie/Movie";
import ListGroupContainer from "../listGroupContainer/ListGroupContainer";
import "./Home.sass";
import { isEmpty } from "lodash";

const Home = (fullProps) => {
  const { update_movies, movies, selectedMovie, update_selected_movie } = fullProps;
  const orderDate = (strDate) => {
    let finalStr = ""

    if(strDate) {
      const [ year, month, day ] = strDate.split(/_| |-/)
      const slash = "/"

      finalStr = `${month}${slash}${day}${slash}${year}`
    }

    return finalStr
  }

  let currentTitle = "¡There are no movies available, add one!"
  let headTitle = ""
  let currentRelease = ""
  let emptyClass = ""

  if(!isEmpty(movies)) {
    currentTitle = selectedMovie.title //"There are no movies available, add one !"
    currentRelease = `RELEASE DATE: ${orderDate(selectedMovie.release)}`
    headTitle = "Movies"
  } else {
    emptyClass = "empty"
  }

  return (
    <div className="components-container">
      <div className="add-movie-cta"><a className="btn btn-primary" href="/addForm" role="button">Add new movie</a></div>
      <div className="list-group-data">

        <ListGroupContainer
          title={headTitle}
          movies={movies}
          activeIdMovieChange={1}
          classData={""}
          selectedMovie={selectedMovie}
          update_selected_movie={update_selected_movie}
        />
        {
          <div className="movieSelected">
            <div className="main-title">
              <h2 className={`card-title ${emptyClass}`}>{currentTitle}</h2>
              <div>{currentRelease}</div>
            </div>
            {!isEmpty(selectedMovie) &&
              <div className="card">
                <img className="card-img-top" src={selectedMovie.imageSrc} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">{selectedMovie.description}</p>
                </div>
              </div>
            }
          </div>
          
        }
      </div>
    </div>
  )
}

export default Home;


const mapStateToProps = (state) => {
  return {
    movies: state.moviesState.movies,
  }
}

/*export default connect(
    mapStateToProps,
    { update_movies }
)(Home); */