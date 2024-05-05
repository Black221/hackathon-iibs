import { useEffect, useState } from "react";
import Select from "./Select";


interface Props {
  data: string[];
  onChange: (value: Edt[]) => void;
}

// interface Data {
//   label : string;
//   value : string;
// }

interface Edt{
  time: string;
  day: string;
  course: string;
}

export default function TimetableEdit (props: Props) {


  const DAYS = [
      "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
  ]

  const HOURS = [
      "8:00",  "10:00", "12:00",  "14:00", "16:00", "18:00", "20:00"
  ]



  const [edt, setEdt] = useState<Edt[]>([])

  const addEdt =(e:Edt) => {
    if(edt.filter((ed) => ed.time == e.time && ed.day == e.day).length == 0){
      setEdt([...edt, e])
    }

    if(edt.filter((ed) => ed.time == e.time && ed.day == e.day).length == 1){
      setEdt(edt.map((ed) => {
        if(ed.time == e.time && ed.day == e.day){
          return e
        }
        return ed
      }))
    }
  }

  useEffect(() => {
    props.onChange(edt)
    // eslint-disable-next-line
  }, [edt])

  return (<>
      <div className="border h-full w-full rounded-xl">
          <table className="w-full bg-white rounded-md h-full border-collapse">
              <thead className="h-16 ">
                  <tr className="">
                      <th className="py-2 px-6 ">
                          Time
                      </th>
                      {DAYS.map((d) => {
                          return (<th className="py-2 px-6">
                              {d}
                          </th>)
                      })}
                  </tr>
              </thead>
              <tbody className="">
                  {HOURS.map((h) => {
                      return <tr>
                          <td className="text-center">
                              {h}
                          </td>
                          {DAYS.map((d: string) => {
                              return (<td rowSpan={1} className={` text-center `}>
                                  <Select label="" options={props.data} onChange={(c) =>{
                                    addEdt({time: h, day: d, course: c})
                                  }} />
                              </td>)
                          })}
                      </tr>
                  })}
              </tbody>
          </table>
      </div>
  </>)
}
