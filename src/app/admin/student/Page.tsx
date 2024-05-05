import { Routes, Route } from "react-router";
import Layout from "./Layout";
import ListStudents from "./ListStudents";
import AddStudent from "./AddStudent";
import UploadStudents from "./UploadStudents";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={ <ListStudents />} />
                <Route path="/liste" element={ <ListStudents />} />
                <Route path="/ajouter" element={ <AddStudent />} />
                <Route path="/upload" element={<UploadStudents/>} />
            </Route>

        </Routes>
    </>)
}