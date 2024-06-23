
import { Link, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'
import useAuth from '../hooks/useAuth';
import axios from 'axios'
import toast from 'react-hot-toast'
import { useState } from 'react';
const Login = () => {
  const navigate = useNavigate() 
  const {signInWithGoogle,signIn,resetPassword, loading, setLoading} = useAuth()

  const handleSubmit = async e=>{
    e.preventDefault()
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;

    try{
      setLoading(true)
        //Upload image to imgbb
        await signIn(email,password)
       navigate("/")
       toast.success("Welcome,Back!")

    }catch(err){
      toast.error(err.message)
      setLoading(false)
    }
   
}

//reset password

const handleForgot = async (e)=>{
    e.preventDefault()
     const email = e.target.femail.value 
    try{
       await resetPassword(email)
       toast.success("Reset passwor request sent,please check your email")
       setLoading(false)
    }catch(err){
      toast.error(err.message)
      setLoading(false)
    }
}

//google signin
  const handleGoogleSignin = async ()=>{
    try{
     await signInWithGoogle()
     navigate("/")
     toast.success("Welcome,Back!")
    }catch(err){
      toast.error(err.message)
    }
 }
  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10 bg-gray-100 text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Log In</h1>
          <p className='text-sm text-gray-400'>
            Sign in to access your account
          </p>
        </div>
        <form
         onSubmit={handleSubmit}
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label htmlFor='email' className='block mb-2 text-sm'>
                Email address
              </label>
              <input
                type='email'
                name='email'
                id='email'
                required
                placeholder='Enter Your Email Here'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Password
                </label>
              </div>
              <input
                type='password'
                name='password'
                autoComplete='current-password'
                id='password'
                required
                placeholder='*******'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>

          <div>
            <button
             disabled={loading}
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
               {
              loading ? "Please wait" : "Sign In"
             }
            </button>
          </div>
        </form>
        <div className='space-y-1'>
          <button
          onClick={()=>document.getElementById('my_modal_3').showModal()}
           className='text-xs hover:underline hover:text-rose-500 text-gray-400'>
            Forgot password?
          </button>
          <dialog id="my_modal_3" className="modal">
             <div className="modal-box">
              <form method="dialog">
                 {/* if there is a button in form, it will close the modal */}
               <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
               </form>
                <h3 className="font-bold text-lg">Forgot Passwor</h3>
                
        <form onSubmit={handleForgot}>
          <div className='grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2'>
            <div>
              <label className='text-gray-700 ' htmlFor='emailAddress'>
                Email
              </label>
              <input
                id='emailAddress'
                type='email'
                name='femail'
                className='block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-200 rounded-md   focus:border-blue-400 focus:ring-blue-300 focus:ring-opacity-40  focus:outline-none focus:ring'
              />
            </div>
            
          </div>

          <div className='flex justify-end mt-6'>
            <button
              type='submit'
              className='px-8 py-2.5 leading-5 text-white transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600'
            >
             Send Request
            </button>
          </div>
        </form>
              </div>
         </dialog>
        </div>
        <div className='flex items-center pt-4 space-x-1'>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
          <p className='px-3 text-sm dark:text-gray-400'>
            Login with social accounts
          </p>
          <div className='flex-1 h-px sm:w-16 dark:bg-gray-700'></div>
        </div>
        <button onClick={handleGoogleSignin} className='flex justify-center items-center space-x-2 border m-3 p-2 border-gray-300 border-rounded cursor-pointer'>
          <FcGoogle size={32} />

          <p>Continue with Google</p>
        </button>
        <p className='px-6 text-sm text-center text-gray-400'>
          Don&apos;t have an account yet?{' '}
          <Link
            to='/register'
            className='hover:underline hover:text-rose-500 text-gray-600'
          >
            Register
          </Link>
          .
        </p>
      </div>
    </div>
  )
}

export default Login