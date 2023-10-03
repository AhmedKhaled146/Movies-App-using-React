import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../apis/config.js";
import { axiosInstanceImage } from "../apis/config.js";
import { useNavigate } from "react-router-dom";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../store/slices/Card.js";
import renderStars from "../components/stars/Star.js";
import { useSelector, useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

export default function MovieDetails() {
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "f656c318dfdfc11c034aee2bda244dd4";

  const getMovieDetailsURL = (id) => {
    return `${baseURL}/movie/${id}?api_key=${apiKey}`;
  };
  const getRecommendedMoviesURL = (id) => {
    return `${baseURL}/movie/${id}/recommendations?api_key=${apiKey}`;
  };
  const redirectToDetails = (id) => {
    navigate("/movie/" + id);
  };

  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [movie, setMovie] = useState(null);
  const [isSolidHeart, setIsSolidHeart] = useState(false);
  const [recommendedMovies, setRecommendedMovies] = useState([]);

  useEffect(() => {
    axiosInstance
      .get(getMovieDetailsURL(id))
      .then((res) => {
        setMovie(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
    axiosInstance
      .get(getRecommendedMoviesURL(id))
      .then((res) => {
        setRecommendedMovies(res.data.results);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  // Function to check if the movie is in watchlist
  const isInWatchlist = useSelector((state) =>
    state.cart.watchlist.some((item) => item.id === id)
  );

  // Function to toggle watchlist for recommended movies
  const handleRecommendedWatchlistToggle = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(id));
    } else {
      dispatch(addToWatchlist(id));
    }
    setIsSolidHeart(!isInWatchlist);
  };

  return (
    <>
      <div className="container text-center mt-5 m-5">
        {movie ? (
          <div className="row m-5">
            <div className="col text-center">
              <img
                src={`${axiosInstanceImage.defaults.baseURL}/${movie.backdrop_path}`}
                className="card-img-top"
                alt="Product"
                style={{
                  height: "500px",
                  width: "500px",
                  borderRadius: "15px",
                }}
              />
            </div>
            <div className="col text-start">
              <h3 className="card-title">{movie.original_title}</h3>
              <h6 className="">{movie.release_date}</h6>
              <br />
              <p className="card-text">
                Rating: {renderStars(movie.vote_average)} ({movie.vote_count})
              </p>

              <p className="card-text">{movie.overview}</p>
              <p className="card-text">Brand: {movie.brand}</p>
              <FontAwesomeIcon
                icon={isInWatchlist ? faSolidHeart : faRegularHeart}
              />
            </div>
          </div>
        ) : (
          <p>No Movie</p>
        )}
      </div>
      <div>
        <h2>Recommended Movies</h2>
        <div className="row row-cols-1 row-cols-md-4 g-4">
          {recommendedMovies.map((recommendedMovie) => (
            <div className="" key={recommendedMovie.id}>
              <a
                onClick={() => redirectToDetails(recommendedMovie.id)}
                className="card container"
                style={{
                  height: "380px",
                  maxWidth: "300px",
                }}
              >
                <img
                  src={`${axiosInstanceImage.defaults.baseURL}/${recommendedMovie.backdrop_path}`}
                  className="card-img-top"
                  alt="..."
                  style={{
                    maxHeight: "150px",
                    width: "100%",
                  }}
                />
                <div className="card-body">
                  <h5 className="card-title">
                    {recommendedMovie.original_title}
                  </h5>
                  <p className="card-text">{recommendedMovie.release_date}</p>
                  Rating: {renderStars(recommendedMovie.vote_average)}
                  <br />
                  <br />
                  <a className="">
                    {" "}
                    <button
                      className="icon_button"
                      onClick={() =>
                        handleRecommendedWatchlistToggle(recommendedMovie.id)
                      }
                    >
                      <FontAwesomeIcon
                        className="icon"
                        icon={isInWatchlist ? faSolidHeart : faRegularHeart}
                      />
                    </button>
                    <button
                      className="btn btn-primary m-3"
                      onClick={() => redirectToDetails(recommendedMovie.id)}
                    >
                      Watch
                    </button>
                  </a>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
