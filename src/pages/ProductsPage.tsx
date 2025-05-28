import Product from "../components/Product";
import { useSelector } from "react-redux";
import type { RootState } from "../store/store";
//import { useGetProductsQuery } from "../features/products/productsApi";

const Products = () => {
  /*const {data: products, isLoading, isError } = useGetProductsQuery();
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error</p>*/
  const products = useSelector((state: RootState) => state.cart.products)
 
  return (
    <div>
      <p className="text-6xl">Products</p>
      {products?.map((product) => (
        <Product key={product.id} product={product}/>
      ))}
    </div>
  )
}

export default Products