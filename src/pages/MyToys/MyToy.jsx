import { Link } from "react-router-dom";


const MyToy = ({ myToy, handleDeleted }) => {
    const { _id, name, seller, category, quantity, price } = myToy;


    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{seller}</td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td>{price}</td>
                <th>
                    <Link to={`/updateToys/${_id}`}>
                    <button className="btn bg-green-600  hover:bg-green-800 border-0 btn-xs">Update</button>
                    </Link>
                </th>
                <th>
                    <button onClick={() => { handleDeleted(_id) }} className="btn bg-red-600  hover:bg-red-800 border-0 btn-xs">Delete</button>
                </th>
            </tr>
        </>
    );
};

export default MyToy;