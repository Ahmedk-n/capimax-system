interface MenuItem {
    id: number;
    title: string;
    link: string;
    has_dropdown: boolean;
    sub_menus?: {
        link: string;
        title: string;
    }[];
}[];

const menu_data: MenuItem[] = [
    
    {
        id: 1,
        has_dropdown: false,
        title: "Home",
        link: "/",
    },
    {
        id: 2,
        has_dropdown: false,
        title: "Investement Plans",
        link: "/#feature",
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Charts",
        link: "/#chart",
    },
    {
        id: 4,
        has_dropdown: false,
        title: "Benefits",
        link: "/#roadMap",
    },
    {
        id: 5,
        has_dropdown: false,
        title: "Opportutnites",
        link: "/oppotunities",
   },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];
export default menu_data;
