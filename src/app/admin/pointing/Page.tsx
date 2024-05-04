import { Routes, Route } from "react-router";
import Layout from "./Layout";
import ListPointing from "./ListPointing";
import AddPointing from "./AddPointing";



export default function Page () {

    return (<>
        <Routes>
            
            <Route element={ <Layout />}>

                <Route path="/" element={<ListPointing />} />
                <Route path="/list" element={<ListPointing />} />
                <Route path="/add" element={<AddPointing />} />

            </Route>

        </Routes>
    </>)
}