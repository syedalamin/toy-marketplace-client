import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import MyToy from "./MyToy";
import Swal from "sweetalert2";
import useTitle from "../../hooks/useTitle";

const MyToys = () => {
    const { user, } = useContext(AuthContext);
    const [myToys, setMyToys] = useState([]);
    useTitle('My Toys')
    const url = `https://action-figure-toys-server-beryl.vercel.app/toys?email=${user?.email}`;

    useEffect(() => {
        fetch(url)
            .then(res => res.json())
            .then(data => setMyToys(data))
    }, [url]);

    const handleDeleted = id => {

        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`https://action-figure-toys-server-beryl.vercel.app/toys/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount > 0) {
                            const remaining = myToys.filter(myToy => myToy._id !== id);
                            setMyToys(remaining)
                        }
                    })
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
                        <th>Update</th>
                        <th>Delete</th>
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