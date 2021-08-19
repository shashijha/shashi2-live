import React from "react";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";

import CustomButton from "../custom-button/custom-button.component";

import { selectCartItems } from "../../redux/cart/cart.selector";
import "./cart-dropdown.styles.scss";
import { toggleCartHidden } from "../../redux/cart/cart.actions";

import { createStructuredSelector } from "reselect";
import { withRouter } from "react-router-dom";
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <div className="cart-dropdown">
    <div className="cart-items">
      {cartItems.length ? (
        cartItems.map((item) => {
          return <CartItem key={item.id} item={item} />;
        })
      ) : (
        <span className="empty-message">Your cart is empty</span>
      )}
    </div>
    <CustomButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      Go to Checkout
    </CustomButton>
  </div>
);

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
