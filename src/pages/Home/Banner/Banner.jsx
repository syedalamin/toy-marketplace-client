import bg from '../../../assets/image/bg.png';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Banner = () => {
    useEffect(()=>{
        Aos.init({duration: 2000});
    },[])
    return (
        <div className=' my-10'>
            <div className='grid sm:grid-cols-2'>
                <div className='flex items-center justify-center'>
                    <div  data-aos = 'fade-right' >
                        <p className='text-2xl pb-4 font-semibold'>Give The Gift Of <br /> Your Children Everyday</p>
                        <h2 className='text-5xl font-bold'>Best <span className='text-teal-600'>Kids Toys</span> Store & <br /> Online Shop BD </h2>
                    </div>
                </div>
                <div className='flex items-center justify-center '>
                    <div  data-aos = 'fade-left' >
                        <img className='' src={bg} alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;