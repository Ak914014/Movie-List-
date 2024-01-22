import { Component } from "react";
function MovieCard(props) {
  // distrutring state
  const { title, price, plot, url, rating, stars, fav, cart } =
    props.movies;

  const { addStars, favItem, addCart, movies, minStars } = props;

  return (
    <>
      <div className="main">
        <div className="movie-card">
          <div className="left">
            <img alt="poster" src={url}></img>
          </div>
          <div className="right">
            <div className="title">{title}</div>
            <div className="plot">{plot}</div>
            <div className="price">{price}</div>
            <div className="footer">
              <div className="rating">{rating}</div>
              <div className="stars">
                <img
                  className="star-icon"
                  alt="mins"
                  src="https://cdn-icons-png.flaticon.com/128/56/56889.png"
                  onClick={() => {
                    minStars(movies);
                  }}
                />
                <img
                  className="star-icon"
                  alt="star"
                  src="https://cdn-icons-png.flaticon.com/128/2107/2107957.png"
                />
                <img
                  className="star-icon"
                  alt="plus"
                  src="https://cdn-icons-png.flaticon.com/128/3524/3524388.png"
                  onClick={() => {
                    addStars(movies);
                  }}
                />
                <span>{stars}</span>
              </div>
              {/* we can add events on className and innertext*/}
              {/* {fav ? (
                  <button className="fav-btn" onClick={handelFav}>Favourits</button>
                ) : (
                  <button className="unfav-btn"  onClick={handelFav}>Unfavourits</button>
                )}*/}

              <button
                className={fav ? "fav-btn" : "unfav-btn"}
                onClick={() => {
                  favItem(movies);
                }}
              >
                {" "}
                {fav ? "Favourits" : "Unfavourits"}
              </button>

              <button
                className={cart ? "cart-btn" : "rem-btn"}
                onClick={() => {
                  addCart(movies);
                }}
              >
                {cart ? "Add cart" : "Remove"}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default MovieCard;
