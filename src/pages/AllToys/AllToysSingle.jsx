
const AllToysSingle = ({ toy }) => {
    console.log(toy)
    const {picture_url, name, sub_category, price, available_quantity} = toy;
    return (
        <tr>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={picture_url} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">{name}</div>
                        <div className="text-sm opacity-50">Category: {sub_category}</div>
                    </div>
                </div>
            </td>
            <td>Price: {price}</td>
            <td>Quantity: {available_quantity}</td>
            <th>
                <button className="btn btn-ghost btn-xs">View Details</button>
            </th>
        </tr>
    );
};

export default AllToysSingle;