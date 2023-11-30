import Confetti from "react-confetti";

const PaymentSuccess = () => {

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="lg:w-10/12 w-11/12 mx-auto">
                <div className="rounded-md shadow-sm bg-white dark:bg-gray-900 p-6 lg:p-8">
                    <div className="w-full text-4xl font-semibold taxt-center text-green-600">
                        <Confetti
                            
                        />
                        Payment Successfully Added
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PaymentSuccess;
