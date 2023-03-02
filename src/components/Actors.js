import React from "react";
import {v4 as uuid} from "uuid";

function Actors({actors}) {
  return (
    <div>
      <h1>Actors Page</h1>
      {actors?.map(actor=>
        {
          return (
            <div key={uuid()}>
              <h2>Name: {actor.name}</h2>
              <p>Movies:</p>
              <ul>
                {actor.movies.map(movie=><li key={uuid()}>{movie}</li>)}
              </ul>
            </div>
          )
        })}
    </div>
  );
}

export default Actors;
