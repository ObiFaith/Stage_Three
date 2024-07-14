import { useParams } from "react-router-dom"

const Product = () => {
  const { id } = useParams()
	//const { state: { products } } = CartState()
  const products = JSON.parse(localStorage.getItem('products'));
  const product = products.find(prod => prod.id === id)
  return (
    <div>Product</div>
  )
}

export default Product