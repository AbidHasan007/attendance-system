import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import toast from "react-hot-toast";
import AttendanceDataRow from "../AttendanceDataRow";

const Attendance = () => {
    const { name } = useParams();
    const axiosSecure = useAxiosSecure();
       //get all attendances data
   const {
    data: attendances=[],
    isLoading,
    refetch,
  } = useQuery({
   queryKey:['attendances'],
   queryFn: async()=>{
    const {data} = await axiosSecure('/attendances')
    return data
   }
  })
  
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
                                    <th scope="col" className="px-12 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                        Date
                                    </th>
    
                                    <th scope="col" className="px-4 py-3.5 text-sm font-normal text-left rtl:text-right text-gray-500 ">
                                        [Present/Absent]
                                    </th>
    
                                </tr>
                            </thead>
                            <tbody className="bg-white divide-y divide-gray-200 ">
                                {
                                    attendances.filter(student=> student.course_taken === name).map(attendance=><AttendanceDataRow key={attendance._id} attendance={attendance} refetch={refetch}></AttendanceDataRow>)
                                }
                            </tbody>
                        </table>
                       
                    </div>
                </div>
            </div>
        </div>
    
                
               
            </div>
    );
};

export default Attendance;