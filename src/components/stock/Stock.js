import React from "react";

function Stock(stock) {
  if (stock === 0) {
    return <span style={{ color: "white",
                          backgroundColor: "red",
                          padding: '10px',
                          margin: '10px',
                          borderRadius: '50px'
                        }}>Out of Stock</span>;
  } else {
    return <span style={{ color: "white",
                          backgroundColor: "green",
                          padding: '10px',
                          margin: '10px',
                          borderRadius: '50px',
                          display: "flex",
                          position: "absolute",
                        }}>In Stock</span>;
  }
}

export default Stock;
