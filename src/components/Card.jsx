import { cart, current, wishlist, new_img } from "../assets"
import { useEffect, useState } from "react"
import ApiHandler from "../hooks/ApiHandler"
import { CartState } from "../data/Context"
import { Link } from "react-router-dom"

const Card = ({id, img, name, price, available_quantity, url_slug}) => {
  const { getProdExtraInfo } = ApiHandler()
  const [colors, setColors] = useState([])
  const [isNew, setNew] = useState(false)
  const { dispatch } = CartState()
  const [isProdInCart, setProdInCart] = useState(false)
  const [extraInfo, setExtraInfo] = useState({});

  /* Get extra info for all product */
  useEffect(() => {
    const fetchExtraInfo = async () => {
      const extraInfo = await getProdExtraInfo(id)
      setExtraInfo(extraInfo)
    }

    fetchExtraInfo()
  }, [])

  useEffect(() => {
    if (extraInfo.colors) setColors(JSON.parse(extraInfo.colors))
    if (extraInfo.isNew) setNew(JSON.parse(extraInfo.isNew.toLowerCase()))
  }, [extraInfo])

  const addToCart = (product) => {
    if (!isProdInCart) {
      dispatch({ type: 'ADD_TO_CART', payload: product });
      setProdInCart(!isProdInCart)
    }
  };

  return (
    <div className="border grid gap-6 border-[#BAE2E1] rounded-[32px] p-4">
      <div className="relative">
        <img className="w-full" src={`https://api.timbu.cloud/images/${img}`} alt={url_slug} />
        {isNew && <img className="absolute -top-2 -left-2" src={new_img} alt='new product'/>}
      </div>
      <div className="grid gap-1">
        <h1 className="lg:text-xl text-lg text-green-500">${price}</h1>
        <div className="text-red-600">
          <div className="flex justify-between items-center">
            <Link to={`/products/${id}`} className="hover:underline hover:underline-offset-2">{name}</Link>
            <img src={wishlist} alt="add to wishlist" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img src={current} alt="current" />
              <p>{available_quantity} pieces available</p>
            </div>
            <img className="cursor-pointer" onClick={() => addToCart({id, img, name, price, available_quantity, url_slug, colors, isNew, qty: 1})} src={cart} alt="add to cart" />
          </div>
        </div>
      </div>
      {colors && (
        <div className="flex gap-2 items-center">
          {colors.map((color) => (
            <div
              style={{ backgroundColor: `${color}` }}
              key={color}
              className="p-2.5 shadow rounded-full"
            ></div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Card