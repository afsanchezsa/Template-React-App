import React from "react";
import { BrowserRouter ,Routes,Route} from "react-router-dom";
import { HomeComponent } from "../Components/Home";
import RegisterComponent from '../Components/Register'
function RoutesManager(){
    return(<BrowserRouter>
        <Routes>
          <Route exact path="/" element={<HomeComponent/>} />
          <Route exact path="/login"  element={<HomeComponent/>} />
          <Route exact path="/register"  element={<RegisterComponent/>} />
        </Routes>
      </BrowserRouter>)
}
export {RoutesManager};