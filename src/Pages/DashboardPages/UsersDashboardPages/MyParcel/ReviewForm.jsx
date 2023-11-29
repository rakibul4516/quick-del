import useAllusers from "../../../../Hooks/useAllusers";
import PropTypes from 'prop-types';
import useAuth from "../../../../Hooks/useAuth";
import useAxiosPublic from "../../../../Axios/useAxiosPublic";
import { toast } from "react-toastify";

const ReviewForm = ({ deliverymen }) => {
    console.log(deliverymen)
    const { users } = useAuth()
    const axiosPublic = useAxiosPublic()

    //get total reviews
    const { data } = useAllusers('deliverymen')
    console.log(data)
    const arrayId = data?.filter(items => items._id === deliverymen)
    console.log(arrayId)

    // const reviews = totalReviewArray[0];

    //Auto generate date
    const currentDate = new Date();

    const day = currentDate.getDate();
    const month = currentDate.getMonth() + 1;
    const year = currentDate.getFullYear();

    const padWithZero = (num) => {
        return num.toString().padStart(2, '0');
    };
    const date = `${year}-${padWithZero(month)}-${padWithZero(day)}`;

    const handleReviewForm = (event) => {
        event.preventDefault();
        const form = event.target;
        const reviewData = {
            name: form.name.value,
            email: form.email.value,
            rating: parseFloat(form.rating.value),
            deliverymenId: deliverymen,
            feedback: form.feedback.value,
            image: users?.photoURL,
            date:date,
        }


        axiosPublic.post('/reviews', reviewData)
            .then(res => {
                if (res?.data?.insertedId) {
                    return toast("Feedback Submited.Thank You")
                }
            }).catch(err => {
                console.log(err)
            })
    }
    return (
        <form onSubmit={handleReviewForm} className="w-full ">
            <fieldset className="lg:p-6 rounded-md shadow-sm dark:bg-gray-900 lg:w-10/12 w-11/12 mx-auto">
                <div className="w-full">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-2">
                        <div className="flex justify-start flex-col items-start">
                            <label className="text-sm px-2 text-gray-900">Your Name</label>
                            <input type='text' name="name" defaultValue={users?.displayName} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly />
                        </div>
                        <div className="flex justify-start flex-col items-start">
                            <label className="text-sm px-2 text-gray-900">Your email</label>
                            <input type="text" name="email" defaultValue={users?.email} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly>
                            </input>
                        </div>
                    </div>
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-2">
                        <div className="flex justify-start flex-col items-start">
                            <label className="text-sm px-2 text-gray-900">Rating of 5</label>
                            <input type='text' name="rating" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" />
                        </div>
                        <div className="flex justify-start flex-col items-start">
                            <label className="text-sm px-2 text-gray-900">Delivery Men Id</label>
                            <input type="text" name="deliverymenId" defaultValue={deliverymen} className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" readOnly>
                            </input>
                        </div>
                    </div>
                    <div className="">
                        <div className="flex justify-start flex-col items-start">
                            <label className="text-sm px-2 text-gray-900">Write Your Feedback</label>
                            <input type="text" name="feedback" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="submit" className="px-8 py-3 font-semibold text-md rounded bg-[#ffb703] dark:bg-gray-100 dark:text-gray-800">Submit</button>
                    </div>
                </div>
            </fieldset>
        </form>
    );
};

ReviewForm.propTypes = {
    deliverymen: PropTypes.string,
};
export default ReviewForm;

