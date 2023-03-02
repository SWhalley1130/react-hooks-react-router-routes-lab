import React from "react";
import {v4 as uuid} from "uuid";

function Movies({movies}) {
  return (
    <>
      <h1>Movies Page</h1>
      {movies?.map(movie=>
        {
          return (
            <div key={uuid()}>
              <h2>Name: {movie.title}</h2>
              <p>Time: {movie.time}</p>
              <p>Genres:</p>
              <ul>
                {movie.genres.map(genre=><li key={uuid()}>{genre}</li>)}
              </ul>
            </div>
          )
        })}
    </>
  );
}

export default Movies;
