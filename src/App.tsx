import React from 'react';
import Layout from "./components/UI/Layout/Layout";
import {Route, Routes} from "react-router-dom";
import {FAV_CATS_PATH, HOME_PATH} from "./constants/paths";
import AllCatsPage from "./pages/AllCatsPage/AllCatsPage";
import FavoriteCatsPage from "./pages/FavoriteCatsPage/FavoriteCatsPage";

const App = () => (
  <Layout>
    <Routes>
      <Route path={HOME_PATH} element={<AllCatsPage/>}/>
      <Route path={FAV_CATS_PATH} element={<FavoriteCatsPage/>}/>
    </Routes>
  </Layout>
);

export default App;
