import React from "react";
import HideOnPhone from "../Hidden/HideOnPhone";
import GridItemContainer from "./Grid/GridItemContainer";

const SideContainer = () => {
  return (
    <HideOnPhone>
      <GridItemContainer smSpacing={1} />
    </HideOnPhone>
  );
};

export default SideContainer;
