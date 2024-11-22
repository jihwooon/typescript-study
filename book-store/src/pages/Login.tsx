import {useForm} from "react-hook-form"
import Title from "../components/common/Title";
import {styled} from "styled-components";
import InputText from "../components/common/InputText";
import Button from "../components/common/Button";
import {useAuth} from "../hook/useAuth";

export interface LoginProps {
    email: string;
    password: string;
}

function Login() {
    const {register, handleSubmit, formState: {errors}} = useForm<LoginProps>()
    const { userLogin } = useAuth()

    const onSubmit = (data: LoginProps) => {
        return userLogin(data)
    }

    return (
        <>
            <Title size="large">로그인</Title>
            <LoginStyle>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <fieldset>
                        <InputText placeholder="이메일"
                                   inputType="email"
                                   {...register("email", {required: true})}
                        />
                        {errors.email && <p className="error-text">이메일을 입력해주세요</p>}
                    </fieldset>
                    <fieldset>
                        <InputText placeholder="비밀번호"
                                   inputType="password"
                                   {...register("password", {required: true})}
                        />
                        {errors.password && <p className="error-text">패스워드를 입력해주세요</p>}
                    </fieldset>
                    <fieldset>
                        <Button type="submit" size="medium" scheme="primary">로그인</Button>
                    </fieldset>
                </form>
            </LoginStyle>
        </>
    )
}

const LoginStyle = styled.div`
    max-width: ${({theme}) => theme.layout.width.small};
    margin: 80px auto;

    fildset {
        border: 0;
        padding: 0 0 8px 0;

        .error-text {
            color: red;
        }
    }

    input {
        width: 100%;
    }

    button {
        width: 100%;
    }

    .info {
        text-align: center;
        padding: 16px 0 0 0;
    }
`

export default Login;
