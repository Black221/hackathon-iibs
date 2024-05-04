import {Routes, Route} from "react-router-dom"
import Layout from "./Layout";

function Page() {
  return (
<Routes>
            <Route element={ <Layout />}>

                <Route path="/" element={<div > List</div>} />
                <Route path="/list" element={<div > List</div>} />
                <Route path="/update" element={<div > Update</div>} />
                <Route path="/modify" element={<div > Modify</div>} />
                <Route path="/add" element={<div > Add</div>} />
            </Route>

        </Routes>
  );
}

export default Page;
