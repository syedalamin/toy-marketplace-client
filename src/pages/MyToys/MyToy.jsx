

const MyToy = ({myToy}) => {
    const { _id, name, } = myToy;

    console.log(_id, name, )
    return (
        <div>
            <h2>Name:{name}</h2>
        </div>
    );
};

export default MyToy;