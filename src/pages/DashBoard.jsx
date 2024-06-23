import { useQuery } from "@tanstack/react-query";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";
import useRole from "../hooks/useRole";
import Approval from "./Approvale/Approval";

const DashBoard = () => {
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
          <title>Dashboard</title>
        </Helmet>
            <h1 className="text-2xl text-center font-bold text-gray-600 font-mono md:text-7xl">Dashboard</h1>
            <div className="flex items-center justify-evenly w-full my-10 flex-col md:flex-row ">
                <div className="flex flex-col w-1/4 h-36 justify-between text-white m-4 bg-[#6f42c1]">
                    <h1 className="text-4xl font-bold mx-4 my-2">Total</h1>
                     <p className="text-3xl font-bold mx-4">{students.length}</p>
                     <p className="text-lg font-bold mx-4 mb-5">students</p>
                </div>
                {/* teacher stats */}
                <div className="flex flex-col w-1/4 h-36 justify-between text-white m-4 bg-[#1bcfb4]">
                    <h1 className="text-4xl font-bold mx-4 my-2">Total</h1>
                     <p className="text-3xl font-bold mx-4">50</p>
                     <p className="text-lg font-bold mx-4 mb-5">teachers</p>
                </div>
                {/* departments stats */}
                <div className="flex flex-col w-1/4 h-36 justify-between text-white m-4 bg-[#ffa796]">
                    <h1 className="text-4xl font-bold mx-4 my-2">Total</h1>
                     <p className="text-3xl font-bold mx-4">03</p>
                     <p className="text-lg font-bold mx-4 mb-5">departments</p>
                </div>
            </div>
        </div>
    );
};

export default DashBoard;