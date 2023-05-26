import Banner from "../Banner/Banner";
import Gallery from "../Gallery/Gallery";
import NewCollection from "../NewCollection/NewCollection";


const Home = () => {
    return (
        <div className="mx-auto w-10/12">
            <Banner></Banner>
             <Gallery></Gallery>

            <NewCollection></NewCollection>
        </div>
    );
};

export default Home;