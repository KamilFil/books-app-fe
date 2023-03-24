import React from 'react';
import './App.css';
import {HomePageViews} from "./views/HomePageViews/HomePageViews";
import {Route, Routes} from "react-router-dom";
import {OnePageView} from "./views/Books/OnePageViews/OnePageView";
import { ErrorPage } from './views/ErrorPage/ErrorPage';


export const App = () => {
  return (
<Routes>
    <Route path="/" element={<HomePageViews/>}/>
    <Route path="/books/:id" element={<OnePageView/>}/>
    <Route path="*" element={<ErrorPage/>}/>
</Routes>

  );
}

export default App;
