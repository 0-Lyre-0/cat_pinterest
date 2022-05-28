import React from 'react';
import Layout from "./components/UI/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import {FAV_CATS_PATH, HOME_PATH} from "./constants/paths";
import AllCatsList from "./pages/AllCatsList/AllCatsList";
import FavoriteCatsList from "./pages/FavoriteCatsList/FavoriteCatsList";

const App = () => (
  <Layout>
    <Routes>
      <Route path={HOME_PATH} element={<AllCatsList/>}/>
      <Route path={FAV_CATS_PATH} element={<FavoriteCatsList/>}/>
    </Routes>
  </Layout>
);

export default App;
