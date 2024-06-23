import { Link } from 'react-router-dom';
import error from '../../../assets/404.png'
const ErrorPage = () => {
    return (
        <div>
          <section className="bg-white light:bg-gray-900 ">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
            <div className="flex flex-col items-center max-w-sm mx-auto text-center">
                <img src={error} alt="" />
                <h1 className="mt-3 text-2xl font-semibold text-gray-800 dark:text-white md:text-3xl">Page not found</h1>
                <p className="mt-4 text-gray-500 light:text-gray-400">The page you are looking for doesn't exist.Please go to Dashboard</p>
    
                <div className="flex justify-center text-center items-center w-full mt-6 gap-x-3 shrink-0 sm:w-full">
                   
                 <Link to="/">
                 <button className="w-full px-5 py-2 text-sm tracking-wide  text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600">
                        Go back Dashboard
                 </button>
                 </Link>
                  
                </div>
            </div>
        </div>
    </section>  
        </div>
    );
};

export default ErrorPage;