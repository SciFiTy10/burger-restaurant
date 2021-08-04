import React from "react";
import { Button, ListItem, TextField, Typography } from "@material-ui/core";
import Grid from "@material-ui/core/Grid";

const MenuItem = (props) => {
  return (
    <ListItem>
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="h6">Title</Typography>
          <div>description</div>
          <div>Price</div>
        </Grid>
        <Grid item xs={8}></Grid>
        <Grid item xs={2}>
          <div>
            <TextField label="Amount" type="number" value="2" />
          </div>
          <Button>+ Add</Button>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default MenuItem;
