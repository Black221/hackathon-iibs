import { Routes, Route } from "react-router-dom";
import Layout from "./Layout";
import ListUE from "./ListUE";
import ModifyUE from "./ModifyUE";
import AddUE from "./AddUE";

function UEPage() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<div><ListUE/></div>} />
        <Route path="/list" element={<div><ListUE/></div>} />
        <Route path="/update" element={<div><ModifyUE/></div>} />
        <Route path="/add" element={<div><AddUE/></div>} />
      </Route>
    </Routes>
  );
}

export default UEPage;
