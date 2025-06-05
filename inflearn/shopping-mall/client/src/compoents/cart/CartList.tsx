import { createRef, useRef, type SyntheticEvent } from "react";
import type { Cart } from "../../graphql/cart"
import CartItem from "./CartItem"

const CartList = ({ items } : {items?: Cart[]}) => {
    const formRef = useRef<HTMLFormElement>(null)

    const handleCheckboxChanged = (e: SyntheticEvent) => {
        if (!formRef.current) {
            return;
        }
        const targetInput = e.target as HTMLInputElement
        const data = new FormData(formRef.current)
        const selectedCount = data.getAll('select-item').length

        if (targetInput.classList.contains('select-all')) {
            const allChecked = targetInput.checked;
            checkboxRefs?.forEach((inputElem) => {
                inputElem.current!.checked = allChecked 
            })
        } else {
            const allChecked = (selectedCount == items?.length)
            formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked
        }
    }

    if (!Array.isArray(items)) {
        return null;
    }

    const checkboxRefs = items.map(() => createRef<HTMLInputElement>())

    return (
      <form ref={formRef} onChange={handleCheckboxChanged}>
        <label>
          <input className="select-all" name="select-all" type="checkbox"/>
          전체선택
        </label>
       <ul>
        {items.map((item, index) => <CartItem key={item.id} {...item} ref={checkboxRefs[index]}/>)}
       </ul>
      </form>
    )
}

export default CartList
