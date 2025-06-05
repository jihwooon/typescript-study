import { useRecoilValue } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import CartItemData from "./CartItemData";
import { useNavigate } from "react-router";

const WillPay = () => {
    const navigate = useNavigate();
    const checkedItems = useRecoilValue(checkedCartState)
    const totalPrice = checkedItems.reduce((res, {price, amount}) => {
        res += price * amount
        return res;
    }, 0) 

    const handleSubmit = () => {
        if (checkedItems.length) {
            navigate("/payment")
        } else {
            alert("결제할 대상이 아닙니다.")
        }
    }

    return (
        <div className="cart-willpay">
         <ul>
          {checkedItems.map(({ imageUrl, price, title, amount, id}) => (
            <li>
              <CartItemData imageUrl={imageUrl} title={title} key={id} price={price}/>
              <p>수량: {amount}</p>
              <p>금액: {price * amount}</p>
            </li>
          ))}
         </ul> 
         <p>총 예상 금액: {totalPrice}</p>
         <button onClick={handleSubmit}>결제하기</button>
        </div>
    )
}

export default WillPay;
