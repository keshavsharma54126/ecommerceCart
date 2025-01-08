import { Link, Outlet } from "react-router-dom"
import { FaShoppingCart } from "react-icons/fa" // Importing a cart icon from react-icons
import { useSelector } from "react-redux"
import { RootState } from "../store/store"

const layout = () => {
    const cartState = useSelector((state:RootState) => state.cart)
  return (
    <div>
      <nav className="bg-gray-800 p-4">
        <ul className="flex justify-around items-center">
          <li className="mx-2">
            <Link to="/" className="text-white hover:text-gray-400">Products</Link>
          </li>
          <li className="mx-2">
            <Link to="/" className="text-white hover:text-gray-400">Shop</Link>
          </li>
          <li className="mx-2">
            <a href="#" className="text-white hover:text-gray-400">Deals</a>
          </li>
          <li className="mx-2">
            <a href="#" className="text-white hover:text-gray-400">Contact</a>
          </li>
          <li className="mx-2">
            <Link to="/cart" className="text-white hover:text-gray-400 flex items-center">
              <FaShoppingCart className="text-2xl" />
              <span className="bg-red-500 text-white rounded-full w-10 h-6 flex items-center justify-center text-xs mb-4">{cartState.length}</span>
            </Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}

export default layout