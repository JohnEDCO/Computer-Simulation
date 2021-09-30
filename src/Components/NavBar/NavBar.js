import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(5),
  },
  title: {
    flexGrow: 1,
  },
  links: {
    textDecoration: "none",
    color: "white",
    margin: 12,
    fontSize: 14
  },
  items: {
    textDecoration: "none",
    color: "gray",
    fontSize: 13
  },
  buttonsHome: {
    textDecoration: "none",
    color: "black",
    margin: 12,
    fontSize: 10
  }
}));

function NavBar() {
  const classes = useStyles();
  const [menu1, setMenu1] = useState(null);
  const [menu2, setMenu2] = useState(null);
  const handleClick = (event, type) => {
    type == 0 ?
      setMenu1(event.currentTarget)
      : setMenu2(event.currentTarget)

  };

  const handleClose = (type) => {
    type == 0 ?
      setMenu1(null)
      : setMenu2(null)
  };
  return (
    <AppBar position="relative" style={{ background: "#232121" }}>
      <Toolbar>
        <Typography variant="h6" className={classes.title}>
          Computer Simulation Exercises
        </Typography>

        <Button className={classes.links} aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => handleClick(event, 0)}>
          WorkShop 1
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={menu1}
          keepMounted
          open={Boolean(menu1)}
          onClose={() => handleClose(0)}
        >
          <Link className={classes.items} to='/Exercise1' onClose={() => handleClose(0)}>
            <MenuItem className={classes.items} >Exercise 1</MenuItem>
          </Link>
          <Link className={classes.items} to='/Exercise2' onClose={() => handleClose(0)}>
            <MenuItem className={classes.items}  >Exercise 2</MenuItem>
          </Link>
          <Link className={classes.items} to='/Exercise3' onClose={() => handleClose(0)}>
            <MenuItem className={classes.items} >Exercise 3</MenuItem>
          </Link>
          <Link className={classes.items} to='/Exercise4' onClose={() => handleClose(0)}>
            <MenuItem className={classes.items} >Exercise 4</MenuItem>
          </Link>
          <Link className={classes.items} to='/Exercise5' onClose={() => handleClose(0)}>
            <MenuItem className={classes.items} >Exercise 5</MenuItem>
          </Link>
        </Menu>

        <Button className={classes.links} aria-controls="simple-menu" aria-haspopup="true" onClick={(event) => handleClick(event, 1)}>
          WorkShop 2
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={menu2}
          keepMounted
          open={Boolean(menu2)}
          onClose={() => handleClose(1)}
        >
          <Link className={classes.items} to='/Algorithm1' onClose={() => handleClose(1)}>
            <MenuItem className={classes.items} >Linear congruencial generator</MenuItem>
          </Link>
          <Link className={classes.items} to='/Algorithm2' onClose={() => handleClose(1)}>
            <MenuItem className={classes.items} >Minimum standard generator</MenuItem>
          </Link>
        </Menu>
      </Toolbar>
    </AppBar >
  )
}

export default NavBar
