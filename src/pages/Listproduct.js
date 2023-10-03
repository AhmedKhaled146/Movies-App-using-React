import React, { useState, useEffect } from "react";
import Showall from "../components/products/Showall.js";
import { axiosInstanceForSearch } from "../apis/config.js";
import axios from "axios";
import "./listMovies.css";

export default function List() {
  const [data, setData] = useState([]);
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);

  const API_KEY = "f656c318dfdfc11c034aee2bda244dd4";
  const API_URL = `https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=${page}`;
  const baseUrl = 'https://api.themoviedb.org/3'
  const handleSearch = () => {
    // Make an API request to search for movies
    axios
      .get(`${baseUrl}/search/movie?api_key=${API_KEY}&query=${searchQuery}`)
      .then((response) => {
        setSearchResults(response.data.results);
      })
      .catch((error) => {
        console.error("Error searching for movies:", error);
      });
  };

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
        {/* search place */}
        <div className="text-center p-3 m-5 bg-dark text-white" style={{
          borderRadius: '10px'
        }}>
          <h1>Welcome To our Movies App</h1>
          <div className="input-group mb-3">
            <input
              type="text"
              className="form-control m-2"
              placeholder="Search for a movie..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <div className="input-group-append">
              <button
                className="btn btn-outline-secondary m-2"
                type="button"
                onClick={handleSearch}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* result */}
        {searchResults.length > 0 && (
          <div>
            <h2>Search Results</h2>
            <div className="row row-cols-1 row-cols-md-4 g-4">
              {searchResults.map((movie) => (
                <div className="col" key={movie.id}>
                  {/* Render movie information here */}
                  <h3>{movie.title}</h3>
                  <p>{movie.release_date}</p>
                  {/* Add more movie details as needed */}
                </div>
              ))}
            </div>
          </div>
        )}

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
        {/* pagination */}
        <div className="text-center">
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(page - 1)}
            disabled={page === 1}
          >
            Previous Page
          </button>
          <span className=" page m-5">{page}</span>
          <button
            className="btn btn-primary"
            onClick={() => handlePageChange(page + 1)}
          >
            Next Page
          </button>
        </div>
      </div>
    </>
  );
}
