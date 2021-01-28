import React, {useState} from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  makeStyles,
  Grid,
  Hidden
} from "@material-ui/core";

import logo from "../images/logo-1.png";
import "../css/intropage.css";

import Register from "./register";
import Login from "./login";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
  },
  contained: {
    background:
      "linear-gradient(90deg, rgba(210,8,8,1) 3%, rgba(217,58,58,1) 45%, rgba(255,0,113,1) 95%)",
  },
});

function IntroPage() {
  const classes = useStyles();

// Register
  const [openRegister, setRegister] = useState(false);
  
  const handleClickOpen = () => {
      setRegister(true);
  };

  const handleClose = () => {
      setRegister(false);
  }

  // Login
  const [openLogin,setLogin] =useState(false);

  const handleLoginOpen = () => {
      setLogin(true);
  }

  const handleLoginClose = () => {
      setLogin(false);
  }

  return (
    <div className="introPage">
      <div className={classes.root}>
        <AppBar position="static" color="transparent" className="appbar">
          <Toolbar>
            <img src={logo} alt="logo" style={{ paddingRight: "12px" }}></img>
            <Typography className={classes.title}>
              <h5 className="brand">intense</h5>
            </Typography>
            <Button
              variant="contained"
              className={classes.contained}
              size="large"
              color="primary"
              onClick ={handleLoginOpen}
            >
              Login
            </Button>
          </Toolbar>
        </AppBar>
        <Grid container justify="center" spacing={3}>
          <Grid md={6} sm={12} className="content1">
            <h1>Welcome to the Community</h1>
            <h2>Connect to people and cherish the magic of 2021</h2>
            <h3>Connect, Share and Engage</h3>
          </Grid>
          <Grid item md={6} sm={12} className="content2">
            <Button
              variant="contained"
              className={classes.contained}
              size="large"
              color="primary"
              onClick={handleClickOpen}
            >
              Create a new account
            </Button>
          </Grid>
        </Grid>
        <Register
            openRegister = {openRegister}
            handleClose = {handleClose} 
        >       
        </Register>
        <Login
            openLogin = {openLogin}
            handleLoginClose = {handleLoginClose}   
        > 
        </Login>
      </div>
    </div>
  );
}

export default IntroPage;
