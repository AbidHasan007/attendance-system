import {
    createBrowserRouter,
  } from "react-router-dom";
import TeacherMenu from "../components/SideBar/Menu/TeacherMenu/TeacherMenu";
import ErrorPage from "../components/SideBar/shared/ErrorPage";
import Root from "../Layout/Root";
import AddCourse from "../pages/Admin/AddCourse";
import AddStudent from "../pages/Admin/AddStudent";
import Courses from "../pages/Admin/Courses";
import CseDepartment from "../pages/Admin/CseDepartment";
import Departments from "../pages/Admin/Departments";
import Students from "../pages/Admin/Students";
import Approval from "../pages/Approvale/Approval";
import Statistic from "../pages/common/Statistic";
import DashBoard from "../pages/DashBoard";
import Home from "../pages/Home";
import Login from "../pages/Login";
import ManageUsers from "../pages/ManageUsers";
import Register from "../pages/Register";
import AssignedCourse from "../pages/Teacher/AssignedCourse";
import Attendance from "../pages/Teacher/Attendance";
import TakeAttendance from "../pages/Teacher/TakeAttendance";
import PrivateRoute from "./PrivateRoute";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children:[
        {
          path:"/",
          element:<PrivateRoute><DashBoard></DashBoard></PrivateRoute>
        },
        {
          path: "statistic",
          element: <Statistic></Statistic>
        },
        {
          path:"manage-users",
          element:<PrivateRoute><ManageUsers></ManageUsers></PrivateRoute>
        },
        {
          path:"departments",
          element:<PrivateRoute><Departments></Departments></PrivateRoute>
        },
        {
          path:"csedepartment",
          element:<PrivateRoute><CseDepartment></CseDepartment></PrivateRoute>
        },
        {
          path:"courses",
          element:<PrivateRoute><Courses></Courses></PrivateRoute>
        },
        {
          path:"students",
          element:<PrivateRoute><Students></Students></PrivateRoute>
        },
        {
          path:"addstudent",
          element:<PrivateRoute><AddStudent></AddStudent></PrivateRoute>
        },
        {
          path:"addcourse",
          element:<PrivateRoute><AddCourse></AddCourse></PrivateRoute>
        },
        {
          path:"assigned-course",
          element:<PrivateRoute><AssignedCourse></AssignedCourse></PrivateRoute>
        },
        {
          path:"attendance/:name",
          element:<PrivateRoute><Attendance></Attendance></PrivateRoute>
        },
        {
          path:"takeattendance/:name",
          element:<PrivateRoute><TakeAttendance></TakeAttendance></PrivateRoute>
        }
      ]
    },
    {
      path:"/login",
      element: <Login></Login>
    },
    {
      path:"/register",
      element: <Register></Register>
    },
    {
     path:"/approval",
     element: <Approval></Approval>
    }
  ]);
  