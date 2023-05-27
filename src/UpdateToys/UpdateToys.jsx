import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import useTitle from "../hooks/useTitle";


const UpdateToys = () => {
    useTitle('Update Toys');
    const coffee = useLoaderData();
    const {_id, price, quantity, description } = coffee;

    const handleUpdated = event => {
        event.preventDefault();

        const form = event.target;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const description = form.description.value;

        const toysUpdated = {
            quantity,
            price,
            description,
        }

        fetch(`https://action-figure-toys-server-beryl.vercel.app/toys/${_id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toysUpdated)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.modifiedCount > 0) {
                    Swal.fire({

                        icon: 'success',
                        title: 'A toy has been successfully Updated',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset();
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'A toy was not successfully Updated',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="w-10/12 mx-auto py-10">
            <div>
                <h2 className="text-center text-4xl font-bold pb-10">Update <span className="text-teal-600">Toy</span></h2>
            </div>
            <form onSubmit={handleUpdated} >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" defaultValue={quantity} name="quantity" placeholder="Available quantity" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" defaultValue={price} name="price" placeholder="Price" className="input input-bordered" required />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" defaultValue={description} name="description" placeholder="Detail description" className="input input-lg w-full input-bordered" required />
                </div>
                <div className="py-5 ">
                    <input type="submit" className="btn bg-teal-600 w-full border-0 hover:bg-teal-800" value="Add Toys" />
                </div>
            </form>
        </div>
    );
};

export default UpdateToys;