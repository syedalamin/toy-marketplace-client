import { useLoaderData } from "react-router-dom";

const AllToysDetails = () => {
    const toyDetails = useLoaderData();
    const { photo, name, seller, email, price, rating, quantity, description } = toyDetails;
    return (
        <div className="w-10/12 mx-auto py-20">
            <div className="card grid sm:grid-cols-3 bg-base-100 shadow-xl border-4">
                <figure><img className="w-3/12 py-5" src={photo} /></figure>
                <div className="card-body col-span-2">
                    <div>
                        <h2 className="card-title">Toys Name: <span className="text-teal-600">{name}</span></h2>
                        <h3>Seller Name: {seller}</h3>
                        <h3>Seller E-mail: {email}</h3>
                        <p>{description}</p>
                    </div>
                    <div>
                        <p>Quantity: {quantity}</p>
                        <p>Price: {price}</p>
                        <p>{rating}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;