import AboutUs from "../Home.jsx/AboutUs";
import Banner from "../Home.jsx/Banner";
import OurTeam from "../Home.jsx/OurTeam";
import Services from "../Home.jsx/Services";
import Testimonial from "../Home.jsx/Testimonial";

 

const Home = () => {
    return (
        <div className="py-4">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <OurTeam></OurTeam>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;