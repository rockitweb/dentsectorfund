/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import React from "react";

import InfoBox, { InfoBoxProps } from "./info-box";

export interface InfoboxSectionProps {
  infoBoxes: InfoBoxProps[];
}

const InfoBoxSection: React.FC<InfoboxSectionProps> = ({ infoBoxes }) => {
  const infoboxList = infoBoxes.map((infobox, index) => (
    <InfoBox
      key={infobox.heading}
      message={infobox.message}
      heading={infobox.heading}
    />
  ));

  return (
    <div sx={{ backgroundColor: "primary" }}>
      <div
        sx={{ variant: "layout.container.box", px:[2,2,0]}}
        className="flex justify-between"
      >
        {infoboxList}
      </div>
    </div>
  );
};

export default InfoBoxSection;
