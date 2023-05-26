import { useEffect, useState } from "react";
import AllToysSingle from "./AllToysSingle";

const AllToys = () => {

    const [toys, setToys] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/toys')
            .then(res => res.json())
            .then(data => setToys(data))
    }, [])

    return (
        <div className=" w-10/12 mx-auto py-10">
            <div className="overflow-x-auto w-full ">
                <table className="table w-full">
                    {/* head */}
                    <thead>
                        <th>Name</th>
                        <th>Seller Name</th>
                        <th>Category</th>
                        <th>Quantity</th>
                        <th>Price</th>
                        <th>View Details</th>
                    </thead>
                    <tbody>
                        {
                            toys.map(toy => <AllToysSingle
                                key={toy._id}
                                toy={toy}
                            ></AllToysSingle>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default AllToys;