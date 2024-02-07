import { Component } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class Galleria extends Component {
  state = {
    movies: [],
  };

  moviesFetch = () => {
    fetch(`http://www.omdbapi.com/?apikey=1ab1d1e3&s=${this.props.film}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nella ricezione dei film");
        }
      })
      .then((data) => {
        if (data && data.Search) {
          this.setState({ movies: data.Search.slice(0, 8) });
          console.log("Lista film:", data.Search);
        } else {
          throw new Error("Nessun film trovato");
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  componentDidMount() {
    this.moviesFetch();
  }

  render() {
    return (
      <>
        <Col className="d-flex flex-wrap">
          {this.state.movies.map((movie, index) => (
            <Link to={`/movie-details/${movie.imdbID}`} key={index}>
              <Card
                key={index}
                style={{ width: "10rem", margin: "10px" }}
                className="border-0"
              >
                <Card.Img
                  variant="top"
                  src={movie.Poster}
                  style={{ height: "200px", objectFit: "cover" }}
                />
              </Card>
            </Link>
          ))}
        </Col>
      </>
    );
  }
}

export default Galleria;
