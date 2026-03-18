'use client';
import React from "react";
import Link from "next/link";
import { mobile_menu_data } from "@/data/menu-data";
import { useTranslation } from "@/provider/LanguageProvider";

export default function MobileMenusTwo() {
  const { t } = useTranslation();
  const [navTitle, setNavTitle] = React.useState<string>("");

  //openMobileMenu
  const openMobileMenu = (menu: string) => {
    if (navTitle === menu) {
      setNavTitle("");
    } else {
      setNavTitle(menu);
    }
  };

  const getMenuTitle = (title: string) => {
    const key = title.toLowerCase() as any;
    if (t(key) !== key) return t(key);
    return title;
  };

  return (
    <nav className="tp-main-menu-content">
      <ul>
        {mobile_menu_data.map((menu) => (
          <li key={menu.id} className="has-dropdown">
            {!menu.dropdown_menus || menu.dropdown_menus.length === 0 ? (
              <Link href={menu.link} className="pointer">{getMenuTitle(menu.title)}</Link>
            ) : (
              <>
                <a className="pointer" onClick={() => openMobileMenu(menu.title)}>
                  {getMenuTitle(menu.title)}
                  <button
                    className="dropdown-toggle-btn"
                  >
                    <i className="fa-light fa-plus"></i>
                  </button>
                </a>
                <ul
                  className="tp-submenu submenu"
                  style={{ display: navTitle === menu.title ? "block" : "none" }}
                >
                  {menu.dropdown_menus.map((dm, i) => (
                    <li key={i}>
                      <Link href={dm.link}>{getMenuTitle(dm.title)}</Link>
                    </li>
                  ))}
                </ul>
              </>
            )}
          </li>
        ))}
      </ul>
    </nav>
  );
}
