
import Icon from '../components/Icon';
import { ISidebar } from '../types/sidebar';


export const etudiantidebar: ISidebar = {

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
                    to: "/student/liste",
                },
                {
                    name: "Add",
                    icon: "fas fa-plus",
                    to: "/student/ajouter",
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
                    to: "/teacher/liste",
                },
                {
                    name: "Add",
                    icon: "fas fa-plus",
                    to: "/teacher/ajouter",
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
            group: "Calendrier",
            links: [
                {
                    name: "Evenements",
                    icon: <Icon name={"fas fa-calendar"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/calendrier",
                },
                {
                    name: "Ajouter Evenement",
                    icon: <Icon name={"fas fa-calendar-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/calendrier/ajouter",
                },
                {
                    name: "EDT",
                    icon: <Icon name={"fas fa-calendar-alt"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/calendrier/edt",
                },
                {
                    name: "Ajouter EDT",
                    icon: <Icon name={"fas fa-calendar-alt"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/calendrier/ajouter-edt",
                }
            ],
        },
        {
            icon: <Icon name="fas fa-users" size={18} color={"#000"} onClick={() => { }} />,
            group: "Etudiant",
            links: [
                {
                    name: "Liste des étudiant",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/etudiants/liste",
                },
                {
                    name: "Ajouter étudiant",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/etudiants/ajouter",
                },
                {
                    name: "Upload étudiant",
                    icon: <Icon name={"fas fa-upload"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/etudiants/upload",
                }
            ],
        },
        {
            icon: <Icon name="fas fa-chalkboard-teacher" size={18} color={"#000"} onClick={() => { }} />,
            group: "Enseignant",
            links: [
                {
                    name: "Liste des enseignants",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/enseignants/liste",
                },
                {
                    name: "Ajouter enseignant",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/enseignants/ajouter",
                },
                {
                    name: "Upload enseignants",
                    icon: <Icon name={"fas fa-upload"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/enseignants/upload",
                },
            ],
        },
        {
            icon: <Icon name="fas fa-user-friends" size={18} color={"#000"} onClick={() => { }} />,
            group: "Parents",
            links: [
                {
                    name: "Liste des parents",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/parents/liste",
                },
                {
                    name: "Ajouter parent",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/parents/ajouter",
                },
                {
                    name: "Upload parents",
                    icon: <Icon name={"fas fa-upload"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/parents/upload",
                },
            ],
        },
        {
            icon: <Icon name="fas fa-graduation-cap" size={18} color={"#000"} onClick={() => { }} />,
            group: "Formations",
            links: [
                {
                    name: "Liste des formations",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/formations/liste",
                },
                {
                    name: "Ajouter formation",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/formations/ajouter",
                },
                {
                    name: "Upload formations",
                    icon: <Icon name={"fas fa-upload"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/formations/upload",
                },
            ],
        },
        {
            icon: <Icon name="fas fa-money-bill-wave" size={18} color={"#000"} onClick={() => { }} />,
            group: "Paiements",
            links: [
                {
                    name: "Liste des paiements",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/paiements/liste",
                },
            ],
        },
        {
            icon: <Icon name="fas fa-clipboard-list" size={18} color={"#000"} onClick={() => { }} />,
            group: "Pointages",
            links: [
                {
                    name: "Liste des pointages",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/pointages/liste",
                }
            ],
        },
        {
            icon: <Icon name="fas fa-bell" size={18} color={"#000"} onClick={() => { }} />,
            group: "Notifications",
            links: [
                {
                    name: "Liste des notifications",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/notifications/liste",
                },
                {
                    name: "Nouvelle notification",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/notifications/envoi",
                },
            ],
        },
        {
            icon: <Icon name="fas fa-book" size={18} color={"#000"} onClick={() => { }} />,
            group: "Bibliothèque",
            links: [
                {
                    name: "Liste des livres",
                    icon: <Icon name={"fas fa-list"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/bibliotheque/liste",
                },
                {
                    name: "Ajouter livre",
                    icon: <Icon name={"fas fa-plus"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/bibliotheque/ajouter",
                },
                {
                    name: "Upload livres",
                    icon: <Icon name={"fas fa-upload"} size={18} color={"#000"} onClick={() => { }} />,
                    to: "/admin/bibliotheque/upload",
                },
            ],
        }
    ],
    foot: {
        link: <a href={"/"}>Home</a>,
        icon: "fas fa-home",
    }
}