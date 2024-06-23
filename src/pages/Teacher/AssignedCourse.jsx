import { useQuery } from "@tanstack/react-query";
import { useReducer } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
const AssignedCourse = () => {
    const {user} = useAuth()
    const axiosSecure = useAxiosSecure();
    //get all courses data
const {
 data: courses=[],
 isLoading,
 refetch,
} = useQuery({
queryKey:['courses'],
queryFn: async()=>{
 const {data} = await axiosSecure('/courses')
 return data
}
})
    return (
        <div>
            <Helmet>
          <title>Assigned</title>
        </Helmet>
            <h1>assigned course</h1>
    <section className="bg-white ">
    <div className="container px-6 py-10 mx-auto">
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 xl:gap-16 md:grid-cols-2 xl:grid-cols-3">
            {
                courses.filter(assigned=>assigned.teacher_email === user.email).map(course=>(
    <div key={course._id} className="flex flex-col items-center p-6 space-y-3 text-center bg-gray-100 rounded-xl ">
                <span className="inline-block p-3 text-blue-500 bg-blue-100 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" />
                    </svg>
                </span>

                <h1 className="text-xl font-semibold text-gray-700 capitalize ">{course?.name} <br/>{course?.code}</h1>
                <p className="text-gray-600 uppercase">
                   Department: {course?.dept} 
                </p>


                <Link to={`/attendance/${course?.name}`} className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">View Attendance</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
                <Link to={`/takeattendance/${course?.name}`} className="flex items-center -mx-1 text-sm text-blue-500 capitalize transition-colors duration-300 transform dark:text-blue-400 hover:underline hover:text-blue-600 dark:hover:text-blue-500">
                    <span className="mx-1">Take Attendance</span>
                    <svg className="w-4 h-4 mx-1 rtl:-scale-x-100" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </Link>
            </div>
                ))
            }
    
        </div>
    </div>
</section>
        </div>
    );
};

export default AssignedCourse;