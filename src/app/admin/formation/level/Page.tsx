import {Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import ListLevel from "./ListLevel";
import ModifyLevel from "./ModifyLevel";
import AddLevel from "./AddLevel";

function LevelPage() {
  return (
<Routes>
            <Route element={ <Layout />}>
                <Route path="/" element={<div ><ListLevel/></div>} />
                <Route path="/list" element={<div ><ListLevel/></div>} />
                <Route path="/modify" element={<div ><ModifyLevel/></div>} />
                <Route path="/add" element={<div ><AddLevel/></div>} />
            </Route>

        </Routes>
  );
}

export default LevelPage;
