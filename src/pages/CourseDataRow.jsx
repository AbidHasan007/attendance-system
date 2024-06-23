import React from 'react';

const CourseDataRow = ({ course, refetch }) => {
    return (
        <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{course?.code}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{course?.name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm uppercase'>
         {course?.dept}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {course?.teacher_email}
      </td>
    </tr>
    );
};

export default CourseDataRow;