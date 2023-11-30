import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js"
import { useEffect, useState } from "react"
import useAxiosPublic from "../../../../../Axios/useAxiosPublic"
import useAuth from "../../../../../Hooks/useAuth"
import { useLoaderData } from "react-router-dom"
import PaymentSuccess from "./PaymentSuccess"

function Cheakout() {
    const [paymentError, setPaymentError] = useState('')
    const [clientSecret, setCliendSecret] = useState('')
    const [totalPrice, setTotalPrice] = useState(0)
    const [isOpen, setIsOpen] = useState(false);
    const [succeeded, setSucceeded] = useState('')
    const stripe = useStripe()
    const elements = useElements()
    const axiosPublic = useAxiosPublic()
    const { users } = useAuth()
    const parcel = useLoaderData()
    //Get data and total price

    if (!totalPrice) {

        const Price = parcel?.reduce((preTotalPrice, newPrice) => preTotalPrice + parseFloat(newPrice?.price), 0)
        setTotalPrice(Price)
    }

    //payment data posting to server
    useEffect(() => {
        axiosPublic.post('/create-payment-intent', { totalPrice })
            .then(res => {
                setCliendSecret(res.data.clientSecret)
            })

    }, [axiosPublic, totalPrice])


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return
        }
        const card = elements.getElement(CardElement)
        if (card === null) {
            return
        }

        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card
        })

        if (error) {
            console.log('payment error', error)
            setPaymentError(error.message)
        }
        else {
            console.log('paymentMethod', paymentMethod)
            setPaymentError('')
        }
        //confirm card payment 
        const { error: confirmError, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: card,
                billing_details: {
                    email: users?.email || 'anonymus',
                    name: users?.displayName || 'anonymus'
                }
            }
        })

        if (confirmError) {
            setPaymentError(confirmError)
        }
        else {
            console.log('payment intent', paymentIntent)
            if (paymentIntent.status === 'succeeded') {
                setSucceeded(paymentIntent.id)
            }
        }

    }

    //toggle modal
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };
    return (
        <form onSubmit={handleSubmit} className="my-10 w-8/12 bg-[#fefae0] p-10  mx-auto">
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#d4a373',
                            '::placeholder': {
                                color: '#d4a373',
                            },
                        },
                        invalid: {
                            color: '#d4a373',
                        },
                    },
                }}
            />
            <div>
                <div
                    onClick={() => {
                        toggleModal();
                    }} className=""
                >
                    <button type="submit" disabled={!stripe || !clientSecret} className="px-2 py-1 text-white transition-colors duration-300 transform bg-orange-500 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600 my-5">
                        Pay
                    </button>
                </div>
                {isOpen && (
                    <div className="fixed top-0 left-0 z-50 w-full h-full flex items-center justify-center">
                        <div className="absolute w-full h-full bg-gray-900 opacity-50"></div>
                        <div className="bg-[#ccd5ae] p-6 rounded-lg z-50 lg:w-8/12 w-full">
                            <div className="flex justify-end">
                                <button className="text-gray-500 hover:text-gray-700 text-2xl" onClick={toggleModal}>
                                    X
                                </button>
                            </div>
                            <div className="mt-4">
                                <PaymentSuccess />
                            </div>
                        </div>
                    </div>
                )}
            </div>

            {
                paymentError ? <p className="text-red-500">Error: {paymentError}</p> : ''
            }
            {
                succeeded ? <p className="text-green-600">Transation Id: {succeeded}</p> : ''
            }
        </form>
    )
}

export default Cheakout