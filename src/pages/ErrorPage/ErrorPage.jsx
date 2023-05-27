import useTitle from '../../hooks/useTitle';
import './ErrorPage.css';

const ErrorPage = () => {
    useTitle('Error Page')
    return (
        <div className='error-bg'>
        </div>
    );
};

export default ErrorPage;