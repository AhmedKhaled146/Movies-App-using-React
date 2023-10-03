import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';


const List = React.lazy(() => import('../pages/Listproduct.js'));
const AddToWatchList = React.lazy(() => import('../pages/AddToWatchList.js'));
const Contact = React.lazy(() => import('../pages/Contactus.js'));
// const serachResult = React.lazy(() => import('../pages/serachResult.js'));
// const watch = React.lazy(() => import('../pages/Contactus.js'));
const MovieDetails = React.lazy(() => import('../pages/Details.js'));



function Routers() {
  return (
    <Suspense fallback={<h2>loading....</h2>}>
      <Routes>
          <Route path='/' element={<List />}/>
          <Route path='/movie/:id' element={<MovieDetails />}/>
          <Route path='/contact-Us' element={<Contact />}/>
          <Route path='/add-to-watch-list' element={<AddToWatchList />}/>
          <Route path="*" element={<h1>Not found page</h1>} />
      </Routes>
    </Suspense>

  );
}

export default Routers;
