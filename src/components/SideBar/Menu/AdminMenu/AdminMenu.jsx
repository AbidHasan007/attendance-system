import { FaUserCog } from 'react-icons/fa'
import { IoSchoolOutline } from "react-icons/io5";
import { PiStudent } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { LiaChalkboardTeacherSolid } from "react-icons/lia";



import MenuItem from '../MenuItem'


const AdminMenu = () => {
  return (
    <>
      <MenuItem icon={IoSchoolOutline} label='Departments' address='departments' />
      <MenuItem icon={IoBookOutline} label='Courses' address='courses' />
      <MenuItem icon={PiStudent} label='Students' address='students' />
      <MenuItem icon={FaUserCog} label='Manage Users' address='manage-users' />
    </>
  )
}

export default AdminMenu