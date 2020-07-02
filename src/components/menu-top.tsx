/** @jsx jsx */
import { jsx, MenuButton } from "theme-ui";
import { Fragment, useState } from "react";
import { Link, useStaticQuery, graphql } from "gatsby";

export interface Menu {
  label: string;
  path: string;
}

export default function MenuTopNav() {
  const [isExpanded, toggleExpansion] = useState(false);
  const { contentfulMenu } = useStaticQuery(graphql`
    query TopMenu {
      contentfulMenu(name: { eq: "TopMenu" }) {
        name
        menuItems {
          label
          path
        }
      }
    }
  `);

  const mainMenu: Menu[] = contentfulMenu.menuItems;

  const menu = mainMenu.map((menu, i) => (
    <li key={i}>
      <Link
        to={menu.path}
        activeClassName="active"
        sx={{
          color: "inherit",
          "&.active": {
            color: "secondary",
          },
          variant: "nav.link",
          p: 2,
        }}
      >
        {menu.label}
      </Link>
    </li>
  ));

  return (
    <Fragment>
      <div className="lg:hidden pr-4">
        <div
          sx={{
            width: "25px",
            height: "auto",
            color: "secondary",
            cursor: "pointer",
            zIndex: 5000,
          }}
          onClick={() => toggleExpansion(!isExpanded)}
        >
          <svg
            className="fill-current"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 180 138"
          >
            <path d="M92.334 131.27c-9.7-2.612-16.31-6.15-31-16.6-16.556-11.777-20.294-13.565-29.94-14.322-5.987-.47-10.193.09-16.352 2.175-4.56 1.545-8.6 2.808-9 2.808s-.71-5.115-.71-11.366c0-13.064-.475-12.585 15.346-15.5 16.455-3.032 30.656 1.718 52.86 17.68 27.385 19.687 39.13 19.568 65.65-.668 12.254-9.35 18.012-12.333 27.143-14.062L172 80.342v21.96l-5.667 2.18c-3.117 1.2-10.167 5.793-15.667 10.207-20.55 16.494-39.087 21.762-58.332 16.58zm0-33.333c-9.7-2.612-16.31-6.15-31-16.6C44.777 69.56 41.04 67.77 31.393 67.014c-5.987-.47-10.193.09-16.352 2.175-4.56 1.545-8.6 2.808-9 2.808s-.71-5.115-.71-11.366c0-13.064-.475-12.585 15.346-15.5 16.455-3.032 30.656 1.718 52.86 17.68 27.385 19.687 39.13 19.568 65.65-.668 12.254-9.35 18.012-12.333 27.143-14.062L172 47.01v21.96l-5.667 2.18c-3.117 1.2-10.167 5.793-15.667 10.207-20.55 16.494-39.087 21.762-58.332 16.58zm0-36c-9.7-2.612-16.31-6.15-31-16.6C44.777 33.56 41.04 31.77 31.393 31.014c-5.987-.47-10.193.09-16.352 2.176-4.56 1.545-8.6 2.81-9 2.81s-.71-5.115-.71-11.366c0-13.064-.475-12.585 15.346-15.5 16.455-3.032 30.656 1.718 52.86 17.68 27.385 19.687 39.13 19.568 65.65-.668 12.254-9.35 18.012-12.333 27.143-14.062L172 11.01v21.96l-5.667 2.18c-3.117 1.2-10.167 5.793-15.667 10.207-20.55 16.494-39.087 21.762-58.332 16.58z" />
          </svg>
        </div>
      </div>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } lg:flex lg:items-center lg:w-auto w-full`}
      >
        <nav
          sx={{
            variant: "nav",
            backgroundColor: isExpanded ? "primary" : "",
          }}
        >
          <ul className="lg:flex items-center justify-between pt-4 lg:pt-0">
            {menu}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}
/*
 <MenuButton sx={{}} onClick={() => toggleExpansion(!isExpanded)}></MenuButton>
  
*/
