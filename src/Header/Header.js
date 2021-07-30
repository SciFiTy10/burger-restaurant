import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Badge from '@material-ui/core/Badge'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    marginLeft: theme.spacing(4),
  },
}));

const Header = (props) => {
    const classes = useStyles();
    return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            {props.titleText}
          </Typography>
          <IconButton color="inherit">
              <Badge badgeContent={props.cartCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
    )
}

export default Header
