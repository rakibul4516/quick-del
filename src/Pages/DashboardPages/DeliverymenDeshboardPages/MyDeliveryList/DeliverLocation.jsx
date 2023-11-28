import useAllusers from "../../../../Hooks/useAllusers";
import PropTypes from 'prop-types';

const DeliverLocation = () => {
    const {data} = useAllusers('deliverymen')
    console.log(data)
    return (
        <div className="w-full ">
            <fieldset className="lg:p-6 rounded-md shadow-sm dark:bg-gray-900 lg:w-10/12 w-11/12 mx-auto">
                <div className="w-full">
                </div>
            </fieldset>
        </div>
    );
};

export default DeliverLocation;

