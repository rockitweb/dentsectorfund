/** @jsx jsx */
import { jsx, MenuButton } from 'theme-ui';
import { Fragment, useState } from 'react';
import { Link, useStaticQuery, graphql } from 'gatsby';

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
console.log(contentfulMenu);
  const mainMenu: Menu[] = contentfulMenu.menuItems;

  const menu = mainMenu
    .map((menu, i) => (
      <li key={i}>
        <Link
          to={menu.path}
          activeClassName="active"
          sx={{
            color: 'inherit',
            '&.active': {
              color: 'primary',
            },
            variant: 'nav.link',
            p: 2,
          }}
        >
          {menu.label}
        </Link>
      </li>
    ));

  return (
    <Fragment>
      <div className="lg:hidden">
        <MenuButton onClick={() => toggleExpansion(!isExpanded)}></MenuButton>
      </div>

      <div
        className={`${
          isExpanded ? `block` : `hidden`
        } lg:flex lg:items-center lg:w-auto w-full`}
      >
        <nav
          sx={{
            variant: 'nav',
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
