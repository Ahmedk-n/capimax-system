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
        title: "Investments",
        link: "https://www.google.com",
    },
    {
        id: 3,
        has_dropdown: false,
        title: "Global",
        link: "/global",
    },
    {
        id: 4,
        has_dropdown: true,
        title: "Insurance",
        link: "/insurance",
        sub_menus: [
            {
                link: "/insurance/iri",
                title: "CapiMax IRI"
            },
            {
                link: "/insurance/scp",
                title: "CapiMax SCP"
            },
        ]
    },
    {
        id: 5,
        has_dropdown: false,
        title: "CM Coin",
        link: "/cm-coin",
    },
    {
        id: 6,
        has_dropdown: false,
        title: "Contact",
        link: "/contact",
    },
];

export default menu_data;

