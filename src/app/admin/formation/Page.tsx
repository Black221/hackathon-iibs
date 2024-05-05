import {Routes, Route} from "react-router-dom"
import Layout from "./Layout";
import ListFormation from "./ListFormation";
import ModifyFormation from "./ModifyFormation";
import AddFormation from "./AddFormation";
import UploadFormation from "./UploadFormation";
import ViewFormation from "./ViewFormation";

function Page() {
	return (
		<Routes>
			<Route element={ <Layout />}>
				<Route path="/:id" element={ <ViewFormation />} />
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
