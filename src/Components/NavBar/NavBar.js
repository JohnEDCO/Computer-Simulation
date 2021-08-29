import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link} from 'react-router-dom';

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
    fontSize: 12
  },
  buttonsHome:{
    textDecoration: "none",
    color: "black",
    margin: 12,
    fontSize: 12
  }
}));

function NavBar() {
  const classes = useStyles();
  return (
      <AppBar position="relative" style={{background:"#232121"}}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            Computer Simulation Exercises
          </Typography>
          <Button color="inherit">
            <Link className={classes.links} to='/Exercise1'>Exercise 1</Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.links} to='/Exercise2'> Exercise 2</Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.links} to='/Exercise3'> Exercise 3</Link>
          </Button>
          <Button color="inherit">
            <Link className={classes.links} to='/Exercise4'> Exercise 4</Link>
          </Button>
        </Toolbar>
      </AppBar>
  )
}

export default NavBar
