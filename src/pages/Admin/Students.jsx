
import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import StudentDataRow from "../StudentDataRow";
const Students = () => {
    const axiosSecure = useAxiosSecure();
       //get all student data
   const {
    data: students=[],
    isLoading,
    refetch,
  } = useQuery({
   queryKey:['students'],
   queryFn: async()=>{
    const {data} = await axiosSecure('/students')
    return data
   }
  })

    return (
        <div>
            <Helmet>
          <title>Students</title>
        </Helmet>
           
            <section className="container px-4 mx-auto">
               <div className="sm:flex sm:items-center sm:justify-between">
                    <div>
                        <div className="flex items-center gap-x-3">
                       <h2 className="text-lg font-medium text-gray-800">Total Student</h2>

                       <span className="px-3 py-1 text-xs text-blue-600 bg-blue-100 rounded-full ">{students.length}</span>
                       </div>

        
                    </div>
                <div className="flex items-center mt-4 gap-x-3">
                      <Link to="/addstudent"> <button className="flex items-center justify-center w-1/2 px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 sm:w-auto gap-x-2 hover:bg-blue-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      <span>Add Student</span>
                      </button>
                      </Link>
                </div>
            </div>
            <div className='container mx-auto px-4 sm:px-8'>
        <div className='py-8'>
          <div className='-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto'>
            <div className='inline-block min-w-full shadow rounded-lg overflow-hidden'>
              <table className='min-w-full leading-normal'>
                <thead>
                  <tr>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Student Name
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Roll
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Student Email
                    </th>
                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Department
                    </th>

                    <th
                      scope='col'
                      className='px-5 py-3 bg-white  border-b border-gray-200 text-gray-800  text-left text-sm uppercase font-normal'
                    >
                      Course Taken
                    </th>
                  </tr>
                </thead>
                <tbody>
                  {
                    students.map(student=>(<StudentDataRow key={student?._id} student={student} refetch={refetch} />
                    ))
                  }
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
            </section>
        </div>
    );
};

export default Students;