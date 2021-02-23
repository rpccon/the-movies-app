import "./ListGroupContainer.sass";
import { AiOutlineDelete } from 'react-icons/ai';
import { isEmpty } from "lodash";

const ListGroupContainer = (fulliprops) => {
  const { title, movies, update_selected_movie, selectedMovie, activeIdMovieChange, classData } = fulliprops;
  const getMovieById = (id) => (movies.filter((movie) => movie.id == id))
  const getMovieIndexById = (id) => (movies.findIndex((movie) => movie.id == id))
  const buttonClick = (element) => {
    if(activeIdMovieChange) {
      const elementId = element.target.dataset.id;

      if(isEmpty(selectedMovie) || selectedMovie.id != elementId) {
        update_selected_movie({
          selectedMovie: getMovieById(elementId)[0],
          movies: [...movies]
        })
      }
    }
  }
  const deleteClick = (event) => {
    event.preventDefault();
    event.stopPropagation();

    let currentMovieId = event.target.dataset.id

    if(!currentMovieId) {
      currentMovieId = event.target.closest("a").dataset.id
    }

    const indexMovie = getMovieIndexById(currentMovieId)
    const newArray = [...movies]
    const newSelectedMovie = !isEmpty(selectedMovie)
      ? (selectedMovie.id == currentMovieId)
        ? {} : selectedMovie
      : {}

    newArray.splice(indexMovie, 1)

    update_selected_movie({
      selectedMovie: newSelectedMovie,
      movies: newArray
    })
  }

  return (
    <div className={`list-group ${classData}`}>
      <h2>{title}</h2>
      <ul>
        {movies.map((movie, index) => {
          let currentClass = "list-group-item"

          if(activeIdMovieChange) {
            if(movie.id == selectedMovie.id) {
              currentClass = `${currentClass} selected`
            }

            return (
              <li className={currentClass} key={index} onClick={buttonClick} data-id={movie.id} >
                <div>{movie.title}</div>
                <a className="btn btn-danger" data-id={movie.id} onClick={deleteClick}><AiOutlineDelete /></a>
              </li>)
          } else {
            currentClass = `${currentClass} api-item`

            return (
              <li className={currentClass} key={index}>
                <img className="api-img" src={movie.image} />
                <div className="api-text-container">
                  <div><strong>{movie.title}</strong></div>
                  <div>{movie.description}</div>
                </div>
              </li>
            )
          }
        })}
      </ul>
    </div>
  )
}

export default ListGroupContainer