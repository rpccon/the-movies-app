import "./AddForm.sass";
import imageToBase64 from "image-to-base64"
import uniqid from "uniqid"
import Movie from "../../model/movie/Movie";
import { update_movies } from '../../redux/actions/moviesActions'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom';

const AddForm = ({ update_movies, movies }) => {
  const handleSubmit = (event) => {
    
    const currentForm = document.querySelector('.needs-validation');
    //alert("run this");
    if(currentForm.checkValidity()) {
      const file = document.querySelector('input[type=file]').files[0];
      const movieTitle = document.querySelector('input[id="movieTitleDataText"]').value;
      const movieDescription = document.querySelector('input[id="movieDescData"]').value;  //    querySelector('textarea[id=""]'.value);
      const movieRelease = document.querySelector('input[id="releaseDateMovieData"]').value;

      console.log(movieTitle, movieDescription, movieRelease);
      console.log("FINLE", file);
      const reader = new FileReader();
    //  debugger;
    console.log("currently videos", movies);
      reader.onloadend = () => {

        console.log("rererer", reader.result);

        const newMovie = new Movie([`${uniqid()}`, movieTitle, movieRelease, movieDescription, reader.result, 0]);
        
  
        currentForm.classList.add('was-validated')
        console.log("test", [...movies, newMovie]);
        update_movies({
          movies: [...movies, newMovie]
        })
        //debugger;
        
      
      };
      reader.readAsDataURL(file);
      
    ///  debugger;


      console.log("currently videosv2", movies);

      //debugger;
    } else {
     // event.preventDefault();
     // event.stopPropagation();
    }
    
  }

  const ipdategg = () => {
    const newMovie = new Movie([`${uniqid()}`, "TEST", "TEST", "TEST", "TEST", 0]);
    update_movies({
      movies: [...movies, newMovie]
    })
  }


  
return (
  <form className="needs-validation" action={"/home"}>
      <div className="col-md-6">
        <label htmlFor="validationCustom03" className="form-label">Movie title</label>
        <input type="text" className="form-control" id="movieTitleDataText" required />
        <div className="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom03" className="form-label">Movie description</label>
        <input type="text" className="form-control" id="movieDescData" required />
        <div className="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div className="col-md-6">
        <label htmlFor="validationCustom03" className="form-label">Release data</label>
        <input type="text" className="form-control" id="releaseDateMovieData" required />
        <div className="invalid-feedback">
          Please provide a valid city.
        </div>
      </div>
      <div className="col-md-6">
        <input type="file" className="form-control" aria-label="file example" required />
        <div className="invalid-feedback">Example invalid form file feedback</div>
      </div>

      <div className="col-md-6">
        <button onClick={handleSubmit} className="btn btn-primary" type="submit">Submit form</button>
      </div>
    </form>
)
   /* {/*}*/
 // )
}


// export default AddForm



const mapStateToProps = (state) => {
  console.log("state", state);
    return {
      movies: state.moviesState.movies,
    }
}

export default connect(
    mapStateToProps,
    { update_movies }
  )(AddForm);
