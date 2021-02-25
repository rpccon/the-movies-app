import { Component } from "react"
import uniqid from "uniqid"

class Movie extends Component {
  constructor(props) {
    super(props)

    const [ title, release, description, imageSrc, isSelected ] = props;
    this.id = uniqid();
    this.title = title;
    this.release = release;
    this.description = description;
    this.imageSrc = imageSrc;
    this.selected = isSelected;
  }
}

export default Movie;