import { useLoaderData } from "react-router-dom";

const AllToysDetails = () => {
    const toyDetails = useLoaderData();
    console.log(toyDetails)
    const { photo, name, seller, email, price, rating, quantity, description } = toyDetails;
    return (
        <div className="w-10/12 mx-auto py-20">
            <div className="card grid sm:grid-cols-3 bg-base-100 shadow-xl border-4">
                <div>
                    <figure ><img style={{ width: '10rem' }} className=" py-5 w-full h-fit" src={photo} /></figure>
                </div>
                <div className="card-body col-span-2">
                    <div className="">
                        <h2 className="card-title font-extrabold">Toys Name: <span className="text-teal-600">{name}</span></h2>
                        <h3 className="font-bold text-xl">Seller Name: <span className="text-teal-600"> {seller}</span></h3>
                        <h3 className="text-lg font-semibold">Seller E-mail: {email}</h3>
                        <p className="font-semibold">{description}</p>
                    </div>
                    <div className="py-5 font-semibold">
                        <p>Quantity: <span className="text-teal-600">{quantity}</span></p>
                        <p>Price: <span className="text-teal-600">{price}</span> </p>
                        <p> <span className="text-teal-600">{rating}</span> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllToysDetails;