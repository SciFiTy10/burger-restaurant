import React, { useState } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  Grid,
  Typography,
} from "@material-ui/core";

const Welcome = () => {
  const [title, setTitle] = useState("Welcome to Big Kahuna Burger!");

  const cardTitle = {
    textAlign: "center",
  };
  return (
    <Card>
      <CardHeader
        title={title}
        titleTypographyProps={{ align: "center" }}
      ></CardHeader>
      <CardContent>
        <Grid container justifyContent="center">
          <Grid item>
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
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default Welcome;
