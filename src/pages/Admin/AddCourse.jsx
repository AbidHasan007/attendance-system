import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const AddCourse = () => {
    const navigate = useNavigate() 
    const axiosSecure = useAxiosSecure()
  
  const {loading, setLoading} = useAuth()
    const handleSubmit = async e=>{
        e.preventDefault()
        const form = e.target;
        const code = form.code.value;
        const name = form.name.value;
        const teacher_email = form.teacher_email.value;
        const dept = form.dept.value
        const course = {
            code,
            name,
            teacher_email,
            dept
        }
        console.log(course)
        
 
        try{
        //   setLoading(true)
            //Upload image to imgbb
            const {data} = await axiosSecure.post('/courses',course
            )
           console.log(data.data)
            toast.success("Course added succesfully")
            navigate('/courses');
 
        }catch(err){
          console.log(err.message)
          toast.error(err.message)
        }
       
   }
    return (
        <div>
    
            <div className='flex justify-center items-center min-h-screen'>
      <div className='flex flex-col max-w-md p-6 rounded-md sm:p-10  text-gray-900'>
        <div className='mb-8 text-center'>
          <h1 className='my-3 text-4xl font-bold'>Add Course</h1>
          <p className='text-sm text-gray-400'>Welcome to IST AMS</p>
        </div>
        <form
          onSubmit={handleSubmit}
          className='space-y-6 ng-untouched ng-pristine ng-valid'
        >
          <div className='space-y-4'>
            <div>
              <label  className='block mb-2 text-sm'>
                Course Code
              </label>
              <input
                type='text'
                name='code'
                id='code'
                placeholder='Course Code'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            
            <div>
              <label htmlFor='course name' className='block mb-2 text-sm'>
                Course Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                required
                placeholder='Course Name'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            
            <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Course Teacher Email
                </label>
              </div>
              <input
                type='text'
                name='teacher_email'
                id='t_email'
                required
                placeholder='Teacher Email'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
              />
            </div>
          </div>
          <div>
              <div className='flex justify-between'>
                <label htmlFor='password' className='text-sm mb-2'>
                  Department
                </label>
              </div>
              <select name="dept" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900">
   
                                <option value="cse">CSE</option>
                               <option value="ece">ECE</option>
                               <option value="bba">BBA</option>
    
                         </select>
            </div>

          <div>
            <button
              disabled={loading}
              type='submit'
              className='bg-rose-500 w-full rounded-md py-3 text-white'
            >
             {
              loading ? "Please wait" : "Add"
             }
            </button>
          </div>
        </form>
        
        
      </div>
    </div>
        </div>
    );
};

export default AddCourse;