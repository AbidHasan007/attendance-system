import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png'
import LoadingSpinner from '../../components/SideBar/shared/LoadingSpinner';
import useAuth from '../../hooks/useAuth';
import useRole from '../../hooks/useRole';

const Approval = () => {
    const [role, isLoading] = useRole()
    const {logOut}= useAuth()
    const navigate = useNavigate()
    const handleLogout = ()=>{
        logOut()
        navigate("/login")
    }
    useEffect(() => {
        if (!isLoading && (role === 'admin' || role === 'teacher')) {
            navigate("/");
        }
    }, [isLoading, role, navigate]);

    if (isLoading) {
        return <LoadingSpinner />;
    }
  
    return (
        <div className="container flex flex-col items-center justify-center min-h-screen px-6 py-12 mx-auto">
            <div className="chat chat-start">
            <div className="chat-image avatar">
            <div className="w-10 rounded-full">
           <img alt="Tailwind CSS chat bubble component" src={logo} />
          </div>
         </div>
        <div className="chat-bubble chat-bubble-info text-white">You need an admin approval to get access.Please wait...</div>
      </div>
      <button onClick={handleLogout} className="btn btn-primary">Log Out</button>
</div>
    );
};

export default Approval;