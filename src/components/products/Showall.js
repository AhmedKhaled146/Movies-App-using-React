import React from "react";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { axiosInstanceImage } from "../../apis/config.js";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart as faRegularHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";

import renderStars from "../stars/Star.js";
import {
  addToWatchlist,
  removeFromWatchlist,
} from "../../store/slices/Card.js";

import "./style.css";

function Showall(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSolidHeart, setIsSolidHeart] = useState(false);

  // Get the movie data from props
  const { moviesdata } = props;

  // Check if the movie is in the watchlist
  const isInWatchlist = useSelector((state) =>
    state.cart.watchlist.some((item) => item.id === moviesdata.id)
  );

  const handleWatchlistToggle = () => {
    if (isInWatchlist) {
      dispatch(removeFromWatchlist(moviesdata));
    } else {
      dispatch(addToWatchlist(moviesdata));
    }
    setIsSolidHeart(!isInWatchlist);
  };

  const redirectToDetails = (id) => {
    navigate("/movie/" + id);
  };

  return (
    <div className="">
      <div
        // onClick={() => redirectToDetails(moviesdata.id)}
        className="test card container"
        style={{
          height: "380px",
          maxWidth: "300px",
        }}
      >
        <img
          src={`${axiosInstanceImage.defaults.baseURL}/${moviesdata.backdrop_path}`}
          className="card-img-top"
          alt="..."
          style={{
            maxHeight: "150px",
            width: "100%",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{moviesdata.original_title}</h5>
          <p className="card-text">{moviesdata.release_date}</p>
          Rating: {renderStars(moviesdata.vote_average)}
          <br />
          <br />
          <button className="icon_button m-3" onClick={handleWatchlistToggle}>
            {isInWatchlist ? (
              <FontAwesomeIcon className="icon" icon={faSolidHeart} />
            ) : (
              <FontAwesomeIcon className="icon" icon={faRegularHeart} />
            )}
          </button>
          <button className="btn btn-primary m-3" onClick={() => redirectToDetails(moviesdata.id)}>
            Watch
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showall;
