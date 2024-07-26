import { useLocation } from "react-router-dom";
import styled from "styled-components";

const Order = () => {
  const location = useLocation();
  const orderDataForm = location.state;

  return (
    <OrderStyle>
      <h1>Order</h1>
    </OrderStyle>
  );
};

const OrderStyle = styled.div``;

export default Order;
