

const StudentDataRow = ({student, refetch}) => {
    return (
        <tr>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{student?.name}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{student?.roll}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        <p className='text-gray-900 whitespace-no-wrap'>{student?.student_email}</p>
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm uppercase'>
         {student?.dept}
      </td>
      <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
        {student?.course_taken?.name}
      </td>
    </tr>
    );
};

export default StudentDataRow;