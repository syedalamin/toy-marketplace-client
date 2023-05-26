import newCollection1 from '../../../assets/image/NewCollection1.jpg';
import NewCollection2 from '../../../assets/image/NewCollection2.jpg';
const NewCollection = () => {
    return (
        <div className='my-10'>
            <div className="grid md:grid-cols-2 gap-6">
                <div className='relative'>
                    <img src={NewCollection2} className=' rounded-md border-2' alt="" />
                    <div className='absolute bottom-0 right-0'>
                        <img src={newCollection1} className='w-44 border-4 border-teal-600 rounded-md ' alt="" />
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <h2 className='text-5xl font-bold '>Best Kids Toys New <br /> Collection of <span className='text-teal-600'>2023</span></h2>
                </div>
            </div>
        </div>
    );
};

export default NewCollection;