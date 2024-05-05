import { useState } from "react";
import Button from "../../../../components/Button";
import Input from "../../../../components/Input";
import Select from "../../../../components/Select";

export default function AddLevel() {
  const [codeNiveau, setCodeNiveau] = useState("");
  const [libelle, setLibelle] = useState("");
  const [level, setLevel] = useState("");

  const onSave = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log({ codeNiveau, libelle, level });
  };

  return (
    <div className="mt-5 mx-auto border border-[#ccc] w-5/6 p-6 rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4">Ajouter une Classe</h2>
      <form onSubmit={onSave} className="flex flex-col gap-4">
        <Input type="text" label="Code Niveau" onChange={setCodeNiveau} />
        <Input type="text" label="Libelle" onChange={setLibelle} />
        <Select label="Matiere" options={[
            "Langage C",
            "Reseaux Avancés",
            "Base de Données",
            "Programmation Web",
            "Intelligence Artificielle",
        ]} onChange={setLevel} />
        <Button
          label="Enregistrer"
          className="w-32 bg-[#0B5CFF] text-white rounded-lg hover:bg-[#0B5CFF]/90 py-2 transition-colors duration-300"
        />
      </form>
    </div>
  );
}
