import { Route, Routes} from 'react-router-dom'
import Layout from "./Layout"
import Home from './Home'

import AdminPage from './admin/Page';
import StudentPage from './student/Page';
import TeacherPage from './teacher/Page';
import ParentPage from './parent/Page';

function App() {


	return (<>
		<Routes>

			<Route path="/" element={ <Home />} />

			<Route path="/" element={<Layout />}>
				<Route path="/admin/*" element={ <AdminPage /> } />
				<Route path="/enseignant/*" element={ <TeacherPage /> } />
			</Route>

			<Route path="/etudiant/*" element={ <StudentPage /> } />

			<Route path="/parent/*" element={ <ParentPage /> } />
			<Route path="*" element={<div>404</div>} />

		</Routes>
	</>)
}

export default App
