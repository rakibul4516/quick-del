import Lottie from "lottie-react";
import pagenotfound from '../../../public/notfoundpage.json'
const ErrorPage = () => {
    return (
        <div className="h-96 w-10/12 mx-auto">
            <Lottie className="h-[100vh] w-10/12 mx-auto" animationData={pagenotfound} loop={true} />
        </div>
    );
};

export default ErrorPage;