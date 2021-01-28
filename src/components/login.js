import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  DialogActions,
  Grid,
  TextField,
  makeStyles,
  Tooltip,
  IconButton,
  Slide
} from "@material-ui/core";
import {
  AccountCircle,
  VpnKey,
  HighlightOffOutlined,
} from "@material-ui/icons";

import "../css/login.css";



const Transition = React.forwardRef(function Transition(props, ref) {
    return <Slide direction="left" in={true} ref={ref} {...props} />;
  });

function Login(props) {

  const { openLogin, handleLoginClose, fromRegister } = props;
  const [redirectTo, setRedirectTo] = useState(false);
  const [loginFailed, setLoginFailed] = useState(false);
  // --------------------login credentials-------------------------
  const [login, setLogin] = useState({
    Email: "",
    Password: "",
  });

  const handleLoginChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;

    console.log(inputName, inputValue);
    setLogin((preValue) => {
      return {
        ...preValue,
        [inputName]: inputValue,
      };
    });
  };

  const handleLogin = (e) => {
    const personInfo = {
      personEmail: login.Email,
      personPassword: login.Password,
    };
    e.preventDefault();
    console.log("sd", personInfo);
    axios.post("http://localhost:5000/login", personInfo).then((response) => {
      if (response.data.length > 0) {
        sessionStorage.setItem("useremail", response.data[0].email);
        setRedirectTo(true);
      } else {
        console.log("failed");
        setLoginFailed(true);
      }
      // handleClose();
      console.log("res", response.data);
    });
  };

  // ----------
  return (
    <div>
      <div className="loginModal">
        <Dialog fullWidth="true" maxWidth="xs" open={openLogin} TransitionComponent={Transition}>
          <DialogTitle className="title">
            <Grid container>
              <Grid className="titlelogincontent" item xs={9}>
                {fromRegister ? "Login to Continue" : "Login"}
              </Grid>
              <Grid item className="titlecontentIcon" xs={3}>
                <Tooltip aria-label="close" title="close">
                  <IconButton color="inherit">
                    <HighlightOffOutlined onClick={handleLoginClose} />
                  </IconButton>
                </Tooltip>
              </Grid>
            </Grid>
          </DialogTitle>

          <DialogContent style={{ overflow: "hidden" }} className="inputSpace">
            <Grid
              container
              className="inputSpace"
              alignItems="flex-end"
            >
              <Grid item xs={1} >
                <AccountCircle fontSize="large" color="secondary" />
              </Grid>
              <Grid item xs={11} className="textField" >
                <TextField
                  id="email"
                  
                  label="Email"
                  name="Email"
                  // value = {login}
                  onChange={handleLoginChange}
                />
              </Grid>
            </Grid>
            <Grid
              container
              className="inputSpace"
              alignItems="flex-end"
            >
              <Grid item xs={1} >
                <VpnKey fontSize="large" color="secondary" />
              </Grid>
              <Grid item xs={11} className="textField" >
                <TextField
                  id="password"
                  type="password"
                  name="Password"
                  label="Password"
                  // value={login}
                  onChange={handleLoginChange}
                />
              </Grid>
            </Grid>
          </DialogContent>
          {loginFailed ? (
            <Grid container className="error">
              <Grid item>
                {" "}
                <h5>Please verify your password or email</h5>
              </Grid>{" "}
            </Grid>
          ) : null}

          <DialogActions style={{ justifyContent: "center", paddingBottom:"8%" }}>
            <Button size="large" color="primary" variant="contained" className="buttonColor"  onClick={handleLogin}>
              Login
            </Button>
          </DialogActions>
        </Dialog>
      </div>
      <div>{redirectTo ? <Redirect to="/dashboard" /> : null}</div>
    </div>
  );
}

export default Login;
