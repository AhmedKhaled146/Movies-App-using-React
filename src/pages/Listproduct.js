import React, { useState, useEffect } from "react";
import Showall from "../components/products/Showall.js";
import { axiosInstance } from "../apis/config.js";

export default function List() {
  const [data, setData] = useState([]);

  useEffect(() => {
    axiosInstance
      .get("/popular", {
        params: {
          api_key: "f656c318dfdfc11c034aee2bda244dd4",
        },
      })
      .then((res) => {
        setData(res.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, []);

  return (
    <>
      <div className="container m-5">
        <div className="mx-5 text-center">
            <h1>Search (am)</h1>
        </div>
        <h1>All Products</h1>
        <div className="row row-cols-1 row-cols-md-6 g-1">
          {data.map((moviesdata) => (
            <div className="col" key={moviesdata.id}>
              <Showall moviesdata={moviesdata} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
