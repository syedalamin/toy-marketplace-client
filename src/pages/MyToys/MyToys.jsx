import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToy from "./MyToy";
import Swal from "sweetalert2";

const MyToys = () => {
    const { user, } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    const url = `http://localhost:5000/toys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);

    const handleDeleted = id => {

        fetch(`http://localhost:5000/toys/${id}`, {
            method: 'DELETE'

        })
            .then(res => res.json())
            .then(data => {
                if (data.deletedCount > 0) {
                    const remaining = myToys.filter(myToy => myToy._id !== id);
                    setMyToys(remaining)
                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }
            })


    }

    return (
        <div className="w-10/12 mx-auto py-10">
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
                            myToys.map(myToy => <MyToy
                                key={myToy._id}
                                myToy={myToy}
                                handleDeleted={handleDeleted}
                            ></MyToy>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyToys;