import React from "react";
import { useNavigate } from "react-router-dom";
import Stock from "../stock/Stock.js";
import renderStars from "../stars/Star.js";
import { addToCart } from "../../store/slices/Card.js";
import { useDispatch } from "react-redux";
import {axiosInstanceImage} from '../../apis/config.js'



function Showall(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const redirectToDetails = (id) => {
    navigate("/movie/" + id);
  };


  return (
    <div className="">

      <div
        className="card container"
        style={{
          height: "350px",
          maxWidth: "300px",
          alignItems: "",
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
          <button
            className="btn btn-info"
            onClick={() => redirectToDetails(props.moviesdata.id)}
          >
            {" "}
            Details{" "}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Showall;
