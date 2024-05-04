import {Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import ListCourses from "./ListCourses";
import ModifyCourse from "./ModifyCourse";
import AddCourse from "./AddCourse";

function CoursePage() {
  return (
<Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<div ><ListCourses/> </div>} />
                <Route path="/list" element={<div > <ListCourses/></div>} />
                <Route path="/update" element={<div > <ModifyCourse/></div>} />
                <Route path="/add" element={<div ><AddCourse/></div>} />
            </Route>

        </Routes>
  );
}

export default CoursePage;
