import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import Gallary from "../Gallary/Gallary";
import OurStatistics from "../OurStatistics/OurStatistics";
import TopSeller from "../TopSeller/TopSeller";
import WhyUs from "../WhyUs/WhyUs";

const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
                <Features/>
                <OurStatistics/>
                <TopSeller/>
                <WhyUs/>
                <Gallary/>
            </div>
        </div>
    );
};

export default Home;