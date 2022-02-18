import * as React from 'react';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import VideocamIcon from '@mui/icons-material/Videocam';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import TYPES from '../resources/types';

function renderIcon(iconType){
  if (iconType === TYPES.YOUTUBE_VIDEO ) {
    return <VideocamIcon />
  } else if(iconType === TYPES.PDF){
    return <PictureAsPdfIcon />
  }
}


function renderVideoButtons(courseContent,setDisplayedContent){
    let elements =  courseContent.map((ele,index)=>{
        return (
        <ListItemButton onClick={()=>{setDisplayedContent(index)}}>
            <ListItemIcon>
              {renderIcon(ele.type)}
            </ListItemIcon>
            <ListItemText primary={ele.title} />
          </ListItemButton>
      )
    })
    
    return elements;
}


export default function NestedList(props) {

  return (
    <List
      sx={{ height:'100%' ,width: '100%', maxWidth: 360, bgcolor: 'rgb(137,207,240)' }}
      component="nav"
      >
          {renderVideoButtons(props.courseContent,props.setDisplayedContent)}
    </List>
  );
}
