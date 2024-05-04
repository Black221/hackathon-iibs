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
				<Route path="/list" element={ <ListFormation />} />
				<Route path="/upload" element={ <UploadFormation />} />
				<Route path="/modify/:id" element={ <ModifyFormation />} />
				<Route path="/add" element={ <AddFormation />} />
				<Route path="/course/*" element={<div > <CoursePage/></div>} />
				<Route path="/evaluation/*" element={<div > <EvaluationPage/></div>} />
				<Route path="/level/*" element={<div > <LevelPage/></div>} />
				<Route path="/ue/*" element={<div > <UEPage/></div>} />
			</Route>
		</Routes>
	);
}

export default Page;
