import {Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import ListFormation from "./ListFormation";
import ModifyFormation from "./ModifyFormation";
import AddFormation from "./AddFormation";
import UploadFormation from "./UploadFormation";
import ViewFormation from "./ViewFormation";
import AddUE from "./ue/AddUE";
import AddLevel from "./level/AddLevel";
import AddEvalution from "./evaluation/AddEvaluation";
import AddCourse from "./course/AddCourse";

/**
 * 
 * evaluation(noteTP, noteCC, noteDS)
 * Matiere(intitule, code , coefficient)
 */

function Page() {
	return (
		<Routes>
			<Route element={ <Layout />}>
				<Route path="/:id" element={ <ViewFormation />} />
				<Route path="/:id/ue" element={ <AddUE />} />
				<Route path="/:id/matiere" element={ <AddCourse />} />
				<Route path="/:id/classe" element={ <AddLevel />} />
				<Route path="/:id/evaluation" element={ <AddEvalution />} />
				<Route path="/" element={ <ListFormation />} />
				<Route path="/liste" element={ <ListFormation />} />
				<Route path="/upload" element={ <UploadFormation />} />
				<Route path="/modifier/:id" element={ <ModifyFormation />} />
				<Route path="/ajouter" element={ <AddFormation />} />
				
			</Route>
		</Routes>
	);
}

export default Page;
