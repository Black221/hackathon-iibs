import { useState } from "react";
import Button from "../../../components/Button";
import Input from "../../../components/Input";
import { Textarea } from "../../../components/Teaxarea";

export default function AddTeacher() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [teacherId, setTeacherId] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState("");
  const [address, setAddress] = useState("");
  const [sexe, setSexe] = useState("");
  const [salary, setSalary] = useState("");

  const onSave = (e: React.FormEvent) => {
    e.preventDefault();
    console.log({
      firstName,
      lastName,
      teacherId,
      phoneNumber,
      email,
      dateOfBirth,
      address,
      sexe,
      salary,
    });
  };

  return (
    <div className="mt-5 mx-auto border border-[#ccc] w-5/6 p-6 rounded-lg bg-white shadow-md">
      <h2 className="text-xl font-semibold mb-4">Add Teacher</h2>
      <form onSubmit={onSave} className="flex flex-col gap-4">
        <Input type="text" label="First Name" onChange={setFirstName} />
        <Input type="text" label="Last Name" onChange={setLastName} />
        <Input type="text" label="Teacher ID" onChange={setTeacherId} />
        <Input type="tel" label="Phone Number" onChange={setPhoneNumber} />
        <Input type="email" label="Email" onChange={setEmail} />
        <Input type="date" label="Date of Birth" onChange={setDateOfBirth} />
        <Textarea
          label="Address"
          onChange={setAddress}
          className=""
          row={3}
          disabled={false}
        />
        <div className="flex gap-5">
          <Input type="radio" label="Male" name="gender" onChange={setSexe} />
          <Input type="radio" label="Female" name="gender" onChange={setSexe} />
        </div>
        <Input type="text" label="Salary" onChange={setSalary} />
        <Button
          label="Save"
          className="w-20 bg-[#0B5CFF] text-white rounded-lg hover:bg-[#0B5CFF]/90 py-2 transition-colors duration-300"
        />
      </form>
    </div>
  );
}
