import React from "react";
import {v4 as uuid} from "uuid";

function Directors({directors}) {
  return (
    <div>
      <h1>Directors Page</h1>
      {directors?.map(director=>
        {
          return (
            <div key={uuid()}>
              <h2>Name: {director.name}</h2>
              <p>Movies:</p>
              <ul>
                {director.movies.map(movie=><li key={uuid()}>{movie}</li>)}
              </ul>
            </div>
          )
        })}
    </div>
  );
}

export default Directors;
