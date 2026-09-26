export interface MenuItem {
  id: number;
  title: string;
  link: string;
  img_dropdown?: boolean;
  has_dropdown?: boolean;
  sub_menus?: any[];
}

const menu_data: MenuItem[] = [
  {
    id: 1,
    title: "Home",
    link: "#",
    has_dropdown: false,
  },
  {
    id: 2,
    title: "About Me",
    link: "#about-me",
    has_dropdown: false,
  },
  {
    id: 3,
    title: "Services",
    link: "#services",
    has_dropdown: false,
  },
  {
    id: 5,
    title: "Contact",
    link: "#contact",
    has_dropdown: false,
  },
];

export default menu_data;
