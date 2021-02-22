import { Component } from 'react'

class Movie extends Component {
  constructor(props) {
    super(props)
    console.log("PROPS", props);
    const [ id, title, release, description, imageSrc, isSelected ] = props;
    this.id = id;
    this.title = title;
    this.release = release;
    this.description = description;
    this.imageSrc = imageSrc;
    this.selected = isSelected;
  }

  getData() {
    return this;
  }
}

export default Movie;