import { useState } from "react";
import Input from "../../../components/Input";
import { Textarea } from "../../../components/Teaxarea";
import Button from "../../../components/Button";

export default function AddEvent() {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [startTime, setStartTime] = useState("");
    const [enTime, setEndTime] = useState("");

    const onSave = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(title, description, startTime, enTime);
    }
    return (
        <>
            <div className="mt-5 mx-auto border border-[#ccc] w-4/6 p-6 rounded-lg bg-white shadow-md">
                <h2 className="text-xl font-semibold mb-4">Add Event</h2>
                <form onSubmit={onSave} className="flex flex-col gap-4">
                    <Input type="text" label="title" onChange={setTitle} />
                    <Textarea label="description" onChange={setDescription} className={""} row={0} disabled={false} />
                    <div className="flex gap-5">
                        <Input type="time" label="start time" onChange={setStartTime} />
                        <Input type="time" label="end time" onChange={setEndTime} />
                    </div>
                    <Button label={"Save"} className="w-20 bg-[#0B5CFF] text-white rounded-lg hover:bg-[#0B5CFF]/90 py-2 transition-colors duration-300"  />
                </form>
            </div>
        </>
    );
}
