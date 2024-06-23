import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from 'react'
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { BsFillHouseAddFill, BsFingerprint } from 'react-icons/bs'
import { IoSchoolOutline } from "react-icons/io5";
import { IoTimerOutline } from "react-icons/io5";
import { GrUserAdmin } from 'react-icons/gr'
import { AiOutlineBars } from 'react-icons/ai'
import { BsGraphUp } from 'react-icons/bs'
import {MdHomeWork} from 'react-icons/md'
import { NavLink } from 'react-router-dom'
import { Link } from 'react-router-dom'
import AdminMenu from "./Menu/AdminMenu/AdminMenu";
import useRole from "../../hooks/useRole";
import Approval from "../../pages/Approvale/Approval";
import TeacherMenu from "./Menu/TeacherMenu/TeacherMenu";
import logo from "../../assets/logo.png"
import LoadingSpinner from "./shared/LoadingSpinner";

const SideBar = () => {
    const {user, logOut} = useAuth()
    const navigate =  useNavigate()
    const [isActive, setActive] = useState(true)
    const [role, isLoading] = useRole() 

  // Sidebar Responsive Handler
  const handleToggle = () => {
    setActive(!isActive)
  }
    const logout = async ()=>{
        try{
            await logOut()
            navigate("/login")
        }catch(err)
        {
            console.log(err.message)
        }
    }
if(isLoading) return <LoadingSpinner />
   return (
      <>
      <div className='bg-gray-100 text-gray-800 flex justify-between md:hidden'>
      <div>
        <div className='block cursor-pointer p-4 font-bold'>
         
          <Link className="flex items-center" to='/'>
            <img
              // className='hidden md:block'
              src={logo}
              alt='logo'
              width='40'
              height='40'
            />
            <p className="badge badge-accent badge-outline capitalize ml-2">{role}</p>
          </Link>
        </div>
      </div>

      <button
        onClick={handleToggle}
        className='mobile-menu-button p-4 focus:outline-none focus:bg-gray-200'
      >
        <AiOutlineBars className='h-5 w-5' />
      </button>
    </div>
        <div
        className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-gray-100 shadow-lg w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${
          isActive && '-translate-x-full'
        }  md:translate-x-0  transition duration-200 ease-in-out`}
      >
        <div>
          <div>
         <div className='w-full hidden md:flex px-4 pb-2  rounded-lg justify-center items-center mx-auto'>
         <img 
          src={logo} 
          alt="logo"
          width='80'
          height='80'
           />
         </div>
            <div className='w-full hidden capitalize md:flex px-4 py-3 shadow-lg rounded-lg justify-center items-center  text-gray-500 mx-auto'>
              <p className="badge badge-accent badge-outline capitalize ">{role}</p>
            </div>
            <div className='w-full hidden md:flex px-4 py-3 shadow-lg rounded-lg justify-center items-center bg-[#383838] text-white mx-auto'>
              
              
              <Link to='/'> 
                Dashboard
              </Link>
            </div>
          </div>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-4'>
            {/* Conditional toggle button here.. */}

            {/*  Menu Items */}
            <nav>
              {/* Department */}
             {
              role === "admin" && <AdminMenu />
             }
             {
              role === 'teacher' && <TeacherMenu />
             }

              {/* class time */}
              <NavLink
                to='/classtime'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <IoTimerOutline className='w-5 h-5' />

                <span className='mx-4 font-medium'>Class Time</span>
              </NavLink>
              {/* statistics */}
              <NavLink
                to='/statistic'
                className={({ isActive }) =>
                  `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                    isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
                  }`
                }
              >
                <BsGraphUp className='w-5 h-5' />

                <span className='mx-4 font-medium'>Attendance Stats</span>
              </NavLink>
            </nav>
          </div>
        </div>

        <div>
          <hr />

          {/* Profile Menu */}
          <a href="#" className="flex items-center px-4 my-2">
         <img className="object-cover mx-2 rounded-full h-9 w-9" src={user?.photoURL} alt="avatar" />
         <span className="mx-2 font-medium text-gray-800">{user?.displayName}</span>
         </a>

          <NavLink
            to='/dashboard/profile'
            className={({ isActive }) =>
              `flex items-center px-4 py-2 my-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
                isActive ? 'bg-gray-300  text-gray-700' : 'text-gray-600'
              }`
            }
          >
            <FcSettings className='w-5 h-5' />

            <span className='mx-4 font-medium'>Settings</span>
          </NavLink>
          <button
            onClick={logout}
            className='flex w-full items-center px-4 py-2 mt-5 text-gray-600 hover:bg-gray-300   hover:text-gray-700 transition-colors duration-300 transform'
          >
            <GrLogout className='w-5 h-5' />

            <span className='mx-4 font-medium'>Logout</span>
          </button>
        </div>
      </div>
      </>
    );
};

export default SideBar;