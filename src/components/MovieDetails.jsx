import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Card from "react-bootstrap/Card";

const MovieDetails = () => {
  const params = useParams();
  console.log(params.movieId);

  const [movieDetailObject, setMovieDetailsObject] = useState(null);
  const [movieComments, setMovieComments] = useState([]);
  const [showAllComments, setShowAllComments] = useState(false);

  useEffect(() => {
    getDetails();

    getComments();
  }, []);

  const getDetails = () => {
    fetch(`http://www.omdbapi.com/?apikey=1ab1d1e3&i=${params.movieId}`)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("Errore nel recupero dei dettagli del film");
        }
      })
      .then((movieDetail) => {
        console.log("Dettagli del film:", movieDetail);
        setMovieDetailsObject(movieDetail);
      })
      .catch((error) => {
        console.error("Errore:", error);
      });
  };

  const getComments = () => {
    fetch("https://striveschool-api.herokuapp.com/api/comments/", {
      headers: {
        Authorization:
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NWMzOGQ5NjZkZTM0YTAwMTk3YTEyOTIiLCJpYXQiOjE3MDczMTQ1ODIsImV4cCI6MTcwODUyNDE4Mn0.ci5qmrDyWzTYGdpiS5r_0qbFn3xCd-i2C38ERao0wqI",
      },
    })
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error("errore nel recupero commenti film");
        }
      })
      .then((movieComments) => {
        console.log("COMMENTI", movieComments);
        setMovieComments(movieComments);
      })
      .catch((err) => console.log("ERRORE", err));
  };

  return (
    <div className="d-flex justify-content-center text-light">
      {movieDetailObject && (
        <Card className="border-0" style={{ width: "18rem" }}>
          <Card.Img
            variant="top"
            src={movieDetailObject.Poster}
            alt="Movie Poster"
            style={{ height: "200px", objectFit: "cover" }}
          />
          <Card.Body>
            <Card.Title>{movieDetailObject.Title}</Card.Title>
            <Card.Text className="text-dark">
              {movieDetailObject.Plot}
            </Card.Text>
          </Card.Body>
          {movieComments && (
            <Card.Footer>
              <ListGroup style={{ maxHeight: "150px", overflowY: "auto" }}>
                {showAllComments
                  ? movieComments.map((comment) => (
                      <ListGroup.Item key={comment._id}>
                        {comment.rate} - {comment.comment}
                      </ListGroup.Item>
                    ))
                  : movieComments.slice(0, 5).map((comment) => (
                      <ListGroup.Item key={comment._id}>
                        {comment.rate} - {comment.comment}
                      </ListGroup.Item>
                    ))}
              </ListGroup>
              {movieComments.length > 5 && (
                <button
                  className="mt-4 ms-4"
                  onClick={() => setShowAllComments(!showAllComments)}
                >
                  {showAllComments
                    ? "Nascondi commenti"
                    : "Visualizza altri commenti"}
                </button>
              )}
            </Card.Footer>
          )}
        </Card>
      )}
    </div>
  );
};

export default MovieDetails;
