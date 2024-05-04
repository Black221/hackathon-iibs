import {Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import ListEvaluation from "../ListFormation";
import ModifyEvaluation from "../ModifyFormation";
import AddEvalution from "./AddEvaluation";

function EvaluationPage() {
  return (
<Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<div ><ListEvaluation/></div>} />
                <Route path="/list" element={<div > <ListEvaluation/></div>} />
                <Route path="/update" element={<div ><ModifyEvaluation/></div>} />
                <Route path="/add" element={<div ><AddEvalution/></div>} />
            </Route>

        </Routes>
  );
}

export default EvaluationPage;
