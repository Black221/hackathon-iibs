import { Route, Routes} from 'react-router-dom'
import Layout from "./Layout"

import AdminPage from "./admin/Page";

function App() {


	return (<>
		<Routes>
			<Route path="/" element={<Layout />}>

				<Route path="/" element={
					<div />
				} />

				<Route path="/admin" element={ <AdminPage />} />
				<Route path="/student" element={<div> </div> } />
				<Route path="/teacher" element={<div> </div> } />
				

				<Route path="*" element={<div>404</div>} />

			</Route>
		</Routes>
	</>)
}

export default App
