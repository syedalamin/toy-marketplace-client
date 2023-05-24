
const AllToysSingle = ({ toy }) => {
    console.log(toy)
    const { name, seller, category, quantity, price } = toy;

    return (
        <>
            <tr>
                <td>{name}</td>
                <td>{seller}</td>
                <td>{category}</td>
                <td>{quantity}</td>
                <td>{price}</td>

                <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                </th>
            </tr>
        </>
    );
};

export default AllToysSingle;