import {styled} from "styled-components";
import {Cart} from "../../models/cart.model";
import Button from "../common/Button";
import Title from "../common/Title";
import {formatNumber} from "../../utils/format";
import CheckIconButton from "./CheckIcon";
import {useMemo} from "react";

interface Props {
    cart: Cart;
    checkedItems: number[];
    onCheck: (id: number) => void;
    onDelete: (id: number) => void;
}

function CartItem({ cart, checkedItems, onCheck, onDelete }: Props) {
    const isChecked = useMemo(() => {
        return checkedItems.includes(cart.id)
    }, [checkedItems, cart.id])

    const handleCheck = () => {
        onCheck(cart.id)
    }

    const handleDelete = () => {
        onDelete(cart.id)
    }

    return (
        <CartItemStyle>
            <div className="info">
                <div><CheckIconButton isChecked={isChecked} onCheck={handleCheck}/></div>
                <div>
                    <Title size="medium">{cart.title}</Title>
                </div>
                <p className="summary">{cart.summary}</p>
                <p className="price">{formatNumber(cart.price)} 원</p>
                <p className="quantity">{cart.quantity} 권</p>
            </div>
            <Button size="medium" scheme="normal" onClick={handleDelete}>장바구니 삭제</Button>
        </CartItemStyle>
    )
}

const CartItemStyle = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: start;
    border: 1px solid ${({theme}) => theme.color.border};
    padding: 12px;

    p {
        padding: 0 0 8px 0;
        margin: 0;
    }
`

export default CartItem;
