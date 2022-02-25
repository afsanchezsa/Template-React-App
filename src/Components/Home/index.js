import React from "react";
import Button from 'react-bootstrap/Button'
import { Link } from "react-router-dom";
import './Home.css'

function HomeComponent() {
  return (
    <div className="container d-flex flex-column home__allHeight">
      <div className="d-flex flex-row justify-content-center align-items-center home__fg-6 home_backgreen">
        <div className="d-flex justify-content-center ">

          <div>
            <h1>  AgroTrust</h1>
          </div>

        </div>

      </div>

      <div className="d-flex justify-content-center align-items-center home__fg-1">
      <Link to="/login">
        <Button variant="success" className="home__btn"> Login</Button>
      </Link>
    
    <Link to="/register">
    
    <Button className="home__btn">REGISTER</Button>

    </Link>    
      </div>
    </div>
  )
}
export { HomeComponent }