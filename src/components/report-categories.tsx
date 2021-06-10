/** @jsx jsx */
import { jsx, Heading, Flex, Box, Link } from "theme-ui";
import React, { Fragment } from "react";
import { ReportsProps } from "./reports";

export type ReportCategoriesProps = ReportsProps;
export const ReportCategories: React.FC<ReportCategoriesProps> = ({
  categories,
}) => {
  const categoryElements = categories.map((c, i) => {
    const reports = c.report.map((r, i) => {
      return <Box as="li"><Link href={r.report.localFile.publicURL} target="blank">{r.reportName}</Link></Box>;
    });

    return (
      <Flex sx={{ flexDirection: "column" }}>
        <Heading pt={4} as="h2" sx={{ textAlign: "center", fontSize: [6] }}>
          {c.categoryName}
        </Heading>
        <Box as="ul">{reports}</Box>
      </Flex>
    );
  });

  return <Fragment >{categoryElements}</Fragment>;
};

export default ReportCategories;
