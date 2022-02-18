import './App.css';
import ResponsiveAppBar from './components/AppBar';
import { Route, Routes } from 'react-router-dom';
import AllCourses from './components/AllCourses';
import CourseDisplay from './components/CourseDisplay';

function App() {
  

  return (
    <>
      <ResponsiveAppBar />
      <Routes >
        <Route path="/" element={<AllCourses />}></Route>
        <Route path="/:courseId" element={<CourseDisplay />}></Route>
      </Routes>
    </>
  );
}

export default App;



