import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeFromCart, incrementQuantity, decrementQuantity } from "../../store/slices/Card.js";

const Cart = () => {
  const cartItems = useSelector((state) => state.cart.items);
  const dispatch = useDispatch();

  return (
    <div>
      {cartItems.length === 0 ? (
        <p>Empty cart</p>
      ) : (
        <div>
          {cartItems.map((item) => (
            <div key={item.id}>
              <p>{item.name}</p>
              <p>Quantity: {item.quantity}</p>
              <button onClick={() => dispatch(incrementQuantity(item.id))}>
                +
              </button>
              <button onClick={() => dispatch(decrementQuantity(item.id))}>
                -
              </button>
              <button onClick={() => dispatch(removeFromCart(item.id))}>
                Remove
              </button>
            </div>
          ))}
          <p>Total Price: </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
