/** @jsx jsx */
import { jsx, Flex, Button, Grid, Heading } from "theme-ui";
import React, { useEffect, useState } from "react";
import ReportCategories from "./report-categories";

export type ReportsProps = {
  categories: {
    categoryName: string;
    report: {
      reportName: string;
      report: {
        localFile: {
          relativePath: string;
          publicURL: string;
        };
      };
    }[];
  }[];
};
export const Reports: React.FC<ReportsProps> = ({ categories }) => {
  const [categoryFilter, setCategoryFilter] = useState("All");
  const [useCategories, setUseCategories] = useState(categories);
console.log(categories)
  useEffect(() => {
    const tempCategories = categories.filter(
      (c) => categoryFilter === "All" || c.categoryName === categoryFilter
    );

    setUseCategories(tempCategories);
  }, [categoryFilter]);

  const filters = categories.map((c, i) => (
    <Button
      variant={
        c.categoryName === categoryFilter ? "primary" : "primary.outline"
      }
      sx={{ fontSize: [2, 2, 2] }}
      key={`${c.categoryName}-${i}`}
      onClick={() => setCategoryFilter(c.categoryName)}
    >
      {c.categoryName}
    </Button>
  ));

  return (
    <Flex
      variant="layout.container.box"
      sx={{ flexDirection: "column", width: "100%" }}
    >
      <Grid
        px={["5%"]}
        pb={"20px"}
        columns={["repeat(auto-fit, minmax(150px, 1fr))"]}
        sx={{}}
      >
        <Button
          variant={"All" === categoryFilter ? "primary" : "primary.outline"}
          onClick={() => setCategoryFilter("All")}
        >
          {"All"}
        </Button>
        {filters}
      </Grid>
      <ReportCategories categories={useCategories} />
    </Flex>
  );
};

export default Reports;
