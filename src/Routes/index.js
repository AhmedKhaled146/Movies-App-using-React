import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Showall from "../components/products/Showall.js";
import Navbar from "../components/navbar/navbar.js";
import { LanguageContext } from "../context/language.js";

const List = React.lazy(() => import("../pages/Listproduct.js"));
const AddToWatchList = React.lazy(() => import("../pages/AddToWatchList.js"));
const MovieDetails = React.lazy(() => import("../pages/Details.js"));


function Routers() {
  return (
    <Suspense fallback={<h2>loading....</h2>}>
      <Routes>
        <Route path="/" element={<List />} />
        <Route path="/movie/:id" element={<MovieDetails />} />
        {/* <Route
          path="/to-ar"
          element={
            <LanguageContext.Consumer>
              {(context) => (
                <>
                  <Navbar />
                  <button onClick={() => context.setContextLang("ar")}>
                    Change Language to Arabic
                  </button>
                  <Showall />
                </>
              )}
            </LanguageContext.Consumer>
          }
        />
        <Route
          path="/to-en"
          element={
            <LanguageContext.Consumer>
              {(context) => (
                <>
                  <Navbar />
                  <button onClick={() => context.setContextLang("en")}>
                    Change Language to English
                  </button>
                  <Showall />
                </>
              )}
            </LanguageContext.Consumer>
          }
        /> */}
        <Route path="/add-to-watch-list" element={<AddToWatchList />} />
        <Route path="*" element={<h1>Not found page</h1>} />
      </Routes>
    </Suspense>
  );
}

export default Routers;
