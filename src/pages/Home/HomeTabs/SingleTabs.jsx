import { Link } from "react-router-dom";

const SingleTabs = ({ tabs }) => {
    console.log(tabs)
    const { _id, photo, name, price, rating } = tabs;
    return (
        <div className="mx-auto">
            <div className="card card-compact w-96 bg-teal-50 shadow-xl text-left p-5">
                <figure><img className="w-48 mx-auto h-80" src={photo} /></figure>
                <div className="card-body">
                    <h2 className="card-title font-bold">Name: {name}</h2>
                    <p className="text-xl font-semibold">Price: {price}</p>
                    <div className="flex justify-between items-center pt-3">
                        <div>
                            {rating}
                        </div>
                        <div className="card-actions">
                            <Link to={`/allToys/${_id}`}>
                                <button className="btn bg-teal-600  hover:bg-teal-800 border-0 btn-sm">Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleTabs;