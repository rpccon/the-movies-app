
import ListGroupContainer from "../listGroupContainer/ListGroupContainer";
import { isEmpty } from "lodash";
import "./Home.sass";

const EMPTY = ""
const Home = (fullProps) => {
  const { movies, selectedMovie, update_selected_movie } = fullProps;
  const orderDate = (strDate) => {
    let finalStr = EMPTY

    if(strDate) {
      const [ year, month, day ] = strDate.split(/_| |-/)
      const slash = "/"

      finalStr = `${month}${slash}${day}${slash}${year}`
    }

    return finalStr
  }

  let currentTitle = EMPTY
  let headTitle = EMPTY
  let currentRelease = EMPTY
  let emptyClass = EMPTY

  if(!isEmpty(selectedMovie)) {
    currentTitle = selectedMovie.title
    currentRelease = `RELEASE DATE: ${orderDate(selectedMovie.release)}`
  }

  if(isEmpty(movies)) {
    currentTitle = "¡There are no movies available, add one!"
    emptyClass = "empty"
  } else {
    headTitle = "Movies"
  }

  return (
    <div className="components-container">
      <div className="add-movie-cta"><a className="btn btn-primary" href="/addForm" role="button">Add new movie</a></div>
      <div className="list-group-data">
        <ListGroupContainer
          title={headTitle}
          movies={movies}
          activeIdMovieChange={1}
          classData={EMPTY}
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