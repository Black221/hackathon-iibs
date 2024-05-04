import { Routes, Route } from "react-router";
import Layout from "./Layout";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<div > List</div>} />
                <Route path="/list" element={<div > List</div>} />
                <Route path="/manage" element={<div > Bouna</div>} />
                <Route path="/timetable" element={<div > Bouna</div>} />
                <Route path="/add" element={<div > Bouna</div>} />
            </Route>

        </Routes>
    </>)
}