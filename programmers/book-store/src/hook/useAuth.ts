import {useAuthStore} from "../store/AuthStore";
import {LoginProps} from "../pages/Login";
import {login, resetRequest, signup} from "../api/auth.api";
import {useNavigate} from "react-router-dom";
import {useAlert} from "./useAlert";
import {SignupProps} from "../pages/Signup";
import {useState} from "react";

export const useAuth = () => {
    const { showAlert } = useAlert();
    const { storeLogin } = useAuthStore()
    const navigate = useNavigate();

    const userLogin = (data: LoginProps) => {
        login(data).then((res) => {

            storeLogin(res.token);

            showAlert("로그인 완료되었습니다.")
            navigate("/")
        }, (error) => {
            showAlert("로그인에 실패했습니다.")
        })
    }

    const userSignup = (data: SignupProps) => {
        signup(data).then((res) => {
            showAlert("회원가입이 완료 되었습니다.")
            navigate("/login")
        });
    }

    const userResetPassword = (data: SignupProps) => {
            showAlert("비밀번호가 초기화되었습니다.")
            navigate("/login")
    }

    const [resetRequested, setResetRequested] = useState(false)

    const userResetRequest = (data: SignupProps) => {
        resetRequest(data).then(() => {
            setResetRequested(true);
        })
    }

    return { userLogin, userSignup, userResetPassword, userResetRequest, resetRequested }
}
