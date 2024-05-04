
import Icon from '../components/Icon';
import { ISidebar } from '../types/sidebar';


export const StudentSidebar: ISidebar = {

    app: {
        title: "Student",
        logo: "fas fa-home",
        link: <a href={"/"}>Home</a>,
    },
    droplist: [
        {
            group: "Student",
            links: [
                {
                    name: "List",
                    icon: "fas fa-list",
                    to: "/student/list",
                },
                {
                    name: "Add",
                    icon: "fas fa-plus",
                    to: "/student/add",
                },
            ],
        },
    ],
    foot: {
        link: <a href={"/"}>Home</a>,
        icon: "fas fa-home",
    }
}

export const TeacherSidebar: ISidebar = {

    app: {
        title: "Teacher",
        logo: "fas fa-home",
        link: <a href={"/"}>Home</a>,
    },
    droplist: [
        {
            group: "Teacher",
            links: [
                {
                    name: "List",
                    icon: "fas fa-list",
                    to: "/teacher/list",
                },
                {
                    name: "Add",
                    icon: "fas fa-plus",
                    to: "/teacher/add",
                },
            ],
        },
    ],
    foot: {
        link: <a href={"/"}>Home</a>,
        icon: "fas fa-home",
    }
}

export const AdminSidebar: ISidebar = {

    app: {
        title: "Admin",
        logo: "fas fa-home",
        link: <a href={"/"}>Home</a>,
    },
    droplist: [
        {
            icon: <Icon name="fas fa-calendar" size={18} color={"#000"} onClick={() => { }} />,
            group: "Calendar",
            links: [
                {
                    name: "Events",
                    icon: <Icon name={"fas fa-calendar"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/calendar/",
                },
                {
                    name: "New Event",
                    icon: <Icon name={"fas fa-calendar-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/calendar/add",
                },
                {
                    name: "Time tables",
                    icon: <Icon name={"fas fa-calendar-alt"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/calendar/timetable",
                },
            ],
        },
        {
            icon: <Icon name="fas fa-users" size={18} color={"#000"} onClick={() => { }} />,
            group: "Students",
            links: [
                {
                    name: "List of students",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/students/list",
                },
                {
                    name: "Add a student",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/students/add",
                },
                {
                    name: "Upload students",
                    icon: <Icon name={"fas fa-upload"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/students/upload",
                }
            ],
        },
        {
            icon: <Icon name="fas fa-chalkboard-teacher" size={18} color={"#000"} onClick={() => { }} />,
            group: "Teachers",
            links: [
                {
                    name: "List of teachers",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/teachers/list",
                },
                {
                    name: "Add a teacher",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/teachers/add",
                },
                {
                    name: "Upload teachers",
                    icon: <Icon name={"fas fa-upload"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/teachers/upload",
                },
            ],
        },
        {
            icon: <Icon name="fas fa-user-friends" size={18} color={"#000"} onClick={() => { }} />,
            group: "Parents",
            links: [
                {
                    name: "List of parents",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/parents/list",
                },
                {
                    name: "Add a parent",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/parents/add",
                },
                {
                    name: "Upload parents",
                    icon: <Icon name={"fas fa-upload"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/parents/assign",
                },
            ],
        },
        {
            icon: <Icon name="fas fa-graduation-cap" size={18} color={"#000"} onClick={() => { }} />,
            group: "Formations",
            links: [
                {
                    name: "List of formations",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/formations/list",
                },
                {
                    name: "Add a formation",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/formations/add",
                },
                {
                    name: "Upload formations",
                    icon: <Icon name={"fas fa-upload"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/formations/assign",
                },
            ],
        },
        {
            icon: <Icon name="fas fa-money-bill-wave" size={18} color={"#000"} onClick={() => { }} />,
            group: "Payments",
            links: [
                {
                    name: "List of payments",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/payments/list",
                },
                {
                    name: "Add a payment",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/payments/add",
                },
                {
                    name: "Upload payments",
                    icon: <Icon name={"fas fa-upload"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/payments/assign",
                },
            ],
        },
        {
            icon: <Icon name="fas fa-clipboard-list" size={18} color={"#000"} onClick={() => { }} />,
            group: "Pointing",
            links: [
                {
                    name: "List of pointings",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/pointings/list",
                },
                {
                    name: "Add a pointing",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/pointings/add",
                }
            ],
        },
        // {
        //     group: "Room",
        //     links: [
        //         {
        //             name: "List",
        //             icon: "fas fa-list",
        //             to: "/admin/room/list",
        //         },
        //         {
        //             name: "Add",
        //             icon: "fas fa-plus",
        //             to: "/admin/room/add",
        //         },
        //     ],
        // },
    ],
    foot: {
        link: <a href={"/"}>Home</a>,
        icon: "fas fa-home",
    }
}