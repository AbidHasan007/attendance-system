import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";

const TakeAttendance = () => {
    const axiosSecure = useAxiosSecure();
    const navigate = useNavigate();
    const { name } = useParams();
    const [filteredStudent, setFilteredStudent] = useState([]);
    const [attendanceData, setAttendanceData] = useState({});
    const [date, setDate] = useState(new Date());
    useEffect(() => {
        const timer = setInterval(() => {
          setDate(new Date());
        }, 1000);
    
        return () => {
          clearInterval(timer);
        };
      }, []);

    // Get all student data
    const {
        data: students = [],
        isLoading,
        refetch,
    } = useQuery({
        queryKey: ['students'],
        queryFn: async () => {
            const { data } = await axiosSecure('/students');
            return data;
        }
    });

    // Filter students based on the course name
    useEffect(() => {
        const filterData = students.filter(course => course.course_taken.name === name);
        setFilteredStudent(filterData);
    }, [students,name]);

    // Handle attendance status change
    const handleStatusChange = (studentId, status) => {
        setAttendanceData(prev => ({
            ...prev,
            [studentId]: status
        }));
    };
    
console.log(filteredStudent)
    // Handle form submission
    const handleSubmit = async (e) => {
        e.preventDefault();
        const attendanceRecords = filteredStudent.map(student => ({
            studentName: student.name,
            roll: student.roll,
            course_taken: student.course_taken.name,
            status: attendanceData[student._id] || 'absent',
            date: date.toLocaleDateString('en-CA')
        }));
  console.log(attendanceRecords)
        try {
            await axiosSecure.post('/attendance', attendanceRecords);
            toast.success('Attendance recorded successfully!');
            navigate("/assigned-course")
        } catch (error) {
            toast.error('Error recording attendance:', error);
        }
    };

    if (isLoading) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container px-4 mx-auto">
            
    <div className="flex flex-col mt-6">
        <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
            <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                <div className="overflow-hidden border border-gray-200  md:rounded-lg">
                    <table className="min-w-full divide-y divide-gray-200 ">
                        <thead className="bg-gray-50">
                            <tr>
                                <th scope="col" className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                
                                <span>Student Name</span>
                                
                                </th>

                                <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                    Student Roll
                                </th>

                                <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                    Action[Present/Absent]
                                </th>

                            </tr>
                        </thead>
                        
                    </table>
                    <form onSubmit={handleSubmit}>
                       {filteredStudent.map(student => (
                    <div key={student?._id} className="grid grid-cols-3 items-center justify-center my-4 mx-4 min-w-full">
                        
                        <p className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">{student?.name}</p>
                        <p className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 ">{student?.roll}</p>
                        <div>
                        <select
                         className="py-3.5 px-4 text-sm font-normal text-left rtl:text-right text-gray-500 "
                            value={attendanceData[student._id] || ''}
                            onChange={(e) => handleStatusChange(student._id, e.target.value)}
                            required
                        >
                            <option value="">Select Status</option>
                            <option value="present">Present</option>
                            <option value="absent">Absent</option>
                        </select>
                        </div>
                        </div>
                ))}
                <button type="submit" className="px-6 py-2 my-4 content-center mx-72 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-[#ED8322] rounded-lg hover:bg-orange-300 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">Submit Attendance</button>
            </form>
                </div>
            </div>
        </div>
    </div>

            
           
        </div>
    );
};

export default TakeAttendance;
