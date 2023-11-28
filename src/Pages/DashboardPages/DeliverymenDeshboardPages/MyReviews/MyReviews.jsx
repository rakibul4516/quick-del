import StarRatings from "react-star-ratings";
import useReviews from "../../../../Hooks/useReviews";
import useUsers from "../../../../Hooks/useUsers";

const MyReviews = () => {
    const users = useUsers()
        //get array length
        const id = users?users.data?.map(arr => arr?._id) 
        : ''; 
    const { data } = useReviews(id)
    return (
        <section className="my-5 dark:bg-gray-800 dark:text-gray-100">
            <div className=" flex flex-col items-center mx-auto mb-7 md:p-5 md:px-8">
                <h1 className="p-4 text-4xl font-semibold leadi text-center">My Reviews</h1>
            </div>
            <div className="grid lg:grid-cols-2 grid-cols-1 items-center justify-center mx-auto  lg:justify-evenly lg:px-10">
                {
                    data?.map(review => (
                        <div key={review?._id} className="flex flex-col mx-4 my-6 shadow-lg">
                            <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-900">
                                <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-100">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="w-8 h-8 dark:text-violet-400">
                                        <path d="M232,246.857V16H16V416H54.4ZM48,48H200V233.143L48,377.905Z"></path>
                                        <path d="M280,416h38.4L496,246.857V16H280ZM312,48H464V233.143L312,377.905Z"></path>
                                    </svg>{review?.feedback}
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" fill="currentColor" className="absolute right-0 w-8 h-8 dark:text-violet-400">
                                        <path d="M280,185.143V416H496V16H457.6ZM464,384H312V198.857L464,54.1Z"></path>
                                        <path d="M232,16H193.6L16,185.143V416H232ZM200,384H48V198.857L200,54.1Z"></path>
                                    </svg>
                                </p>
                            </div>
                            <div className="flex flex-col items-center justify-center pt-8 pb-3 rounded-b-lg dark:bg-violet-400 dark:text-gray-900">
                                <img src={review?.image} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full dark:bg-gray-500" />
                                <p className="text-xl font-semibold ">{review?.name}</p>

                            </div>
                            <div className="flex justify-between items-center w-8/12 mx-auto pb-4">
                                <div className="">
                                    <StarRatings
                                        rating={review?.rating}
                                        starRatedColor="blue"
                                        numberOfStars={5}
                                        name='rating'
                                        starDimension='20'
                                        starSpacing='3px'
                                    />
                                </div>
                                <p className="text-sm uppercase">{review?.date ? review?.date : 'No data'}</p>
                            </div>
                        </div>
                    ))
                }

            </div>
        </section>
    );
};

export default MyReviews;