import { Grid } from '@mui/material';
import React, { useState } from 'react'
import ReactPlayer from 'react-player'
import { useParams } from 'react-router-dom';
import { courses} from '../resources/allcourses';
import NestedList from './TreeView';
import TYPES from '../resources/types';
import PDFComponent from './PDFComponent';


function CourseDisplay() {
    let params = useParams();
    let [courseId] = useState(params.courseId);
    let course = courses.filter((element)=>element.courseId===courseId)
    let [displayedContent,setDisplayedContent] = useState(0)
    return ( 
        <>
            <Grid container spacing={1} style={{height:"90vh"}}>
                <Grid item xs="auto">
                    <NestedList style={{
                            overflowY:"auto", 
                        }} 
                        courseContent={course[0].content} setDisplayedContent ={setDisplayedContent} />
                </Grid>
                <Grid item xs={9}>
                    <container >
                        {renderContent(course[0].content[displayedContent])}
                    </container>
                </Grid>
            </Grid>

        </>
    );
}

function renderContent(content){
    console.log(content)
    switch (content.type) {
        case TYPES.YOUTUBE_VIDEO:
            return (
                <ReactPlayer height="100%" width='100%' url={content.link} />
            )

        case TYPES.PDF : return (
            <PDFComponent url={content.link}/>
        )

        default:
            return <h1>No Link Attached </h1>
    }
}

export default CourseDisplay;
