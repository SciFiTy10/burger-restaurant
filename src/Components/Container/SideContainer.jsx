import React from "react";
import HideOnPhone from "../Hidden/HideOnPhone";
import GridItem from "../Layout/Grid/GridItem";

const SideContainer = () => {
  return (
    <HideOnPhone>
      <GridItem sm={1} />
    </HideOnPhone>
  );
};

export default SideContainer;
