import React, { useContext } from "react";
import GridContainer from "../../Spacing/Grid/GridContainer";
import GridItem from "../../Spacing/Grid/GridItem";
import MuiTypography from "@material-ui/core/Typography";
import MuiCard from "@material-ui/core/Card";
import MuiCardHeader from "@material-ui/core/CardHeader";
import MuiCardContent from "@material-ui/core/CardContent";
import { AppContext } from "../../../Context/app-context";

const Welcome = () => {
  //get the context object
  const ctx = useContext(AppContext);
  //create variable for the header title
  const titleText = `Welcome to ${ctx.titleText}!`;

  return (
    <MuiCard>
      <MuiCardHeader
        title={titleText}
        titleTypographyProps={{ align: "center" }}
      ></MuiCardHeader>
      <MuiCardContent>
        <GridContainer justifyContent="center">
          <GridItem>
            <MuiTypography variant="body1" component="p" align="center">
              Choose one of our delicious, gourmet burgers prepared by our
              5-Star chef.
            </MuiTypography>
            <br />
            <MuiTypography variant="body1" component="p" align="center">
              Satisfaction is guaranteed. If you don't like our burgers, not
              only will we give you your money back, but we will personally
              throw you from our restaurant!
            </MuiTypography>
          </GridItem>
        </GridContainer>
      </MuiCardContent>
    </MuiCard>
  );
};

export default Welcome;
