import { Routes, Route } from "react-router";
import Layout from "./Layout";
import AddPersonnel from "./AddPersonnel";
import ModifyPersonnel from "./ModifyPersonnel";
import ListPersonnel from "./ListPersonnel";
import UploadPersonnel from "./UploadPersonnel";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<ListPersonnel />} />
                <Route path="/list" element={<ListPersonnel />} />
                <Route path="/modify/:id" element={<ModifyPersonnel />} />
                <Route path="/add" element={<AddPersonnel />} />
                <Route path="/upload" element={<UploadPersonnel />} />
            </Route>
        </Routes>
    </>)
}