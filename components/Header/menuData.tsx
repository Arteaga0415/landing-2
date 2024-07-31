import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Inicio",
    newTab: false,
    path: "/",
  },
  {
    id: 1.1,
    title: "Nuestros Planes",
    newTab: false,
    path: "/pricing",
  },
  {
    id: 1.2,
    title: "Quienes Somos",
    newTab: false,
    path: "/nosotros",
  },
  {
    id: 2,
    title: "Servicios",
    newTab: false,
    path: "/services",
  },
  {
    id: 2.1,
    title: "Neutralidad",
    newTab: false,
    path: "/#about",
  },
  {
    id: 2.2,
    title: "Noticias",
    newTab: false,
    path: "/blog",
  },
  // {
  //   id: 2.3,
  //   title: "Docs",
  //   newTab: false,
  //   path: "/docs",
  // },
  // {
  //   id: 3,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     {
  //       id: 31,
  //       title: "Blog Grid",
  //       newTab: false,
  //       path: "/blog",
  //     },
  //     {
  //       id: 34,
  //       title: "Sign In",
  //       newTab: false,
  //       path: "/auth/signin",
  //     },
  //     {
  //       id: 35,
  //       title: "Sign Up",
  //       newTab: false,
  //       path: "/auth/signup",
  //     },
  //     {
  //       id: 35,
  //       title: "Docs",
  //       newTab: false,
  //       path: "/docs",
  //     },
  //     {
  //       id: 35.1,
  //       title: "Support",
  //       newTab: false,
  //       path: "/support",
  //     },
  //     {
  //       id: 36,
  //       title: "404",
  //       newTab: false,
  //       path: "/error",
  //     },
  //   ],
  // },

  {
    id: 4,
    title: "Contactenos",
    newTab: false,
    path: "/support",
  },
];

export default menuData;
