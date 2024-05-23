import AboutUs from "../Home.jsx/AboutUs";
import Banner from "../Home.jsx/Banner";
import Services from "../Home.jsx/Services";

 

const Home = () => {
    return (
        <div className="py-4">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
        </div>
    );
};

export default Home;