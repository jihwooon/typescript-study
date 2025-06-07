import { useRecoilState } from "recoil";
import { checkedCartState } from "../../recoils/cart";
import WillPay from "../willPay/willPay";
import PaymentModal from "./PaymentModal";
import { useState } from "react";
import { useNavigate } from "react-router";
import { useMutation } from "@tanstack/react-query";
import { EXECUTE_PAY } from "../../graphql/payment";
import { graphqlFetcher } from "../../queryClient";

type PaymentInfo = string[]

const Payment = () => {
    const navigate = useNavigate()
    const [checkedCartData, setCheckedCartData] = useRecoilState(checkedCartState)
    const [modalShown, toggleModal] = useState<boolean>(false)
    const { mutate: executePay } = useMutation({
      mutationFn: (ids: PaymentInfo) => graphqlFetcher(EXECUTE_PAY, { ids })
    })

    const showModal = () => {
        toggleModal(true)
    }

    const proceed = () => {
      const ids = checkedCartData.map(({ id }) => id)
      executePay(ids, {
        onSuccess: () => {
          setCheckedCartData([])
          alert("결제 완료되었습니다.")
          navigate('/products', { replace: true})
        }
      })
    }

    const cancel = () => {
        toggleModal(false)
    }

    return (
      <div>
        <WillPay submitTitle={"결제하기"} handleSubmit={showModal}/>
        <PaymentModal show={modalShown} proceed={proceed} cancel={cancel}/>
      </div>
    )
}

export default Payment;
