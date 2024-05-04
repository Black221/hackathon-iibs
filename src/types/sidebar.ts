

export interface ISidebar {

    app: {
        title: string,
        link: React.ReactElement,
        logo: any,
    };
    droplist : {
        icon?: React.ReactElement,
        group: string,
        links: {
            to: string,
            name: string,
            icon: any,
        }[]
    }[];
    foot: {
        link: React.ReactElement,
        icon: any,
    }
}