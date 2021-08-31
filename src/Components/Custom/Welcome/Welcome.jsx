import React, { useContext } from "react";
import GridContainer from "../../Spacing/Grid/GridContainer";
import GridItem from "../../Spacing/Grid/GridItem";
import Typography from "../../UI/Typography/Typography";
import Card from "../../UI/Card/Card";
import CardHeader from "../../UI/Card/CardHeader";
import CardContent from "../../UI/Card/CardContent";
import { AppContext } from "../../../Context/app-context";

const Welcome = () => {
  const ctx = useContext(AppContext);
  //create variable for the header title
  const titleText = `Welcome to ${ctx.titleText}!`;

  return (
    <Card>
      <CardHeader
        title={titleText}
        titleTypographyProps={{ align: "center" }}
      ></CardHeader>
      <CardContent>
        <GridContainer justifyContent="center">
          <GridItem>
            <Typography variant="body1" component="p" align="center">
              Choose one of our delicious, gourmet burgers prepared by our
              5-Star chef.
            </Typography>
            <br />
            <Typography variant="body1" component="p" align="center">
              Satisfaction is guaranteed. If you don't like our burgers, not
              only will we give you your money back, but we will personally
              throw you from our restaurant!
            </Typography>
          </GridItem>
        </GridContainer>
      </CardContent>
    </Card>
  );
};

export default Welcome;
