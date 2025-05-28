import { useDispatch } from "react-redux";
import type { AppDispatch } from "../store/store";
import { setUserStatus } from "../features/auth/authSlice";

const Logout = () => {
  const dispatch = useDispatch<AppDispatch>();

  const handleUserStatusFalse = () => {
    localStorage.removeItem('pr-mosh-test');
    dispatch(setUserStatus(false));
  }

  return (
    <div className="text-xl cursor-pointer" onClick={handleUserStatusFalse}>
        Logout
    </div>
  )
}

export default Logout