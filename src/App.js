import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { apiKey } from "./Api/apiKey";
import FilmList from "./components/FilmsList/FilmList";
import Pagination from "./components/Pagination/Pagination";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import FavoriteFilms from "./components/FavoriteFilms/FavoriteFilms";
import Navbar from "./components/Navigation/Navbar";
import Header from "./components/Header/Header";

// import SearchVote from "./components/SearchVote/SearchVote";
//https://api.themoviedb.org/3/movie/top_rated?api_key=&language=en-US&page=1

class App extends Component {
  state = {
    films: [],
    page: 1,
    favoriteFilm: [],
    loadging: true,
  };

  // printHello = () => {
  //   console.log("hello");
  // };

  componentDidMount() {
    // this.printHello();
    setTimeout(() => {
      this.getfilms();
    }, 1000);
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.page !== this.state.page) {
      this.setState({
        films: [],
      });
      setTimeout(() => {
        this.getfilms();
      }, 1500);
    }
  }

  getfilms = () => {
    axios
      .get(
        `https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&language=en-US&page=${this.state.page}
        `
      )
      .then((response) => {
        console.log(response);
        this.setState({
          films: [...response.data.results],
        });
      });
  };
  getNextPage = () => {
    this.setState({
      page: this.state.page + 1,
    });
  };
  getPreviousPage = () => {
    this.setState({
      page: this.state.page - 1,
    });
  };
  addToFavorite = (filmId) => {
    const choosenFilm = this.state.films.find((film) => film.id === filmId);
    this.setState({
      favoriteFilm: [...new Set([...this.state.favoriteFilm, choosenFilm])],
    });
    // console.log({ ...choosenFilm });
  };

  removeFromList = (removedFilm) => {
    console.log(removedFilm);
    this.setState({
      favoriteFilm: this.state.favoriteFilm.filter(
        (film) => film !== removedFilm
      ),
    });
  };

  render() {
    return (
      <BrowserRouter>
        <Header />
        <Navbar fav={this.state.favoriteFilm} />

        <Switch>
          <Route exact path="/">
            <FilmList
              films={this.state.films}
              addToFavorite={this.addToFavorite}
            />

            <Pagination
              page={this.state.page}
              getPreviousPage={this.getPreviousPage}
              getNextPage={this.getNextPage}
              loading={this.state.loadging}
            />
          </Route>

          <Route path="/favorite">
            <FavoriteFilms
              favoriteFilm={this.state.favoriteFilm}
              removeFromList={this.removeFromList}
            />
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}
export default App;
