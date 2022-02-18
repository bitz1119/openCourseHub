import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useNavigate } from "react-router-dom";

function CourseCards(props) {
    let navigate = useNavigate(); 
    const routeChange = (path1) =>{ 
      let path = `/${path1}`; 
      navigate(path);
    }
    return ( <>
    <Card sx={{ maxWidth: 345 }} style={{margin:"1rem"}}>
      <CardMedia        
        component="img"
        height="140"
        image={props.course.img}
        alt="Course"    
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {props.course.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {props.course.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small" onClick={()=>{routeChange(props.course.courseId)}}>Take the course</Button>
      </CardActions>
    </Card>
    
    </> );
}

export default CourseCards;