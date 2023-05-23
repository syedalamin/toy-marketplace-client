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
        <div>
            <div className="overflow-x-auto w-full">
                <table className="table w-10/12 mx-auto">
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