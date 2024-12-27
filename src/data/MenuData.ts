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
        title: "Our Services",
        link: "/#investment-plans", // Changed from #feature to be more semantic
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Global",
        link: "/global",
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
        title: "Investments",
        link: "/opportunities",
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];
export default menu_data;

