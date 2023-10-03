import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { Container, Alert } from "react-bootstrap";

import { removeFromWatchlist, clearWatchList } from "../store/slices/Card.js";
import { axiosInstanceImage } from "../apis/config.js";

import { useDispatch, useSelector } from "react-redux";

export default function WatchList() {
  const watchlist = useSelector((state) => state.cart.watchlist);
  const dispatch = useDispatch();

  const clearWatchlist = () => {
    if (window.confirm("Are you sure you want to clear your watchlist?")) {
      dispatch(clearWatchList());
    }
  };

  return (
    <Container className="py-5">
      <h1 className="py-5">My Watch List</h1>
      {watchlist.length === 0 ? (
        <Alert variant="info">Your watch list is empty.</Alert>
      ) : (
        <>
          <Button variant="danger" onClick={clearWatchlist} className="mb-3">
            Clear My Watch List
          </Button>
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {watchlist.map((movie, index) => (
              <div className="col mb-4" key={index}>
                <Card>
                  <Card.Img
                    variant="top"
                    src={`${axiosInstanceImage.defaults.baseURL}/${movie.backdrop_path}`}
                    alt="Movie"
                  />
                  <Card.Body>
                    <Card.Title>{movie.original_title}</Card.Title>
                    <Button
                      variant="danger"
                      onClick={() => dispatch(removeFromWatchlist(movie))}
                    >
                      Remove
                    </Button>
                  </Card.Body>
                </Card>
              </div>
            ))}
          </div>
        </>
      )}
    </Container>
  );
}
