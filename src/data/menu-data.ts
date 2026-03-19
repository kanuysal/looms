import { IMenuDT } from "@/types/menu-d-t";

const menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'home',
    link: '/',
  },
  {
    id: 2,
    title: 'departments',
    link: '/department',
    dropdown_menus: [
      { title: 'fibers', link: '/fibers' },
      { title: 'yarns', link: '/yarns' },
      { title: 'fabrics', link: '/fabrics' },
      { title: 'nonwoven', link: '/nonwoven' },
      { title: 'sanitary', link: '/sanitary' },
      { title: 'services', link: '/department' },
    ]
  },
  {
    id: 3,
    title: 'about',
    link: '/about-us',
  },
  {
    id: 4,
    title: 'contact',
    link: '/contact',
  }
];

export default menu_data;

// mobile menus 
export const mobile_menu_data: IMenuDT[] = [
  {
    id: 1,
    title: 'home',
    link: '/',
  },
  {
    id: 2,
    title: 'departments',
    link: '/department',
    dropdown_menus: [
      { title: 'fibers', link: '/fibers' },
      { title: 'yarns', link: '/yarns' },
      { title: 'fabrics', link: '/fabrics' },
      { title: 'nonwoven', link: '/nonwoven' },
      { title: 'sanitary', link: '/sanitary' },
      { title: 'services', link: '/department' },
    ]
  },
  {
    id: 3,
    title: 'about',
    link: '/about-us',
    dropdown_menus: []
  },
  {
    id: 4,
    title: 'contact',
    link: '/contact',
    dropdown_menus: []
  }
];
