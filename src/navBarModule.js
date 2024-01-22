import { Component } from "react";
import moduleStyle from "./navBar.module.css";

class NavBar extends Component {
  render() {
    return (
      <>
        <div className={moduleStyle.Bar}>
          <div className={moduleStyle.Title}>Movie-App</div>
          <div className={moduleStyle.Cart}>
            <img  className={moduleStyle.CartImg}
              alt="shop"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            />
            <span className={moduleStyle.Count}>3</span>
          </div>
        </div>
      </>
    );
  }
}

export default NavBar;
