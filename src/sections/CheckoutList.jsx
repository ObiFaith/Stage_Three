import { ProdColors } from ".."

const CheckoutList = ({img, name, price, colors, isNew, qty}) => {
  return (
    <div className="flex gap-6 items-center">
      <div className="relative w-1/3 lg:border border-[#BAE2E1] rounded-[32px] lg:p-4">
        <img src={img} alt={img.split('/').pop().replace('.png', '')} />
        {isNew && <img className="absolute -top-2 -left-2" src={new_img} alt='new product'/>}
      </div>
      <div className="w-2/3 flex justify-between gap-3 items-center">
        <div>
          <div className="text-red-600 pb-2.5">
            <p>{name}</p>
            <p className='text-sm'>Qty: {qty}</p>
          </div>
          <ProdColors colors={colors} />
        </div>
        <div>
          <h3 className='lg:text-xl text-lg text-green-500'>${price * qty}</h3>
          {qty > 1 && <p className="text-[#BFC5C4] text-start">${price} each</p>}
        </div>
      </div>
    </div>
  )
}

export default CheckoutList