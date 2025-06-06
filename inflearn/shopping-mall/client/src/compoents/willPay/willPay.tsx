import { useRecoilValue } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import CartItemData from "../cart/CartItemData";

const WillPay = ({ submitTitle, handleSubmit }: { submitTitle: string, handleSubmit: () => void}) => {
    const checkedItems = useRecoilValue(checkedCartState)
    const totalPrice = checkedItems.reduce((res, {price, amount}) => {
        res += price * amount
        return res;
    }, 0) 

    return (
        <div className="cart-willpay">
         <ul>
          {checkedItems.map(({ imageUrl, price, title, amount, id}) => (
            <li key={id}>
              <CartItemData imageUrl={imageUrl} title={title} price={price}/>
              <p>수량: {amount}</p>
              <p>금액: {price * amount}</p>
            </li>
          ))}
         </ul> 
         <p>총 예상 금액: {totalPrice}</p>
         <button onClick={handleSubmit}>{submitTitle}</button>
        </div>
    )
}

export default WillPay;
