import {Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import CoursePage from "./course/Page";
import EvaluationPage from "./evaluation/Page";
import LevelPage from "./level/Page";
import UEPage from "./ue/Page";

function Page() {
  return (
<Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<div > List</div>} />
                <Route path="/list" element={<div > List</div>} />
                <Route path="/update" element={<div > Update</div>} />
                <Route path="/modify" element={<div > Modify</div>} />
                <Route path="/add" element={<div > Bouna</div>} />
                <Route path="/course/*" element={<div > <CoursePage/></div>} />
                <Route path="/evaluation/*" element={<div > <EvaluationPage/></div>} />
                <Route path="/level/*" element={<div > <LevelPage/></div>} />
                <Route path="/ue/*" element={<div > <UEPage/></div>} />
            </Route>

        </Routes>
  );
}

export default Page;
