//import { useGetProductsQuery } from "../../features/products/productsApi"
import { useSelector } from "react-redux"
import type { RootState } from "../../store/store"

const AdminProductListPage = () => {
  /*const {data: products, isLoading, isError} = useGetProductsQuery();
  if (isLoading) return <p>Loading...</p>
  if (isError) return <p>Error...</p>*/

  const products = useSelector((state: RootState) => state.cart.products);

  return (
    <div>
      <h1>AdminProductListPage</h1>
      {products?.map((product) => (
        <div key={product.id}>{product.name}</div>
      ))}
    </div>
  )
}

export default AdminProductListPage;