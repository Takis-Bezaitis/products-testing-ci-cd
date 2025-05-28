import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
import Login from "../pages/Login";
import Logout from "../pages/Logout";

const AuthStatus = () => {
  const login = useSelector((state: RootState) => state.auth.isLoggedIn);

  return (
    <div>
        {login === false ? <Login /> : <Logout />}
    </div>
  )
}

export default AuthStatus