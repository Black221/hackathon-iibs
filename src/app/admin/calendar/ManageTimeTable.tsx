import { useState } from "react";
import Button from "../../../components/Button";
import TimetableEdit from "../../../components/TimetableEdit";
import Input from "../../../components/Input";
import Select from "../../../components/Select";

export default function ManageTimeTable() {
  const [steps, setSteps] = useState(0);
  const [, setDateDebut] = useState("");
   const [, setDateFin] = useState("");

  const data = ["", "Maths", "Physique", "Langage C", "Java", "JavaScript", "Anglais"];

  return (
    <>
      <div className="flex flex-col space-y-4 items-center justify-center">
        <div className="border rounded-md p-6 w-full space-y-6">
          <div>
            <div className="flex w-full justify-between items-center">
              <div
                className={`w-6 h-6 rounded-full ${
                  steps >= 0 ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`flex-1 h-1 ${
                  steps >= 1 ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`w-6 h-6 rounded-full ${
                  steps >= 1 ? "bg-blue-500" : "bg-gray-300"
                }`}
              ></div>
              
            </div>
            <div className="flex items-center justify-between mt-2"></div>
          </div>
          <hr />

          <div>
            {steps === 0 && (
              <div className="w-4/6 flex  gap-5 flex-col">
                <h2 className="text-2xl font-bold mb-6">
                  Informations sur l'emploi du temps
                </h2>
                <Select label="Classe" onChange={() => {}} options={[
                    "",
                    "DIC 1 INFO",
                    "DIC 1 TRONC COMMUN",
                    "DIC 1 TR",
                    "DUT 1 INFO",
                    "DUT 2 INFO",
                    "DIC 2 INFO",
                    "DIC 3 INFO"
                ]} className="w-3/5"/>
                <div className="flex items-center justify-between w-3/6 gap-10">
                  <Input type="date" label="Date Debut" onChange={setDateDebut} className="w-40" />
                  <Input type="date" label="Date Fin" onChange={setDateFin} className="w-40" />
                </div>
              </div>
            )}

            {steps === 1 && (
              <div>
                <h2 className="text-2xl font-bold mb-6 text-[#ccc]/90 text-center">Emploi du Temps</h2>
                <div className="scale-[0.9]">
                  <TimetableEdit
                    data={data}
                    onChange={(e) => {
                      console.log(e);
                    }}
                  />
                </div>
              </div>
            )}
          </div>

          <div className="flex justify-between">
            <Button
              label="Précedent"
              onClick={() =>
                setSteps((prev) => {
                  if (prev > 0) return prev - 1;
                  return prev;
                })
              }
            />
            {steps < 3 && (
              <Button
                label={steps === 2 ? "Terminer" : "Suivant"}
                onClick={() => {
                  if (steps === 0) {
                    setSteps(1);
                  } else if (steps === 2) {
                    setSteps(3);
                  } else {
                    setSteps((prev) => {
                      if (prev < 3) return prev + 1;
                      return prev;
                    });
                  }
                }}
              />
            )}
          </div>
        </div>
      </div>
    </>
  );
}
