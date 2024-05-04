import { Routes, Route } from "react-router";
import Layout from "./Layout";
import AddPointage from "./AddPointage";
import ListPointages from "./ListPointages";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<ListPointages />} />
                <Route path="/list" element={<ListPointages />} />
                <Route path="/add" element={ <AddPointage />} />
            </Route>
        </Routes>
    </>)
}