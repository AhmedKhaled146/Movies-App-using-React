import React from "react";
import { useNavigate } from "react-router-dom";
import Stock from "../stock/Stock.js";
import renderStars from "../stars/Star.js";
import { addToCart } from "../../store/slices/Card.js";
import { useDispatch } from "react-redux";
import {axiosInstanceImage} from '../../apis/config.js'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faRegularHeart } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faSolidHeart } from '@fortawesome/free-solid-svg-icons';

import './style.css'



function Showall(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToDetails = (id) => {
    navigate("/movie/" + id);
  };


  return (
    <div className="">
      <a
        onClick={() => redirectToDetails(props.moviesdata.id)}
        className="card container"
        style={{
          height: "380px",
          maxWidth: "300px",
        }}
      >
        <img
          src={`${axiosInstanceImage.defaults.baseURL}/${props.moviesdata.backdrop_path}`}
          className="card-img-top"
          alt="..."
          style={{
            maxHeight: "150px",
            width: "100%",
          }}
        />
        <div className="card-body">
          <h5 className="card-title">{props.moviesdata.original_title}</h5>
          <p className="card-text">{props.moviesdata.release_date}</p>
          Rating: {renderStars(props.moviesdata.vote_average)}
          <br />
          <br />
          <a
            className=""
            onClick={() => redirectToDetails(props.moviesdata.id)}
          >
            {" "}
            <FontAwesomeIcon icon={faRegularHeart} />
            <FontAwesomeIcon icon={faSolidHeart} />
          </a>
        </div>
      </a>
    </div>
  );
}

export default Showall;
