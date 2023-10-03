import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { axiosInstance } from "../apis/config.js";
import { axiosInstanceImage } from "../apis/config.js";

import renderStars from "../components/stars/Star.js";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../store/slices/Card.js";

export default function MovieDetails() {
  const baseURL = "https://api.themoviedb.org/3";
  const apiKey = "f656c318dfdfc11c034aee2bda244dd4";

  const getMovieDetailsURL = (id) => {
    return `${baseURL}/movie/${id}?api_key=${apiKey}`;
  };
  const { id } = useParams();
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axiosInstance
      .get(getMovieDetailsURL(id))
      .then((res) => {
        setProduct(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [id]);

  return (
    <>
      <div className="container text-center mt-5 m-5">
        {product ? (
          <div className="row m-5">
            <div className="col text-center">
              <img
                src={`${axiosInstanceImage.defaults.baseURL}/${product.backdrop_path}`}
                className="card-img-top"
                alt="Product"
                style={{
                  height: "500px",
                  width: "500px",
                }}
              />
            </div>
            <div className="col text-start">
              <h3 className="card-title">{product.title}</h3>
              <h6 className="card-title">Category: {product.release_date}</h6>
              <p className="card-text">{product.description}</p>
              <p className="card-text">Brand: {product.brand}</p>
              <p className="card-text">Rating: {renderStars(product.rating)}</p>
              <button className="btn btn-info m-3"> fav </button>
            </div>
          </div>
        ) : (
          <p>No Movie</p>
        )}
      </div>
    </>
  );
}
