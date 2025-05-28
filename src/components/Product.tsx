import type { ProductsType } from "../types/productsType"
import { useSelector, useDispatch } from "react-redux"
import type { RootState } from "../store/store"
import type { AppDispatch } from "../store/store"
import Button from "./Button"
import { addToCart, removeFromCart } from "../features/cart/cartSlice"

const Product = ({ product }: { product: ProductsType }) => {
  const cartProducts = useSelector((state:RootState) => state.cart.cartProducts);
  let productQuantity;

  if (cartProducts.length > 0) {
    const cartProduct = cartProducts.find((p) => p.id === product.id);
    productQuantity = cartProduct ? cartProduct.quantity : 0;
  }

  const dispatch = useDispatch<AppDispatch>();

  return (
    <div className="flex mb-2">
        <p className="w-60">{product.name}</p>
        <p className="w-30">$ {product.price}</p>
        
        {productQuantity ? 
          <div className="flex">
            <p onClick={() => dispatch(removeFromCart(product))}>
              <Button buttonText='-' color='bg-red-500' width='w-10' />
            </p>
            <p className="w-10 text-center">{productQuantity}</p>
            <p onClick={() => dispatch(addToCart(product))}>
              <Button buttonText='+' color='bg-green-500' width='w-10' />
            </p>
          </div> :
            <p onClick={() => dispatch(addToCart(product))}>
            <Button buttonText='Add to Cart' color='bg-sky-300' width='w-30' /></p>
        }
    </div>
  )
}

export default Product