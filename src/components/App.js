import React from "react";
import { Route } from "react-router-dom";
import NavBar from "./NavBar";
import Home from "./Home";
import Actors from "./Actors";
import Directors from "./Directors";
import Movies from "./Movies";
import { movies, actors, directors } from "../data.js";

function App() {
  return (
    <div>
        <NavBar/>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route exact path="/movies">
          <Movies 
            movies={movies} />
        </Route>
        <Route exact path="/actors">
          <Actors actors={actors}/>
        </Route>
        <Route exact path="/directors">
          <Directors directors={directors}/>
        </Route>
    </div>
  )
}

export default App;
