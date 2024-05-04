import { Routes, Route } from "react-router";
import Layout from "./Layout";
import ListPresences from "./ListPresences";
import AddPresence from "./AddPresence";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>
                <Route path="/" element={<ListPresences />} />
                <Route path="/list" element={<ListPresences />} />
                <Route path="/add" element={ <AddPresence />} />
            </Route>

        </Routes>
    </>)
}