import React from 'react';

const AttendanceDataRow = ({attendance, refetch}) => {
    console.log(attendance)
                         return (
                                <tr>
                                <td className="px-4 py-4 text-sm font-medium text-gray-700 whitespace-nowrap">
                                    <div className="inline-flex items-center gap-x-3">
                                        <div className="flex items-center gap-x-2">

                                            <div>
                                                <p className="px-4 py-4 text-sm font-normal text-gray-700  ">{attendance.studentName}</p>
                                            </div>
                                        </div>
                                    </div>
                                </td>
                                <td className="px-12 py-4 text-sm font-normal text-gray-700 whitespace-nowrap">
                                    {attendance.roll}
                                </td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{attendance.date}</td>
                                <td className="px-4 py-4 text-sm text-gray-500 dark:text-gray-300 whitespace-nowrap">{attendance.status}</td>
                         </tr>
    );
};

export default AttendanceDataRow;