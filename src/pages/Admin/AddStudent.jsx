import axios from "axios";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { Combobox, ComboboxButton, ComboboxInput, ComboboxOption, ComboboxOptions, Transition } from '@headlessui/react'
import { useQuery } from "@tanstack/react-query";
import { IoCheckmarkOutline } from "react-icons/io5";
import { FaAngleDown } from "react-icons/fa";
import clsx from 'clsx'




const AddStudent = () => {
    const navigate = useNavigate() 
    const axiosSecure = useAxiosSecure()
    const [course, setCourses] = useState([]);
    const {loading, setLoading} = useAuth()

    const {
        data: courses=[],
        isLoading,
        refetch,
      } = useQuery({
       queryKey:['courses'],
       queryFn: async()=>{
        const {data} = await axiosSecure('/courses')
         setCourses(data)
         return data

       }
      })
      
   const [selected, setSelected] = useState(course[0])
   const [query, setQuery] = useState('')
     
   const filteredCourse =
    query === ''
  ? course
  : course.filter((title) => {
      return title.name.toLowerCase().includes(query.toLowerCase())
    })

    const handleSubmit = async e=>{
      e.preventDefault()
      const form = e.target;
      const name = form.name.value;
      const roll = form.roll.value;
      const student_email = form.student_email.value;
      const dept = form.dept.value;
      const course_taken = selected;
      const student = {
          name,
          roll,
          student_email,
          dept,
          course_taken
      }
      console.log(student)
      

      try{
      
          const {data} = await axiosSecure.post('/students',student
          )
         console.log(data.data)
          toast.success("Student added succesfully")
          navigate('/students');

      }catch(err){
        console.log(err.message)
        toast.error(err.message)
      }
     
 }




    return (
        <div className="mx-auto h-screen w-96 pt-20">
            <form onSubmit={handleSubmit}>
            <div className='space-y-4'>
            <div>
              <label  className='block mb-2 text-sm'>
                Student Name
              </label>
              <input
                type='text'
                name='name'
                id='name'
                placeholder='Student Name'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#ED8322] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            
            <div>
              <label htmlFor='course name' className='block mb-2 text-sm'>
                Roll
              </label>
              <input
                type='text'
                name='roll'
                id='roll'
                required
                placeholder='Roll'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#ED8322] bg-gray-200 text-gray-900'
                data-temp-mail-org='0'
              />
            </div>
            
            <div>
              <div className='flex justify-between'>
                <label htmlFor='email' className='text-sm mb-2'>
                  Student Email
                </label>
              </div>
              <input
                type='email'
                name='student_email'
                id='s_email'
                required
                placeholder='Student Email'
                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#ED8322] bg-gray-200 text-gray-900'
              />
            </div>
          </div>
          <div className=" mb-2">
              <div className='flex justify-between'>
                <label htmlFor='department' className='text-sm mb-2'>
                  Department
                </label>
              </div>
              <select name="dept" className="w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-[#ED8322] bg-gray-200 text-gray-900">
   
                                <option value="cse">CSE</option>
                               <option value="ece">ECE</option>
                               <option value="bba">BBA</option>
    
                         </select>
            </div>

            
        <Combobox value={selected || ''} onChange={(value) => setSelected(value)} >
        <span className="mb-2">Select Course</span>
          <div className="relative">
            
            <ComboboxInput
              className={clsx(
                'w-full rounded-lg border-[#ED8322] border bg-white py-1.5 pr-40 pl-3 text-sm/6 text-[#ED8322] '
                  ) }
              displayValue={(course) => course?.name}
              onChange={(event) => setQuery(event.target.value)}
            />
            <ComboboxButton className="group absolute inset-y-0 right-0 px-2.5 ml-24 ">
              <FaAngleDown className="size-4 fill-[#ED8322] group-data-[hover]:fill-black" />
            </ComboboxButton>
          </div>
          <Transition
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
            afterLeave={() => setQuery('')}
          >
            <ComboboxOptions
              anchor="bottom"
              transition
              className={clsx('w-[var(--input-width)] rounded-xl border border-red-200 bg-white text-red-600 p-1 [--anchor-gap:var(--spacing-1)] empty:hidden'
            )}>
              {filteredCourse.map((course) => (
                <ComboboxOption
                  key={course._id}
                  value={course}
                  className="group flex cursor-default items-center gap-2 rounded-lg py-1.5 px-3 select-none data-[focus]:bg-white text-[#ED8322]"
                >
                  <IoCheckmarkOutline className="invisible size-4 fill-gray-600 group-data-[selected]:visible" />
                  <div className="text-sm/6 text-[#ED8322] uppercase">{course.name} [{course.dept}]</div>
                </ComboboxOption>
              ))}
            </ComboboxOptions>
          </Transition>
        </Combobox>

        <div className="mt-2">
            <button
              disabled={loading}
              type='submit'
              className='bg-[#ED8322] w-full rounded-md py-3 text-white'
            >
             {
              loading ? "Please wait" : "Add Student"
             }
            </button>
          </div>
        </form>
      </div>
  
    );
};

export default AddStudent;