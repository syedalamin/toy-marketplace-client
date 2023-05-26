import bg from '../../../assets/image/bg.png';
const Banner = () => {
    return (
        <div className=' my-10'>
            <div className='grid sm:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <div>
                        <p className='text-2xl pb-4 font-semibold'>Give The Gift Of <br /> Your Children Everyday</p>
                        <h2 className='text-5xl font-bold'>Best <span className='text-teal-600'>Kids Toys</span> Store & <br /> Online Shop BD </h2>
                    </div>
                </div>
                <div className='flex items-center justify-center '>
                    <div>
                        <img className='' src={bg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;