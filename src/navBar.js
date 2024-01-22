import { Component } from "react";
import styled from "styled-components";

const Bar = styled.div`
  height: 70px;
  width: 100%;
  background: linear-gradient(170deg, blueviolet, white);
  display: flex;
  padding-top: 20px;
  box-shadow: 2px 2px 15px gray;
  justify-content: space-between;
`;

const Title = styled.div`
  font-size: 25px;
  color: white;
  padding-left: 20px;
`;

const Cart = styled.div`
  width: 100px;
  position: relative;
`;
const CartImg = styled.img`
  width: 50px;
  margin-right: 50px;
`;

const Count = styled.span`
  font-size: 15px;
  position: absolute;
  left: 35px;
  top: -5px;
  width: 20px;
  heigth: 20px;
  text-align: center;
  border-radius: 20px;
  background-color: ${(props) => props.color};
 
`;


class NavBar extends Component {
  render() {
    return (
      <>
        <Bar>
          <Title>Movie-App</Title>
          <Cart>
            <CartImg
              alt="shop"
              src="https://cdn-icons-png.flaticon.com/128/891/891462.png"
            />
            <Count color="yellow" >{this.props.cartCount}</Count>
          </Cart>
        </Bar>
      </>
    );
  }
}

export default NavBar;
