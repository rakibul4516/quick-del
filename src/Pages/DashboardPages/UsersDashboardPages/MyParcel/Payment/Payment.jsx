import { Elements } from "@stripe/react-stripe-js"
import { loadStripe } from "@stripe/stripe-js"
import Cheakout from "./Cheakout"


const stripePromises = loadStripe(import.meta.env.VITE_STRIPE_KEY)
const Payment = () => {
  return (
    <Elements stripe={stripePromises}>
        <Cheakout></Cheakout>
    </Elements>
  )
}

export default Payment