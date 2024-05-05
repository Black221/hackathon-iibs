import {useEffect, useState} from "react";
import Pagination from "./Pagination";
import Input from "./Input";

interface Props {
    readonly data: Data [];
    label: string;
    columns: Column[];
    palette?: Color;
    actions: Action[];
    search?: boolean;
    add?: React.ReactElement;
}

interface Column {
    label: string;
    sort: (data: Data[], sens: boolean, column: string) => any;
}

interface Action {
    element: React.ReactElement;
    ref: string;
    onClick: (data:string | number) => void;
}

interface Color {
    text: string;
    bg: string;
    border: string;
}

interface Data {
    [index: string]: string | number;
}

export const Table = ({label, columns, data, actions, search = true, add}: Props) => {

    const [sens, setSens] = useState<boolean>(false);
    const [current, setCurrent] = useState<Column>();
    const [display, setDisplay] = useState<Data[]>([])
    const [page, setPage] = useState<number>(0);

    const [nbRender, setNbRender] = useState<number>(5);

    useEffect(() => {
        setDisplay(data.slice(page, nbRender))
        // eslint-disable-next-line
    }, [])



    const sort = (column: Column) => {
        setDisplay(column.sort(data, sens, column.label).slice(0, nbRender));
        
        const nSens = (current === column ? !sens : true);
        setSens(nSens)
        setCurrent(column)
    }


    const onSetPage = (page: string | number, nbRender: number) => {
        setDisplay(() => {
            return data.slice(page as number * nbRender, (page as number + 1) * nbRender)
        })
        setPage(page as number)
    }

    const [searchValue, setSearchValue] = useState<string>("");

    useEffect(() => {
        if (searchValue === "") {
            setDisplay(data.slice(page, nbRender))
        } else {
            setDisplay(data.filter((d) => {
                return Object.values(d).some((v) => {
                    return v.toString().toLowerCase().includes(searchValue.toLowerCase())
                })
            }))
        }
        // eslint-disable-next-line
    }, [searchValue])

    return (<>

        <div className="w-full bg-white space-y-10">
            <div className="flex justify-between items-center ">
                <h1 className="flex-1 text-start text-2xl font-bold text-gray-900">{label}</h1>
                <div className="flex items-center">
                    {search && <Input className="w-80" placeholder="Rechercher" type="text" label='' onChange={setSearchValue} />}
                    {add}
                </div>
            </div>

            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 ">

                    <thead className="text-sm text-gray-700 uppercase bg-gray-50 ">
                        <tr>
                            {columns && columns.map((c: Column, index: number) => (
                                <th key={index} scope="col" className="px-3 py-3">
                                    <button className={"uppercase"} onClick={() => sort(c)}>{c.label}</button>
                                </th>
                            ))}
                            {actions && actions.length > 0 && <th colSpan={actions.length} scope="col" className="px-3 py-3">
                                Actions
                            </th>}
                        </tr>
                    </thead>

                    <tbody>
                        {display ? display.map((d, index) => (
                            <tr key={index} className="bg-white border-b">
                                {columns && columns.map((c, index: number) => (
                                    <th key={index} scope="col" className="px-3 py-3">
                                        {d[c.label]}
                                    </th>
                                ))}
                                {actions && actions.map((a, index) => (
                                    <th key={index} scope="col" onClick={() => a.onClick(d[a.ref])} className="px-3 py-3 text-light text-blue-400 border-l underline">
                                        {a.element}
                                    </th>
                                ))}
                            </tr>
                        )) : <div>
                            Pas de ressource disponible!
                        </div>}
                    </tbody>
                </table>
            </div>

            <Pagination page={page} length={nbRender} dataCount={data.length} action={onSetPage} render={setNbRender} />
        </div>
    </>)
}
