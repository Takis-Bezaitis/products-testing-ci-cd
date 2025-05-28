import { useSelector } from "react-redux";
import type { RootState } from "../../store/store";
import { Link } from "react-router";

const AdminHomePage = () => {
  const isLoggedIn = useSelector((state: RootState) => state.auth.isLoggedIn)
  console.log("ADMIN HOME PAGE")
  return (
    <div>
      <h1>AdminHomePage</h1>
      {!isLoggedIn ? 
        <div>You are not authorized to visit this page.</div> : 
        <Link to='/admin/products'>Products</Link>}
    </div>
  )
}

export default AdminHomePage;