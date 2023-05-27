import { Link } from "react-router-dom";

const AllToysSingle = ({ toy }) => {
    const { _id, name, seller, category, quantity, price } = toy;

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{seller}</td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td>{price}</td>

                <th>
                    <Link to={`/allToys/${_id}`}>
                        <button className="btn bg-teal-600  hover:bg-teal-800 border-0 btn-xs">Details</button>
                    </Link>
                </th>
            </tr>
        </>
    );
};

export default AllToysSingle;