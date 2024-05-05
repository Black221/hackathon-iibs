import {Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import CoursePage from "./course/Page";
import EvaluationPage from "./evaluation/Page";
import LevelPage from "./level/Page";
import UEPage from "./ue/Page";
import ListFormation from "./ListFormation";
import ModifyFormation from "./ModifyFormation";
import AddFormation from "./AddFormation";
import UploadFormation from "./UploadFormation";

function Page() {
	return (
		<Routes>
			<Route element={ <Layout />}>
				<Route path="/" element={ <ListFormation />} />
				<Route path="/liste" element={ <ListFormation />} />
				<Route path="/upload" element={ <UploadFormation />} />
				<Route path="/modifier/:id" element={ <ModifyFormation />} />
				<Route path="/ajouter" element={ <AddFormation />} />
				<Route path="/cours/*" element={<CoursePage/>} />
				<Route path="/evaluation/*" element={<EvaluationPage/>} />
				<Route path="/niveau/*" element={<LevelPage/>} />
				<Route path="/ue/*" element={<UEPage/>} />
			</Route>
		</Routes>
	);
}

export default Page;
