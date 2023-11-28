import Banner from "../Banner/Banner";
import Features from "../Features/Features";
import OurStatistics from "../OurStatistics/OurStatistics";
import TopSeller from "../TopSeller/TopSeller";

const Home = () => {
    return (
        <div>
            <div>
                <Banner/>
                <Features/>
                <OurStatistics/>
                <TopSeller/>
            </div>
        </div>
    );
};

export default Home;