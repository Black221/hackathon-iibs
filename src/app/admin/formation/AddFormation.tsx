import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";

export default function AddFormation() {
  const [formation, setFormation] = useState("");
  const [label, setLabel] = useState("");

  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ formation, label });
  };

  return (
    <div className="mt-5 mx-auto border border-[#ccc] w-5/6 p-6 rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4">Ajouter une Formation </h2>
      <form onSubmit={onSave} className="flex flex-col gap-4">
        <Input type="text" label="Formation" onChange={setFormation} />
        <Input type="text" label="Label" onChange={setLabel} />
        
        <Button
          label="Enregistrer"
          className="w-20 bg-[#0B5CFF] text-white rounded-lg hover:bg-[#0B5CFF]/90 py-2 transition-colors duration-300"
        />
      </form>
    </div>
  );
}

