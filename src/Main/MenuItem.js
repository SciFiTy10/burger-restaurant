import React from "react";
import {
  Box,
  Button,
  ListItem,
  TextField,
  Typography,
} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiFormLabel-root": {
      color: theme.palette.text.primary,
    },
    "& .MuiInput-underline:before": {
      borderBottomColor: theme.palette.text.primary,
    },
    "& .MuiInputBase-input": {
      textAlign: "center",
    },
  },
}));

const MenuItem = (props) => {
  const classes = useStyles();
  return (
    <ListItem>
      <Grid container>
        <Grid item xs={2}>
          <Typography variant="h6">Title</Typography>
          <Box fontStyle="italic" mb={1}>
            <Typography variant="subheader" component="div">
              description
            </Typography>
          </Box>
          <Typography variant="subheader" component="div">
            $12.99
          </Typography>
        </Grid>
        <Grid item xs={9}></Grid>
        <Grid item xs={1}>
          <div>
            <TextField
              className={classes.root}
              label="Amount"
              type="number"
              value="2"
              size="small"
            />
          </div>
          <Box mt={1}>
            <Button>+ Add</Button>
          </Box>
        </Grid>
      </Grid>
    </ListItem>
  );
};

export default MenuItem;
