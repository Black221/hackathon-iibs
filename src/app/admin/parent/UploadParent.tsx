

import { useEffect, useState } from "react"
import InputFile from "../../../components/InputFile"
import { Table } from "../../../components/Table"
import { Data, Column } from "../../../types/Table"


export default function UploadParent() {

    const [files, setFiles] = useState<FileList | null>()
    const [data, setData] = useState<Data[]>([])
    const [tmp, setTmp] = useState<any[]>([])

    const [columns, setColumns] = useState<Column[]>([])

    const sort = (data: Data[], sens: boolean, column: string) => {
        return data.sort((a, b) => {
            if (sens) {
                return a[column] > b[column] ? 1 : -1
            } else {
                return a[column] < b[column] ? 1 : -1
            }
        })
    }

    const CSVToArray = (data: string, delimiter = ',', omitFirstRow = false) =>
        data
          .slice(omitFirstRow ? data.indexOf('\n') + 1 : 0)
          .split('\n')
          .map(v => v.split(delimiter));

    useEffect(() => {
        if (files) {
            console.log(files)

            const reader = new FileReader()
            reader.onload = (e) => {
                const text = e.target?.result as string
                const data = CSVToArray(text, ';')
                data.map(row => {
                    //supress the '\r\n'
                    return row.map(column => column.replace('\r', ''))
                })
                const cols = data[0].map(col => {
                    const c: Column = { label: '', sort: sort }
                    c.label = col;
                    return c;
                })
                setColumns(cols)
                setTmp(data.slice(1))
            }
            reader.readAsText(files[0])
        }
    }, [files])


    useEffect(() => {
        if (tmp && columns) {
            const d = tmp.map(row => {
                const obj: Data = {}
                row.map((col: string | number, index: number) => {
                    obj[columns[index].label] = col
                    return col
                })
                return obj
            })
            setData(d)
        }
    }, [tmp, columns])

    return (<>
        
        <div>

        </div>

        <InputFile getFiles={setFiles} />
        
        <Table label="Preview" data={data} columns={columns} actions={[]} search={false} />
    </>)
}