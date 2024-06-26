import AboutUs from "../Home.jsx/AboutUs";
import Banner from "../Home.jsx/Banner";
import OurClients from "../Home.jsx/OurClients";
import OurTeam from "../Home.jsx/OurTeam";
import Services from "../Home.jsx/Services";
import Testimonial from "../Home.jsx/Testimonial";
import Thematic from "../Home.jsx/Thematic";
import TrackRecorde from "../Home.jsx/TrackRecorde";
 

 

const Home = () => {
    return (
        <div className="space-y-52  px-10">
            <Banner></Banner>
            <AboutUs></AboutUs>
            <Services></Services>
            <Thematic></Thematic>
            <TrackRecorde></TrackRecorde>
            <OurTeam></OurTeam>
            <OurClients></OurClients>
            <Testimonial></Testimonial>
        </div>
    );
};

export default Home;