import { createRef, useEffect, useRef, useState, type SyntheticEvent } from "react";
import type { Cart } from "../../graphql/cart"
import CartItem from "./CartItem"
import { useRecoilState } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../willPay/willPay";
import { useNavigate } from "react-router";

const CartList = ({ items } : {items?: Cart[]}) => {
    const formRef = useRef<HTMLFormElement>(null)
    const [checkedCartData ,setCheckedCartData] = useRecoilState(checkedCartState)
    const [formData, setFormData] = useState<FormData>()
    const navigate = useNavigate();

    useEffect(() => {
        checkedCartData.forEach((item) => {
          const itemRef = checkboxRefs.find(ref => ref.current!.dataset.id === item.id)
          if (itemRef) {
            itemRef.current!.checked = true
          }
        })
        setAllCheckedFromItems()
    },[])

    useEffect(() => {
        const checkedItems = checkboxRefs.reduce<Cart[]>((acc, ref, i) => {
            if (ref.current!.checked && items?.[i]) {
                acc.push(items[i]);
            }
            return acc;
        }, []);

        setCheckedCartData(checkedItems)
    },[items, formData])

    const setAllCheckedFromItems = () => {
        if (!formRef.current) {
            return;
        }
        const data = new FormData(formRef.current)
        const selectedCount = data.getAll('select-item').length
        const allChecked = (selectedCount == items?.length)
        formRef.current.querySelector<HTMLInputElement>('.select-all')!.checked = allChecked 
    }

    const setItemsCheckedFromAll = (targetInput: HTMLInputElement) => {
        const allChecked = targetInput.checked;

        checkboxRefs?.forEach((inputElem) => {
            inputElem.current!.checked = allChecked 
        })
    }

    const handleCheckboxChanged = (e?: SyntheticEvent) => {
        if (!formRef.current) {
            return;
        }
        const targetInput = e?.target as HTMLInputElement

        if (targetInput && targetInput.classList.contains('select-all')) {
            setItemsCheckedFromAll(targetInput) 
        } else {
            setAllCheckedFromItems()
        }

        const data = new FormData(formRef.current)
        setFormData(data)
    }

    if (!Array.isArray(items)) {
        return null;
    }

    const checkboxRefs = items.map(() => createRef<HTMLInputElement>())


    const handleSubmit = () => {
        if (checkedCartData.length) {
            navigate("/payment")
        } else {
            alert("결제할 대상이 아닙니다.")
        }
    }

    return (
      <form ref={formRef} onChange={handleCheckboxChanged}>
        <label>
          <input className="select-all" name="select-all" type="checkbox"/>
          전체선택
        </label>
       <ul>
        {items.map((item, index) => <CartItem key={item.id} {...item} ref={checkboxRefs[index]}/>)}
       </ul>
       <WillPay submitTitle={"결제창으로"} handleSubmit={handleSubmit}/>
      </form>
    )
}

export default CartList
