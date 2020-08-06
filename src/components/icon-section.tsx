/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import React from "react";
import IconBox from "./icon-box";

export interface IconSectionProps {
  iconBoxes: any[];
}

const IconSection: React.FC<IconSectionProps> = ({ iconBoxes }) => {
  const iconList = iconBoxes.map((icon, index) => (
    <IconBox key={`${icon.heading}-${index}`} icon={icon.icon} heading={icon.heading} />
  ));

  return (
    <div sx={{ backgroundColor: "primary" }}>
      <div
        sx={{ variant: "layout.container.box", px:[2,2,0] }}
        className="flex justify-between"
      >
        {iconList}
      </div>
    </div>
  );
};

export default IconSection;
