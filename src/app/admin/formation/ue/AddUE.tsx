import { useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

export default function AddUE() {
  const [codeUE, setCodeUE] = useState("");
  const [intitule, setIntitule] = useState("");
  const [credit, setCredit] = useState("");
  const [level, setLevel] = useState("DIC 1 INFO" as string);

  const onSave = (e:any) => {
    e.preventDefault();
    console.log({ codeUE, intitule, credit, level });
  };

  return (
    <div className="mt-5 mx-auto border border-[#ccc] w-5/6 p-6 rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4">Ajouter UE</h2>
      <form onSubmit={onSave} className="flex flex-col gap-4">
        <Select label="Niveau" options={[
          "DIC 1 INFO ",
          "DIC 1 TRONC COMMUN",
          "DIC 1 TR",
        ]} onChange={setLevel}/>
        <Input type="text" label="Code UE" onChange={setCodeUE} />
        <Input type="text" label="titre" onChange={setIntitule} />
        <Input type="text" label="Credit" onChange={setCredit} />

        <Button
          label="Enregistrer"
          className="w-32 bg-[#0B5CFF] text-white rounded-lg hover:bg-[#0B5CFF]/90 py-2 transition-colors duration-300"
        />
      </form>
    </div>
  );
}
