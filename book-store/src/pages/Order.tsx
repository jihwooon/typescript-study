import {styled} from "styled-components";
import {useLocation} from "react-router-dom";
import Title from "../components/common/Title";
import CartSummary from "../components/cart/CartSummary";
import Button from "../components/common/Button";
import InputText from "../components/common/InputText";
import {useForm} from "react-hook-form";
import {Delivery, OrderSheet} from "../models/order.model";

interface DeliveryForm extends Delivery {
    addressDetail: string;
}

function Order() {
    const location = useLocation();
    const orderDataFromCart = location.state;
    const { totalQuantity, totalPrice, firstBookTitle} =  orderDataFromCart;
    const { register, handleSubmit, formState: { errors } } = useForm<DeliveryForm>()

    const handlePlay = (data: DeliveryForm) => {
        const orderData: OrderSheet = {
            ...orderDataFromCart,
            delivery: {
                ...data,
                address: `${data.address} ${data.addressDetail}`
            }
        }

        console.log(orderData)
    }

    return (
        <>
            <Title size="large">주문서 작성</Title>
            <OrderStyle>
                <div className="content">
                    <div className="order-info">
                        <Title size="medium" color="text">배송 정보</Title>
                        <form className="delivery">
                            <fieldset>
                                <label>주소</label>
                                <div className="input">
                                    <InputText inputType="text" {...register("address", { required: true})}/>
                                </div>
                                <Button size="medium" scheme="normal">주소 찾기</Button>
                            </fieldset>
                            {errors.address && <p className="error-text">주소를 입력해 주세요</p>}
                            <fieldset>
                                <label>상세 주소</label>
                                <div className="input">
                                    <InputText inputType="text" {...register("addressDetail", { required: true})}/>
                                </div>
                            </fieldset>
                            {errors.addressDetail && <p className="error-text">상세 주소를 입력해 주세요</p>}
                            <fieldset>
                                <label>수령인</label>
                                <div className="input">
                                    <InputText inputType="text" {...register("receiver", { required: true})}/>
                                </div>
                            </fieldset>
                            {errors.receiver && <p className="error-text">수령인을 입력해 주세요</p>}
                            <fieldset>
                                <label>전화번호</label>
                                <div className="input">
                                    <InputText inputType="text" {...register("contact", { required: true})}/>
                                </div>
                            </fieldset>
                            {errors.contact && <p className="error-text">전화번호를 입력해 주세요</p>}
                        </form>
                    </div>
                    <div className="order-info">
                        <Title size="medium" color="text">주문 상품</Title>
                        <strong>{firstBookTitle} 등 총 {totalQuantity} 권</strong>
                    </div>
                </div>
                <div className="summary">
                    <CartSummary totalQuantity={totalQuantity} totalPrice={totalPrice}/>
                    <Button size="large" scheme="primary" onClick={handleSubmit(handlePlay)}>결제 하기</Button>
                </div>
            </OrderStyle>
        </>
    )
}

const OrderStyle = styled.div`
    display: flex;
    gap: 24px;
    justify-content: space-between;
    padding: 24px 0 0 0;

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 12px;
    }

    .summary {
        display: flex;
        flex-direction: column;
        gap: 24px;
    }
    
    .order-info {
        h1 {
            padding: 0 0 24px 0;
        }
        
        border: 1px solid ${({ theme }) => theme.color.border};
        border-radius: ${({ theme }) => theme.borderRadius.default};
        padding: 12px;
    }
    
    .delivery {
        fieldset {
            border: 0;
            margin: 0;
            padding: 0 0 12px 0;
            display: flex;
            justify-content: start;
            gap: 8px;
            
            label {
                width: 80px;
            }
            
            .input {
                flex: 1;
                input {
                    width: 100%;
                }
            }
        }
    }
    
    .error-text {
        color: red;
        margin: 0;
        padding: 0 0 12px 0;
        text-align: right;
    }
`

export default Order;
