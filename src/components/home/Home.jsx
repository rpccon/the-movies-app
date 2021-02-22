import Movie from "../../model/movie/Movie";
import ListGroupContainer from "../listGroupContainer/ListGroupContainer";
import "./Home.sass";
import { isEmpty } from "lodash";

const Home = (fullProps) => {
  const { update_movies, movies, selectedMovie, update_selected_movie } = fullProps;

  const buttonClick = () => {
    const firstMovie = new Movie(["1", "Home Alone 2", "11/20/1992", "One year after Kevin McCallister was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself stranded in New York City - and the same criminals are not far behind.", "https://m.media-amazon.com/images/M/MV5BNDI1MzM0Y2YtYmIyMS00ODE3LTlhZjEtZTUyNmEzMTNhZWU5XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", 0]);
    const secondMovie = new Movie(["2", "Life is Beatiful", "11/20/1992", "When an open-minded Jewish librarian and his son become victims of the Holocaust, he uses a perfect mixture of will, humor, and imagination to protect his son from the dangers around their camp.", "https://m.media-amazon.com/images/M/MV5BYmJmM2Q4NmMtYThmNC00ZjRlLWEyZmItZTIwOTBlZDQ3NTQ1XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_UX182_CR0,0,182,268_AL_.jpg", 0]);
    const fourthMovie = new Movie(["3", "Terminator: Dark Fate", "11/20/1992", "Sarah Connor and a hybrid cyborg human must protect a young girl from a newly modified liquid Terminator from the future.", "https://m.media-amazon.com/images/M/MV5BNzhlYjE5MjMtZDJmYy00MGZmLTgwN2MtZGM0NTk2ZTczNmU5XkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UX182_CR0,0,182,268_AL_.jpg", 0]);
    const fifthMovie = new Movie(["4", "Avengers: Endgame", "11/20/1992", "After the devastating events of Avengers: Infinity War (2018), the universe is in ruins. With the help of remaining allies, the Avengers assemble once more in order to reverse Thanos' actions and restore balance to the universe.", "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UX182_CR0,0,182,268_AL_.jpg", 1]);

    const newMovies = [firstMovie, secondMovie, fourthMovie, fifthMovie];

    update_movies({
      movies: [...newMovies, ...movies]
    });
  }
  let currentTitle = "There are no movies available, add one !"
  let currentRelease = ""

  if(!isEmpty(selectedMovie)) {
    currentTitle = selectedMovie.title //"There are no movies available, add one !"
    currentRelease = `RELEASE DATE: ${selectedMovie.release}`
  }

  return (
    <div className="components-container">
      <div className="add-movie-cta"><a className="btn btn-primary" href="#" role="button">Link</a></div>
      <div className="list-group-data">

        <ListGroupContainer
          title={"Movies"}
          movies={movies}
          activeIdMovieChange={1}
          selectedMovie={selectedMovie}
          update_selected_movie={update_selected_movie}
        />
        {
          <div className="movieSelected">
            <div className="main-title">
              <h2 className="card-title">{currentTitle}</h2>
              <div>{currentRelease}</div>
            </div>
            {!isEmpty(selectedMovie) &&
              <div className="card">
                <img className="card-img-top" src={selectedMovie.imageSrc} alt="Card image cap" />
                <div className="card-body">
                  <p className="card-text">{selectedMovie.description}</p>
                  <a href="#" className="btn btn-primary">Go somewhere</a>
                </div>
              </div>
            }
          </div>
          
        }
      </div>
      <div onClick={() => buttonClick()}>DATA CHARHGE</div>
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