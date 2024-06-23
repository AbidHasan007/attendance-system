import { Link } from "react-router-dom";

const Departments = () => {
    return (
        <>
            <h1 className="font-bold text-4xl md:text-7xl my-10 text-center">Departments</h1>
        <div className="flex flex-col items-center justify-center md:flex-row  md:justify-between">
            {/* CSE */}
            <Link to="/csedepartment">
            <div className="w-full max-w-xs mb-5 overflow-hidden bg-[#ed8322] rounded-lg shadow-lg">
              <img className="object-cover w-full h-56" src="https://images.unsplash.com/photo-1550439062-609e1531270e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="avatar" />

                <div className="py-5 text-center">
                <p className="block text-4xl font-bold text-black font-inter ">CSE</p>
                <span className="text-sm text-gray-800 ">Welcome to CSE Department</span>
                </div>
            </div>
            </Link>
            {/* ECE */}
            <div className="w-full max-w-xs mb-5 overflow-hidden bg-[#ed8322] rounded-lg shadow-lg">
              <img className="object-cover w-full h-56" src="https://plus.unsplash.com/premium_photo-1663089904761-25392c9ce90d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8Y29tcHV0ZXIlMjBzY2llbmNlfGVufDB8fDB8fHww" alt="avatar" />

                <div className="py-5 text-center">
                <p className="block text-4xl font-bold text-black font-inter ">ECE</p>
                <span className="text-sm text-gray-800 ">Welcome to ECE Department</span>
                </div>
            </div>
            {/* BBA */}
            <Link to="/bba">
            <div className="w-full max-w-xs mb-5 overflow-hidden bg-[#ed8322] rounded-lg shadow-lg">
              <img className="object-cover w-full h-56" src="https://plus.unsplash.com/premium_photo-1679923813998-6603ee2466c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmluYW5jZXxlbnwwfHwwfHx8MA%3D%3D" alt="avatar" />

                <div className="py-5 text-center">
                <p className="block text-4xl font-bold text-black font-inter ">BBA</p>
                <span className="text-sm text-gray-800 ">Welcome to BBA Department</span>
                </div>
            </div>
            </Link>
        </div>
        </>
    );
};

export default Departments;