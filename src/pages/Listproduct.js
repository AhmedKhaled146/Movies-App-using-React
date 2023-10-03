import React, { useState, useEffect } from "react";
import Showall from "../components/products/Showall.js";
import { axiosInstance } from "../apis/config.js";
import axios from "axios";
import "./listMovies.css";

export default function List() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);

  const API_KEY = "f656c318dfdfc11c034aee2bda244dd4";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get(API_URL);
        setData(response.data.results);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [page]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <>
      <div className="container my-5">
        <div className="m-5 text-center">
          <h1 className="my-5">Search Place (am)</h1>
        </div>
        <div className="m-5 text-center">
          <h1 className="my-5">Popular Movies</h1>
        </div>
        <div className="row row-cols-1 row-cols-md-5 g-1">
          {data.map((moviesdata) => (
            <div className="col" key={moviesdata.id}>
              <Showall moviesdata={moviesdata} />
            </div>
          ))}
        </div>
        <br />
        <hr />
        <div className="text-center">
          <button
            className="btn btn-success"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span className=" page m-5">{page}</span>
          <button
            className="btn btn-success"
            onClick={() => handlePageChange(page + 1)}
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}
