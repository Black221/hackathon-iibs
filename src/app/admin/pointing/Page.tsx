import { Routes, Route } from "react-router";
import Layout from "./Layout";
import ListPointing from "./ListPointing";
import AddPointing from "./AddPointing";



export default function PointingPage () {

    return (<>
        <Routes>
            
            <Route element={ <Layout />}>

                <Route path="/" element={<ListPointing />} />
                <Route path="/liste" element={<ListPointing />} />
                <Route path="/ajouter" element={<AddPointing />} />

            </Route>

        </Routes>
    </>)
}