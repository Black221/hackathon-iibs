import { Routes, Route } from "react-router";
import Layout from "./Layout";
import ListPayment from "./ListPayments";
import Notification from "./Notification";



export default function Page () {

    return (<>
        <Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<ListPayment />} />
                <Route path="/list" element={<ListPayment />} />
                <Route path="/notify" element={<Notification />} />
            </Route>

        </Routes>
    </>)
}