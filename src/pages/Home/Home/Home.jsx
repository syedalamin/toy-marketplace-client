import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import HomeTabs from "../HomeTabs/HomeTabs";


import NewCollection from "../NewCollection/NewCollection";



const Home = () => {
    return (
        <div className="mx-auto w-10/12">
            <Banner></Banner>
            <Gallery></Gallery>
            <HomeTabs></HomeTabs>
            <NewCollection></NewCollection>
        </div>
    );
};

export default Home;