import { useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";


export default function AddCourse() {
  const [intitule, setIntitule] = useState("");
  const [code, setCode] = useState("");
  const [coefficient, setCoefficient] = useState("");
 

const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ intitule, code, coefficient });
};

  return (
    <div className="mt-5 mx-auto border border-[#ccc] w-5/6 p-6 rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4">Ajouter une Matiere</h2>
      <form onSubmit={onSave} className="flex flex-col gap-4">
        <Input type="text" label="Titre" onChange={setIntitule} />
        <Input type="text" label="Code" onChange={setCode} />
        <Input type="text" label="Coefficient" onChange={setCoefficient} />
        
        
        <Button
          label="Enregistrer"
          className="w-32 bg-[#0B5CFF] text-white rounded-lg hover:bg-[#0B5CFF]/90 py-2 transition-colors duration-300"
        />
      </form>
    </div>
  );
}


