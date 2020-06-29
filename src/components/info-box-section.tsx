/** @jsx jsx */
import { jsx, Heading } from "theme-ui";

import React from "react";

import InfoBox, { InfoBoxProps } from "./info-box";

export interface InfoboxSectionProps {
  infoboxes: InfoBoxProps[];
}

const InfoBoxSection: React.FC<InfoboxSectionProps> = ({ infoboxes }) => {
  const infoboxList = infoboxes.map((infobox, index) => (
    <InfoBox
      key={infobox.heading}
      message={infobox.message}
      heading={infobox.heading}
    />
  ));

  return (
    <div className="bg-blue-800">
      <div
        sx={{ variant: "layout.container.box" }}
        className="flex items-stretch"
      >
        {infoboxList}
      </div>
    </div>
  );
};

export default InfoBoxSection;