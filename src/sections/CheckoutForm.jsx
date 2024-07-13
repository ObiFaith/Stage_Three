import { useState } from "react"
import { Btn } from ".."
import {visa, paypal, mastercard} from '../assets'

const CheckoutForm = () => {
  const [formData, setFormData] = useState({
    firstName: '', lastName: '', email: '', contact: '', cardNo: '', CVV: '',
    street: '', suiteNo: '', city: '', state: '', zipCode: '', expireDate: '',
  })

  const handleChange = e => {
    const {name, value} = e.target
    setFormData (prevFormData => ( {...prevFormData, [name]: value} ))
  }

  return (
    <form className="py-8 grid gap-4">
      <div className="flex max-sm:flex-col *:w-full gap-2.5 lg:gap-4">
        <div className="grid gap-2">
          <label className="text-green-500 text-base lg:text-lg" htmlFor="firstName">First name</label>
          <input name="firstName" onChange={handleChange} value={formData.firstName} placeholder="John" type="text" className="input" />
        </div>
        <div className="grid gap-2">
          <label className="text-green-500 text-base lg:text-lg" htmlFor="lastName">Last name</label>
          <input name="lastName" onChange={handleChange} value={formData.lastName} placeholder="Doe" type="text" className="input" />
        </div>
      </div>
      <div className="">
        <input name="email" onChange={handleChange} value={formData.email} placeholder="Email address" type="email" className="input" />
      </div>
      <div className="">
        <input name="contact" onChange={handleChange} value={formData.contact} placeholder="Contact number" inputMode="numeric" type="number" className="input" />
      </div>
      <p className="lg:text-lg text-green-500">Shipping address</p>
      <div className="">
        <input name="street" onChange={handleChange} value={formData.street} placeholder="Street address" type="text" className="input" />
      </div>
      <div className="">
        <input name="suiteNo" onChange={handleChange} value={formData.suiteNo} placeholder="Appartment/suite number" type="text" className="input" />
      </div>
      <div className="flex max-sm:flex-col *:w-full gap-2.5 lg:gap-4">
        <input name="city" onChange={handleChange} value={formData.city} placeholder="City" type="text" className="input" />
        <input name="state" onChange={handleChange} value={formData.state} placeholder="State" type="text" className="input" />
      </div>
      <div className="flex max-sm:flex-col *:w-full gap-2.5 lg:gap-4">
        <input name="zipCode" onChange={handleChange} value={formData.zipCode} placeholder="Zip code" type="text" className="input" />
        <div className=""></div>
      </div>
      <div className="flex items-start py-4 gap-3">
        <div className="max-sm:pt-1"><input type="checkbox" /></div>
        <p className="text-green-400">Save this shipping information</p>
      </div>
      <div className="flex max-sm:flex-col sm:items-center justify-between gap-4">
        <p className="text-green-500 text-base lg:text-lg">Pay with card</p>
        <div className="flex gap-4 items-center">
          {[visa, paypal, mastercard].map((icon, index) => (
            <div key={index} className="cursor-pointer">
              <img src={icon} alt={icon.split('/').pop().replace('.png', '')} />
            </div>
          ))}
        </div>
      </div>
      <div className="grid gap-4">
        <p className="text-green-500 text-base lg:text-lg">Card information</p>
        <div className="grid gap-4">
          <div className="">
            <input name="cardNo" onChange={handleChange} value={formData.cardNo} placeholder="Card number" inputMode="numeric" type="number" className="input" />
          </div>
          <div className="flex max-sm:flex-col *:w-full gap-2.5 lg:gap-4">
            <input name="expireDate" onChange={handleChange} value={formData.expireDate} placeholder="Expiration Date" type="text" className="input" />
            <input name="CVV" onChange={handleChange} value={formData.CVV} placeholder="CVV" type="text" className="input" />
          </div>
        </div>
      </div>
      <div className="flex items-start py-4 gap-3">
        <div className="max-sm:pt-1"><input type="checkbox" /></div>
        <p className="text-green-400">I agree to the Privacy policy and Terms and Conditons</p>
      </div>
      <div className="pt-10 text-center"><Btn name='Confirm payment' to='/thank-you' /></div>
    </form>
  )
}

export default CheckoutForm