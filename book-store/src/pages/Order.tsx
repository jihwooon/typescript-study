import {styled} from "styled-components";
import {useLocation} from "react-router-dom";

function Order () {
    const location = useLocation();
    const orderDataFromCart = location.state;

    return (
        <OrderStyle>
            <h1>Order</h1>
        </OrderStyle>
    )
}

const OrderStyle = styled.div``

export default Order;
