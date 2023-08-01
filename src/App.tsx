import React from 'react';
import './App.css';
import {HomePageViews} from "./views/HomePageViews/HomePageViews";
import {Route, Routes} from "react-router-dom";
import {OnePageView} from "./views/Books/OnePageViews/OnePageView";
import { ErrorPage } from './views/ErrorPage/ErrorPage';
import {LoginPageView} from "./views/LoginPageView/LoginPageView";
import {AddedBooksView} from "./views/Books/AddedBooksView/AddedBooksView";
import {PanelAdminViews} from "./views/PanelAdminViews/PanelAdminViews";
import {PanelAdminBooks} from "./views/PanelAdminViews/PanelAdminBooks/PanelAdminBooks";
import {PanelAdminUsers} from "./views/PanelAdminViews/PanelAdminUsers/PanelAdminUsers";
import { AuthProvider } from './utils/AuthProvider';
import {PrivateRoute} from "./utils/PrivetRoute";



export const App = () => {



  return (
      <AuthProvider>
        <Routes>
            <Route path="/" element={<HomePageViews/>}/>
            <Route path="/books/:id" element={<OnePageView/>}/>
             <Route path="/login" element={<LoginPageView/>}/>
             <Route path="/add-book" element={<AddedBooksView/>}/>
             <Route element={<PrivateRoute/>}>
               <Route path="/panel-admin" element={<PanelAdminViews/>}/>
               <Route path="/panel-admin/books" element={<PanelAdminBooks/>}/>
               <Route path="/panel-admin/users" element={<PanelAdminUsers/>}/>
           </Route>
            <Route path="*" element={<ErrorPage/>}/>
        </Routes>
      </AuthProvider>

  );
}

export default App;
