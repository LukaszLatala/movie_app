import React from "react";
import "./FavoriteFilms.css";

const FavoriteFilms = ({ removeFromList, favoriteFilm }) => {
  return (
    <>
      <h1>Favorite Films</h1>

      <ul>
        {favoriteFilm.map((film) => {
          const { id, title, overview, vote_average, poster_path } = film;

          return (
            <li key={id}>
              <img
                src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                alt={title}
                style={{ width: "100px", height: "150px" }}
              ></img>
              <p>{title}</p>
              <p>{overview}</p>
              <p>{vote_average}</p>
              <button onClick={() => removeFromList(film)}>Remove</button>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default FavoriteFilms;
