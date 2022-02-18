import { Box } from '@mui/material';
import * as React from 'react';
import { courses } from '../resources/allcourses';
import CourseCards from './CourseCards';


function renderCourseCards(){
    return courses.map((element)=>{
        return <CourseCards course={element} />
    })
}

function AllCourses() {
    return ( <>
        <container >
        <Box sx={{ display: 'flex' }} style={{padding:"2rem"}}>
            {renderCourseCards()}
        </Box>
        </container>
    </> );    
}

export default AllCourses;





