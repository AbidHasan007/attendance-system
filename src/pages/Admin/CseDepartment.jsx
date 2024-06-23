import { useQuery } from '@tanstack/react-query';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useAxiosSecure from '../../hooks/useAxiosSecure';


const CseDepartment = () => {
  const axiosSecure = useAxiosSecure();
       //get all courses data
   const {
    data: courses=[],
    isLoading,
    refetch,
  } = useQuery({
   queryKey:['courses'],
   queryFn: async()=>{
    const {data} = await axiosSecure('/courses')
    return data
   }
  })
    return (
        <div>
            <Tabs>
    <TabList>
      <Tab>Crouse List</Tab>
      <Tab>Department Teacher</Tab>
    </TabList>

    <TabPanel>
      {
        courses.filter(department=> department.dept ==="cse").map(course=><h1 key={course?._id}>{course?.name}</h1>)
      }
    </TabPanel>
    <TabPanel>
    {
        courses.filter(department=> department.dept ==="cse").map(course=><h1 key={course?._id}>{course?.teacher_email}</h1>)
      }
    </TabPanel>
  </Tabs>

        </div>
    );
};

export default CseDepartment;