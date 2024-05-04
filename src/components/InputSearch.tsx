import { useState } from "react";


interface Props {
    type?: string;
    floating?: boolean;
    placeholder?: string;
    onChange: (value: string) => void;
    className?: string;
}

export default function InputSearch(
    { onChange, type, placeholder, className }: Props
) {

    const [value, setValue] = useState<string | number>();

    const getValue = (value: string) => {
        setValue(value);
        onChange(value);
    }

    return (<>
        <div className={`w-full flex flex-col space-y-1 ${className}`}>
            <input type={type} id="name" placeholder={placeholder} className="border p-2 rounded-md" value={value} onChange={(e) => getValue(e.target.value)} />
        </div>
    </>)
}