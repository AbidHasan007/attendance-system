
import { IoBookOutline } from "react-icons/io5";
import MenuItem from '../MenuItem';

const TeacherMenu = () => {
    return (
        <>
          <MenuItem icon={IoBookOutline} label='Assigned Courses' address='assigned-course' />
        </>
    );
};

export default TeacherMenu;