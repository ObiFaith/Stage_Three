import { current, del, minus, new_img, plus } from '../assets'
import { ProdColors } from '..'

const CartList = ({img, name, price, available, colors, isNew, qty}) => {
  return (
    <div>
      <div className="lg:grid flex gap-5 lg:grid-cols-5 md:gap-10 lg:gap-20">
        <div className="relative lg:border border-[#BAE2E1] rounded-[32px] lg:p-4">
          <img src={img} alt={img.split('/').pop().replace('.png', '')} />
          {isNew && <img className="absolute -top-2 -left-2" src={new_img} alt='new product'/>}
        </div>
        <div className="lg:col-span-4 max-lg:w-full max-sm:w-auto grid lg:grid-cols-4">
          <div className="flex md:gap-4 max-sm:flex-col justify-between col-span-2 sm:items-center">
            <div className="grid gap-2.5">
              <div className="text-red-600">
                <p>{name}</p>
                <div className="flex gap-2">
                  <img src={current} alt="current" />
                  <p>{available} pieces available</p>
                </div>
              </div>
              <ProdColors colors={colors} className='max-lg:hidden' />
            </div>
            <div className="flex items-center max-sm:justify-center max-md:my-2 gap-4 sm:gap-6 lg:gap-x-10 border border-green-600 py-1 px-2.5 rounded-[20px]">
              <div className='cursor-pointer'><img src={minus} alt="sub" /></div>
              <span className='text-lg font-bold text-red-400'>{qty}</span>
              <div className='cursor-pointer'><img src={plus} alt="add" /></div>
            </div>
          </div>
          <div className="flex lg:*:ms-20 justify-between lg:justify-around col-span-2 items-center">
            <div className="flex gap-2">
              <ProdColors colors={colors} className='lg:hidden' />
              <h3 className='lg:text-xl text-lg text-green-500'>${price}</h3>
            </div>
            <div className="flex justify-between items-center gap-4">
              <h3 className='max-lg:hidden lg:text-xl text-lg text-green-500'>${price * qty}</h3>
              <div className='cursor-pointer'><img src={del} alt="del" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CartList