import { Link } from "react-router"
import { useSelector } from "react-redux"
import type { RootState } from "../store/store"
import AuthStatus from "./AuthStatus";

const NavBar = () => {
  const cart = useSelector((state: RootState) => state.cart.cartItems);

  const links = [
    { label: '🏠', href:'/'},
    { label: 'Products', href:'/products'},
    { label: 'Playground', href:'/playground'},
    { label: 'Admin', href:'/admin'},
  ]

  return (
    <div className="flex bg-yellow-300 h-20 items-center">
        <ul className="flex text-xl">
            {links.map((link) => (
                <li key={link.href} className="mx-3">
                    <Link to={link.href}>
                        {link.label}
                    </Link>
                </li>
            ))}
        </ul>
        <p className="text-xl">🛒{cart}</p>
        <AuthStatus />
    </div>
  )
}

export default NavBar