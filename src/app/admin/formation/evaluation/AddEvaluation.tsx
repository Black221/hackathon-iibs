import { useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";

export default function AddEvaluation() {
  const [noteTP, setNoteTP] = useState("");
  const [noteCC, setNoteCC] = useState("");
  const [noteDS, setNoteDS] = useState("");

  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ noteTP, noteCC, noteDS });
  };

  return (
    <div className="mt-5 mx-auto border border-[#ccc] w-5/6 p-6 rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4">Ajouter Evaluation</h2>
      <form onSubmit={onSave} className="flex flex-col gap-4">
        <Input type="number" label="Note TP" onChange={setNoteTP} />
        <Input type="number" label="Note CC" onChange={setNoteCC} />
        <Input type="number" label="Note DS" onChange={setNoteDS} />
        
        <Button
          label="Save"
          className="w-20 bg-[#0B5CFF] text-white rounded-lg hover:bg-[#0B5CFF]/90 py-2 transition-colors duration-300"
        />
      </form>
    </div>
  );
}

/**
 * AddEvaluation is nosense 
 */