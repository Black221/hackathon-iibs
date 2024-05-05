import { Routes, Route } from "react-router";
import Layout from "./Layout";
<<<<<<< HEAD
import UploadParent from "./UploadParent";
import AddParent from "./AddParent";
import ListParents from "./ListParents";
=======
import AddParent from "./AddParent";
>>>>>>> 8f75049772fe1ae57967128e1a6c91c83ca6f97b



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

<<<<<<< HEAD
                <Route path="/" element={<ListParents />} />
                <Route path="/liste" element={<ListParents />} />
                <Route path="/ajouter" element={ <AddParent /> } />
                <Route path="/upload" element={<UploadParent />} />
=======
                <Route path="/" element={<div > List</div>} />
                <Route path="/list" element={<div > List</div>} />
                <Route path="/manage" element={<div > Bouna</div>} />
                <Route path="/timetable" element={<div > Bouna</div>} />
                <Route path="/add" element={<div ><AddParent/></div>} />
>>>>>>> 8f75049772fe1ae57967128e1a6c91c83ca6f97b
            </Route>

        </Routes>
    </>)
}