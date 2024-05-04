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
                <Route path="/list" element={ <ListTeachers />} />
                <Route path="/upload" element={ <UploadTeacher />} />
                <Route path="/modify" element={<ModifyTeacher />} />
                <Route path="/add" element={ <AddTeacher />} />
            </Route>

        </Routes>
    </>)
}