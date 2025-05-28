import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { setUserStatus } from "../features/auth/authSlice";

const Login = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleUserStatusTrue = () => {
    localStorage.setItem('pr-mosh-test', 'true')
    dispatch(setUserStatus(true));
  }

  return (
    <div className="text-xl cursor-pointer" onClick={handleUserStatusTrue}>
        Login
    </div>
  )
}

export default Login