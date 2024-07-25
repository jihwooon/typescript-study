import styled from "styled-components";
import Title from "../components/common/Title";
import CartItem from "../components/cart/CartItem";
import { useCart } from "../hooks/useCart";

const Cart = () => {
  const { carts } = useCart();

  return (
    <>
      <Title size="large">장바구니</Title>
      <CartStyle>
        <div className="content">
          {carts.map((item) => (
            <CartItem cart={item} />
          ))}
        </div>
        <div>summary</div>
      </CartStyle>
    </>
  );
};

const CartStyle = styled.div``;

export default Cart;
