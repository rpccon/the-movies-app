import Movie from "../../model/movie/Movie";
import "./AddForm.sass";

const AddForm = ({ update_movies, movies }) => {
  const handleSubmit = (event) => {
    const currentForm = document.querySelector('.needs-validation');

    if(currentForm.checkValidity()) {
      const file = document.querySelector('input[type=file]').files[0];
      const movieTitle = document.querySelector('input[id="movieTitleDataText"]').value;
      const movieDescription = document.querySelector('input[id="movieDescData"]').value;
      const movieRelease = document.querySelector('input[id="releaseDateMovieData"]').value;
      const reader = new FileReader();

      event.stopPropagation();
      event.preventDefault();

      reader.onloadend = () => {
        const newMovie = new Movie([ movieTitle, movieRelease, movieDescription, reader.result, 0]);

        currentForm.classList.add("was-validated")

        update_movies({
          movies: [...movies, newMovie]
        })

        currentForm.submit()
      };
      reader.readAsDataURL(file);
    }
  }
  const onInputChange = (event) => {
    const formElement = event.target
    const file = formElement.files[0]
    const parsedMb = file.size / 1024 / 1024

    if(parsedMb > 0.7) {
      const errorMessage = formElement.parentElement.querySelector(".invalid-feedback");

      formElement.value=""
      errorMessage.style.display = "block"

      setTimeout(() => {
        errorMessage.style.display = "none"
      }, 3000);
    }
  }

  return (
    <form className="needs-validation" action={"/home"}>
      <div className="col-md-6">
        <label htmlFor="validationCustom03" className="form-label">Movie title</label>
        <input type="text" className="form-control" id="movieTitleDataText" required />
        <div className="invalid-feedback"></div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom03" className="form-label">Movie description</label>
        <input type="text" className="form-control" id="movieDescData" required />
        <div className="invalid-feedback"></div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom03" className="form-label">Release data</label>
        <input type="date" format="DD MMMM YYYY" className="form-control" id="releaseDateMovieData" required />
        <div className="invalid-feedback"></div>
      </div>
      <div className="col-md-6 file-input">
        <input accept="image/*" onChange={onInputChange} type="file" className="form-control" aria-label="file example" required />
        <div className="invalid-feedback">The attached image is too big, try get other one with less of 716kb</div>
      </div>
      <div className="col-md-6">
        <button onClick={handleSubmit} className="btn btn-primary" type="submit">Save movie</button>
      </div>
    </form>
  )
}

export default AddForm