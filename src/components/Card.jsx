import { cart, current, wishlist, new_img } from "../assets"
import { toast, ToastContainer } from "react-toastify"
import { useEffect, useState } from "react"
import ApiHandler from "../hooks/ApiHandler"
import { CartState } from "../data/Context"

const Card = ({id, img, name, price, available_quantity, colors, isNew, url_slug}) => {
  const { state: {cart: prodInCart}, dispatch } = CartState()
  /* const [extraInfo, setExtraInfo] = useState({});

  Handle Notification when prod in cart */

  const { getProdExtraInfo } = ApiHandler()
  useEffect(() => {
    const extraInfo = getProdExtraInfo(id)
    console.log("extraInfo", extraInfo)
    /* const fetchExtraInfo = async () => {
      const info = await getProdExtraInfo(id)
      setExtraInfo(info)
    }

    fetchExtraInfo()
    console.log(extraInfo) */
  }, [])

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
            <p>{name}</p>
            <img src={wishlist} alt="add to wishlist" />
          </div>
          <div className="flex justify-between items-center">
            <div className="flex gap-2">
              <img src={current} alt="current" />
              <p>{available_quantity} pieces available</p>
            </div>
            <img onClick={() => dispatch({type: 'ADD_TO_CART'})} src={cart} alt="add to cart" />
          </div>
        </div>
      </div>
      {/* {extraInfo.colors && (
        <div className="flex gap-2 items-center">
          {extraInfo.colors.map((color) => (
            <div
              style={{ backgroundColor: `${color}` }}
              key={color}
              className="p-2.5 shadow rounded-full"
            ></div>
          ))}
        </div>
      )} */}
      <ToastContainer />
    </div>
  )
}

export default Card