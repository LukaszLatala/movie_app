import React from "react";
import Spinner from "../Spinner/Spinner";
import "./FilmList.css";

const FilmList = ({ films, addToFavorite }) => {
  return (
    <>
      {films.length > 0 ? (
        <ul>
          {films.map((el) => {
            const { id, title, overview, vote_average, poster_path } = el;

            return (
              <li key={id}>
                <img
                  src={`https://image.tmdb.org/t/p/original/${poster_path}`}
                  alt={title}
                  style={{ width: "100px", height: "150px" }}
                />
                <p>
                  {" "}
                  <b>Tytuł:</b>
                  {title}
                </p>
                <p>
                  {" "}
                  <b>Opis:</b>
                  {overview}
                </p>
                <p>
                  {" "}
                  <b>Ocena:</b> {vote_average}
                </p>
                <button onClick={() => addToFavorite(id)}>
                  add to favorite
                </button>
                <hr />
              </li>
            );
          })}
        </ul>
      ) : (
        <Spinner />
      )}
    </>
  );
};
export default FilmList;

// https://api.themoviedb.org/3/movie/top_rated?api_k…3b6519ac3b897c4666&language=en-US&page=2↵/re3ZvlKJg04iLpLRf1xTKHS2wLU.jpg
