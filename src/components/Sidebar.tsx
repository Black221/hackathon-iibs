import DropLink from "../components/DropLink.tsx";


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

export const Sidebar = (props: ISidebar) => {

    return (<>

        <div className={`w-64 bg-white`}>
            <div className={`w-64 bg-main-bg h-screen drop-shadow-2xl shadow fixed z-10 text-center  space-y-10  top-0`}>

                <div className={"flex flex-col h-full overflow-y-scroll pt-6 pb-8 "}>

                    <h1 className={`text-4xl font-bold`}>
                        IIBS
                    </h1>

                    <div className={`w-full  text-start space-y-4 flex-1 pt-4`}>
                        {props.droplist.map((item, index) => <div key={index}>
                            <DropLink icon={item.icon} label={item.group} links={item.links} />
                        </div>)}
                    </div>

                    <div className={`w-full text-xl px-4 pb-4 flex justify-between items-center`}>
                    </div>
                </div>
            </div>
        </div>
    </>)
}