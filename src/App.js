import React from "react";
import MovieList from "./movieList";
import NavBar from "./navBar";
import { movies } from "./MovieListData";
export default class App extends React.Component {
  constructor() {
    // we have to call super class before state
    super();
    this.state = {
      movies: movies,
      cartCount: 0,
    };
  }

  // incrase stars
  handelIncStar = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);
    if (movies[mId].stars === 5) {
      return;
    }
    movies[mId].stars += 0.5;
    this.setState({
      movies: movies,
    });
  };

  // decrease stars
  handelDecStar = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);
    if (movies[mId].stars === 0) {
      return;
    }
    movies[mId].stars -= 0.5;
    this.setState({
      // movies:movies
      movies,
    });
  };

  //  handiling fav icon

  handelFav = (movie) => {
    const { movies } = this.state;
    const mId = movies.indexOf(movie);
    movies[mId].fav = !movies[mId].fav;
    this.setState({
      movies,
    });
  };
  // handling add cart
  handelCart = (movie) => {
    let { movies,cartCount } = this.state;
    const mId = movies.indexOf(movie);
    movies[mId].cart = !movies[mId].cart;
    
    if (!movies[mId].cart ) {
      cartCount =cartCount+ 1;
    }else{
      cartCount -=1;
    }
    
    this.setState({
      movies,
      cartCount
    });
  };

  render() {
    const { movies,cartCount } = this.state;
    return (
      <>
        <NavBar
        movies={movies}
        cartCount={cartCount}
         />
        <h1 className="title-app">Movie List</h1>
        <MovieList
          movies={movies}
          addStars={this.handelIncStar}
          minStars={this.handelDecStar}
          favItem={this.handelFav}
          addCart={this.handelCart}
        />
       
      </>
    );
  }
}
