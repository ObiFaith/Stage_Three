import { Btn } from "./Buttons"

const CartSummary = ({ btn = false, shippingFee, className="justify-end", subTotal = '$4,500.00', total = '$4,050.00', discountAmt = '$450.00'}) => {
  return (
    <div className={`grid ${className}`}>
      <div className="flex gap-28 text-green-600">
        <div className="grid gap-y-3 text-base lg:text-lg">
          <p>Sub-total</p>
          <p>Discount</p>
          {shippingFee && <p>Shipping Fee</p>}
          <p>Total amount</p>
        </div>
        <div className="grid gap-y-3 text-lg lg:text-xl">
          <h3>{subTotal}</h3>
          <h3>{discountAmt}</h3>
          {shippingFee && <h3 className="line-through">{shippingFee}</h3>}
          <h3>{total}</h3>
        </div>
      </div>
      {btn && <div className="pt-14 text-center"><Btn name='Checkout' to='/checkout' /></div>}
    </div>
  )
}

export default CartSummary