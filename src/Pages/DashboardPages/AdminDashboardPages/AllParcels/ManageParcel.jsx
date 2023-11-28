import useAllusers from "../../../../Hooks/useAllusers";
import PropTypes from 'prop-types';

const ManageParcel = ({handleFormData}) => {
    const {data} = useAllusers('deliverymen')
    return (
        <form onSubmit={handleFormData} className="w-full ">
            <fieldset className="lg:p-6 rounded-md shadow-sm dark:bg-gray-900 lg:w-10/12 w-11/12 mx-auto">
                <div className="w-full">
                    <div className="grid lg:grid-cols-2 grid-cols-1 items-center gap-2">
                        <div className="">
                            <select name="deliverymen" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                                <option selected>Choose a Deliverymen</option>
                                {
                                    data?.map(user =>(
                                        <option key={user._id} value={user._id}>{user.userName}</option>
                                    ))
                                }
                            </select>
                        </div>
                        <div className="">
                            <input type="date" name="date" className="block w-full p-2 mb-6 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                            </input>
                        </div>
                    </div>
                    <div className="flex justify-center items-center">
                        <button type="submit" className="px-8 py-3 font-semibold rounded bg-[#ffb703] dark:bg-gray-100 dark:text-gray-800">Assign</button>
                    </div>
                </div>
            </fieldset>
        </form>
    );
};

ManageParcel.propTypes = {
    handleFormData:PropTypes.func,
};
export default ManageParcel;

