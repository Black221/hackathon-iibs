import { Routes, Route } from "react-router";
import Layout from "./Layout";
import AddTeacher from "./AddTeacher";
import ListTeachers from "./ListTeachers";
import UploadTeacher from "./UploadTeacher";
import ModifyTeacher from "./ModifyTeacher";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={ <ListTeachers />} />
                <Route path="/liste" element={ <ListTeachers />} />
                <Route path="/upload" element={ <UploadTeacher />} />
                <Route path="/modifier" element={<ModifyTeacher />} />
                <Route path="/ajouter" element={ <AddTeacher />} />
            </Route>

        </Routes>
    </>)
}