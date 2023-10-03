import React, { useEffect, useState } from "react";
import Table from "react-bootstrap/Table";
import { Container, Button } from "react-bootstrap";

import {
  incrementQuantity,
  decrementQuantity,
  removeFromCart,
  clearCart,
} from "../store/slices/Card";

import { useDispatch, useSelector } from "react-redux";

export default function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  console.log("Product Details:", cart);
  console.log("Quantity:", cart.count);

  // let [totalPrice, setTotalPrice] = useState(
  //   cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  // );
  // const updateTotal = () => {
  //   setTotalPrice(
  //     cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  //   );
  // };
  const [totalPrice, setTotalPrice] = useState(
    cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
  );

  // Update total price when cart items change
  useEffect(() => {
    setTotalPrice(
      cart.items.reduce((sum, item) => sum + item.quantity * item.price, 0)
    );
  }, [cart.items]);

  return (
    <Container className="py-5">
      <h1 className="py-5">Cart</h1>
      <Button variant="danger" onClick={() => dispatch(clearCart())}>
        clear cart
      </Button>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>title</th>
            <th>image</th>
            <th>Quantity</th>
            <th>price</th>
            <th>actions</th>
          </tr>
        </thead>
        <tbody>
          {cart.items.map((product, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{product.title}</td>
              <td>
                <img
                  src={product.thumbnail}
                  className="card-img-top"
                  alt="Product"
                  style={{ height: "100px", width: "100px" }}
                />
              </td>
              <td>
                <button className='btn btn-info mx-3' onClick={() => dispatch(incrementQuantity(product.id))}>
                  +
                </button>
                {product.quantity}
                <button className='btn btn-danger mx-3' onClick={() => dispatch(decrementQuantity(product.id))}>
                  -
                </button>
              </td>
              <td>{product.price}</td>
              <td>
                <Button
                  variant="danger"
                  onClick={() => dispatch(removeFromCart(product))}
                >
                  Delete
                </Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <hr />
      <h4>total Price:{totalPrice}$</h4>
    </Container>
  );
}
