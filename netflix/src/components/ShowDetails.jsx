import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaStar } from "react-icons/fa";
import Comments from "./Comments";

export class ShowDetails extends Component {
  state = {
    id: "",
    movie: null,
  };

  componentDidMount = async () => {
    let id = this.props.match.params.id;
    // let response = await fetch('http://www.omdbapi.com/?apikey=c0b9281d &i='+id)
    let response = await fetch("https://striveflix.herokuapp.com/media/" + id);
    let parsedJson = await response.json();
    console.log(parsedJson);
    this.setState({ movie: parsedJson });
  };

  render() {
    return (
      <Container className="showDetails">
        {this.state.movie && (
          <Row className="mt-5">
            <Col xs={4}>
              <img className="img-fluid" src={this.state.movie.Poster} alt="" />
            </Col>
            <Col xs={8}>
              <h4>
                {this.state.movie.Title}{" "}
                <span className="year">({this.state.movie.Year})</span>
                <span className="ml-5">
                  <FaStar style={{ color: "yellow" }} />{" "}
                  {this.state.movie.imdbRating}/10
                </span>
              </h4>
              <p className="belowTitle">
                {this.state.movie.Rated} | {this.state.movie.Runtime} |{" "}
                {this.state.movie.Genre} | {this.state.movie.Released}
              </p>
              <div className="plot">{this.state.movie.Plot}</div>
              <div className="cast mt-3">
                <p>Director : {this.state.movie.Director}</p>
                <p>Actors : {this.state.movie.Actors}</p>
              </div>
              <Comments id={this.state.movie.imdbID} />
            </Col>
          </Row>
        )}
      </Container>
    );
  }
}

export default ShowDetails;
