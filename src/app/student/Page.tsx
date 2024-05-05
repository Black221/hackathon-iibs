import { Routes, Route } from "react-router";
import Layout from "./Layout";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<div > List</div>} />
                <Route path="/pointage" element={<div > List</div>} />
                <Route path="/calendrier/*" element={<div > List</div>} />
                <Route path="/offre/*" element={<div > Bouna</div>} />
                <Route path="/formations/*" element={<div > Bouna</div>} />
                <Route path="/biblio/*" element={<div > Bouna</div>} />
            </Route>

        </Routes>
    </>)
}