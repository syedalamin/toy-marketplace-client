import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import Swal from 'sweetalert2';
const AddAToy = () => {

    const { user } = useContext(AuthContext);

    const handleAddToys = event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const seller = form.seller.value;
        const email = form.email.value;
        const category = form.category.value;
        const quantity = form.quantity.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const description = form.description.value;

        const toys = {
            name,
            photo,
            seller,
            email,
            category,
            quantity,
            price,
            rating,
            description,
        }

        fetch('http://localhost:5000/toys', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(toys)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.insertedId) {
                    Swal.fire({

                        icon: 'success',
                        title: 'Your work has been saved',
                        showConfirmButton: false,
                        timer: 1500
                    });
                    form.reset()
                }
                else {
                    Swal.fire({
                        title: 'Error!',
                        text: 'Do you want to continue',
                        icon: 'error',
                        confirmButtonText: 'Cool'
                    })
                }
            })
    }

    return (
        <div className="w-10/12 mx-auto py-10">
            <div>
                <h2 className="text-center text-4xl font-bold pb-10">Add A <span className="text-teal-600">Toy</span></h2>
            </div>
            <form onSubmit={handleAddToys}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Name</span>
                        </label>
                        <input type="text" name="name" placeholder="Toy Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Toy Photo URL</span>
                        </label>
                        <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller Name</span>
                        </label>
                        <input type="text" name="seller" defaultValue={user?.displayName} placeholder="Seller Name" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Seller E-mail</span>
                        </label>
                        <input type="email" defaultValue={user?.email} name="email" placeholder="E-mail" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Sub Category</span>
                        </label>
                        <input type="text" name="category" placeholder="Sub Category" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Available quantity</span>
                        </label>
                        <input type="text" name="quantity" placeholder="Available quantity" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Price</span>
                        </label>
                        <input type="text" name="price" placeholder="Price" className="input input-bordered" />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Rating</span>
                        </label>
                        <input type="text" name="rating" placeholder="Rating" className="input input-bordered" />
                    </div>
                </div>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Detail description</span>
                    </label>
                    <input type="text" name="description" placeholder="Detail description" className="input input-lg w-full input-bordered" />
                </div>
                <div className="py-5 ">
                    <input type="submit" className="btn bg-teal-600 w-full border-0 hover:bg-teal-800" value="Add Toys" />
                </div>
            </form>
        </div>
    );
};

export default AddAToy;