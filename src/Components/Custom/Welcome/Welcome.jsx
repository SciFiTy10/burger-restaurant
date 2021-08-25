import React, { useState } from "react";
import GridContainer from "../Grid/GridContainer";
import GridItem from "../Grid/GridItem";
import Typography from "../../UI/Typography/Typography";
import Card from "../../UI/Card/Card";
import CardHeader from "../../UI/Card/CardHeader";
import CardContent from "../../UI/Card/CardContent";

const Welcome = () => {
  const [title, setTitle] = useState("Welcome to Big Kahuna Burger!");

  return (
    <Card>
      <CardHeader
        title={title}
        titleTypographyProps={{ align: "center" }}
      ></CardHeader>
      <CardContent>
        <GridContainer justifyContent="center">
          <GridItem>
            <Typography variant="h6" component="p" align="center">
              Choose one of our delicious, gourmet burgers prepared by our
              5-Star chef.
            </Typography>
            <br />
            <Typography variant="h6" component="p" align="center">
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
