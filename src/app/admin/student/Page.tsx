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
                <Route path="/list" element={ <ListStudents />} />
                <Route path="/add" element={ <AddStudent />} />
                <Route path="/modify" element={<UploadStudents/>} />
            </Route>

        </Routes>
    </>)
}