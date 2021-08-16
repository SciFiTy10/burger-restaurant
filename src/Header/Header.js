import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Icon from "@material-ui/core/Icon";
import IconButton from "@material-ui/core/IconButton";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Badge from "@material-ui/core/Badge";
import { AppContext } from "../Context/app-context";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(2),
  },
  backgroundColor: {
    backgroundColor: theme.palette.primary,
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const ctx = useContext(AppContext);

  const cartOpenHandler = () => {
    ctx.onCartClick(true);
  };
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.backgroundColor}>
        <Toolbar>
          <Icon>lunch_dining</Icon>
          <Typography variant="h6" className={classes.title}>
            {props.titleText}
          </Typography>
          <IconButton color="inherit" onClick={cartOpenHandler}>
            <Badge badgeContent={ctx.cart.length} color="secondary">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
