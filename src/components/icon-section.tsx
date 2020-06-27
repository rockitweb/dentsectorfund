/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import React from "react";
import IconBox from "./icon-box";

export interface IconSectionProps {
  icons: any[];
}

const IconSection: React.FC<IconSectionProps> = ({ icons }) => {
  const iconList = icons.map((icon, index) => (
    <IconBox key={icon.heading} icon={icon.icon} heading={icon.heading} />
  ));

  return <div className="bg-blue-800 flex">{iconList}</div>;
};

export default IconSection;
