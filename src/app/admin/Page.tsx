import { Routes, Route } from "react-router";
import Layout from "./Layout";



export default function Page () {

    return(<>
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<div > Bouna</div>} />
                <Route path="/list" element={<div > Bouna</div>} />
            </Route>
        </Routes>
    </>)
}