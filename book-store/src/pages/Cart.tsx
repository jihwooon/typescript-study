import Title from "../components/common/Title";
import {styled} from "styled-components";
import CartItem from "../components/cart/CartItem";
import {useCart} from "../hook/useCart";
import {useState} from "react";
import {useAlert} from "../hook/useAlert";

function Cart() {
    const {carts, deleteCartItem} = useCart();
    const { showConfirm } = useAlert();
    const [checkedItems, setCheckedItems] = useState<number[]>([]);

    const handleCheckItem = (id: number) => {
        if (checkedItems.includes(id)) {
            setCheckedItems(checkedItems.filter((item) => item !== id))
        } else {
            setCheckedItems([
                ...checkedItems,
                id
            ])
        }
    }

    const handleItemDelete = (id: number) => {
        showConfirm("정말 삭제하시겠습니까?", () => {
            deleteCartItem(id)
        })
    }

    return (
        <>
            <Title size="large">장바구니</Title>
            <CartStyle>
                <div className="content">
                    {carts.map((cart) => (
                        <CartItem key={cart.id} cart={cart} checkedItems={checkedItems} onCheck={handleCheckItem} onDelete={handleItemDelete}/>
                    ))}
                </div>
                <div className="summary">

                </div>
            </CartStyle>
        </>

    )
}

const CartStyle = styled.div`

`

export default Cart;
