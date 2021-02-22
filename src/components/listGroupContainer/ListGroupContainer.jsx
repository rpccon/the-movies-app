import "./ListGroupContainer.sass";
import { isEmpty } from "lodash";

const ListGroupContainer = (fulliprops) => {
  const { title, movies, update_selected_movie, selectedMovie, activeIdMovieChange } = fulliprops;
  const getMovieById = (id) => (movies.filter((movie) => movie.id == id))
  const buttonClick = (element) => { // agregar RXJS, porque necesitamos que no se ejecute un evento
    console.log("dsdfd");
    if(activeIdMovieChange) {
      const elementId = element.target.dataset.id;
      console.log("test");
      if(isEmpty(selectedMovie) || selectedMovie.id != elementId) {
        console.log("lo hace", getMovieById(elementId));
        update_selected_movie({
          selectedMovie: getMovieById(elementId)[0],
          movies: [...movies]
        })
      }
    }
  }

  return (
    <div className="list-group">
      <h2>{title}</h2>
      <ul>
        {movies.map((movie, index) => {
          let currentClass = "list-group-item"
          console.log("MOVIE ADDDAD", selectedMovie, movie.id);
          if(activeIdMovieChange && movie.id == selectedMovie.id) currentClass = `${currentClass} selected`

          return <li className={currentClass} key={index} onClick={buttonClick} data-id={movie.id} >{movie.title}</li>
        })}
      </ul>
    </div>
  )
}

export default ListGroupContainer