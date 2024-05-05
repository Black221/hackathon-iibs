import { Calendar } from "../../../components/Calendar";
import TimetableMobile from "../../../components/TimetableMobile";



export default function Page () { 

    return (<>
        
        <h1 className="text-2xl font-bold p-4">Emploi du temps</h1>
        
        <div>
            <TimetableMobile data={[
                {
                    day: "Monday",
                    start: "10:00",
                    course: "Mathematics",
                    end: "12:00"
                },
                {
                    day: "Monday",
                    start: "14:00",
                    course: "Physics",
                    end: "16:00"
                },
                {
                    day: "Tuesday",
                    start: "8:00",
                    course: "Chemistry",
                    end: "10:00"
                },
                {
                    day: "Tuesday",
                    start: "12:00",
                    course: "Biology",
                    end: "14:00"
                },
                {
                    day: "Wednesday",
                    start: "16:00",
                    course: "History",
                    end: "18:00"
                },
                {
                    day: "Wednesday",
                    start: "20:00",
                    course: "Geography",
                    end: "22:00"
                },
                {
                    day: "Thursday",
                    start: "8:00",
                    course: "English",
                    end: "10:00"
                },
                {
                    day: "Thursday",
                    start: "12:00",
                    course: "French",
                    end: "14:00"
                },
                {
                    day: "Friday",
                    start: "16:00",
                    course: "Spanish",
                    end: "18:00"
                },
                {
                    day: "Friday",
                    start: "20:00",
                    course: "German",
                    end: "22:00"
                },
                {
                    day: "Saturday",
                    start: "8:00",
                    course: "Latin",
                    end: "10:00"
                },
                {
                    day: "Saturday",
                    start: "12:00",
                    course: "Greek",
                    end: "14:00"
                },
                {
                    day: "Sunday",
                    start: "16:00",
                    course: "Italian",
                    end: "18:00"
                },
                {
                    day: "Sunday",
                    start: "20:00",
                    course: "Russian",
                    end: "22:00"
                }
            ]} />
            
            <h1 className="text-2xl font-bold p-4 py-6">Evenements</h1>
            <Calendar getDate={() => {}} dateToColor={[]} />

            <div>
                <div className="p-4">
                    <div className="text-xl font-bold">Lundi 12 Juillet</div>
                    <div className="p-2">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-blue-100 rounded-full"></div>
                            <div>
                                <div className="text-lg font-bold">Mathematics</div>
                                <div className="text-sm">10:00 - 12:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-red-100 rounded-full"></div>
                            <div>
                                <div className="text-lg font-bold">Physics</div>
                                <div className="text-sm">14:00 - 16:00</div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-4">
                    <div className="text-xl font-bold">Mardi 13 Juillet</div>
                    <div className="p-2">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-green-100 rounded-full"></div>
                            <div>
                                <div className="text-lg font-bold">Chemistry</div>
                                <div className="text-sm">8:00 - 10:00</div>
                            </div>
                        </div>
                    </div>
                    <div className="p-2">
                        <div className="flex items-center space-x-4">
                            <div className="w-16 h-16 bg-yellow-100 rounded-full"></div>
                            <div>
                                <div className="text-lg font-bold">Biology</div>
                                <div className="text-sm">12:00 - 14:00</div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </>)
}