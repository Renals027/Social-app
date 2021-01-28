import React, { useState } from "react";
import axios from 'axios';
import {
  Dialog,
  DialogContent,
  DialogTitle,
  Button,
  DialogActions,
  Grid,
  TextField,
  Slide,
  Tooltip,
  IconButton
} from "@material-ui/core";
import {
  AccountCircle,
  VpnKey,
  HighlightOffOutlined,
} from "@material-ui/icons";

import "../css/login.css";
import Login from "./login";


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" in={true} ref={ref} {...props} />;
});

function Register(props) {
  const { openRegister, handleClose } = props;
  const [isRegistered, setIsRegistered] = useState(true);
  // ------------------------Registeration-----------------------------
  const [regiterForm,setRegisterForm] = useState({
    Email : "",
    Password : ""
  })

  const handleRegisterChange = (e) =>{
     const registerName = e.target.name;
     const registerValue = e.target.value;

     console.log(registerName,registerValue);
     setRegisterForm((preValue) =>{
       return{
         ...preValue,
         [registerName] : registerValue
       }
     })
   } 
  //  ----------------------------------------------------------------------

   const submitRegister = (e) => {
     const newPerson = {
       EmailId : regiterForm.Email,
       newPassword : regiterForm.Password
     }
     e.preventDefault();
     console.log(newPerson);

     axios.post('http://localhost:5000/saveLoginData', newPerson)
     .then( (response) => {
       if(response.data === true){
       setIsRegistered(false); 
       }
      // handleClose();
       console.log("res",response.data)
      });
     
        console.log(" const", isRegistered);

     
   }

   console.log("Renals", isRegistered);

  return (
     <div>
       { isRegistered ? 
       <Dialog
      open={openRegister}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      fullWidth="true"
      maxWidth="xs"
      TransitionComponent={Transition}
    >
      <DialogTitle className="title">
        <Grid container>
          <Grid className="titlelogincontent" item xs={9}>Register </Grid>
          <Grid item className="titlecontentIcon" xs={3}>
             <Tooltip aria-label="close" title="close">
              <IconButton color="inherit" >
                <HighlightOffOutlined onClick={handleClose} />
              </IconButton>
            </Tooltip>
          </Grid>
        </Grid>
      </DialogTitle>

      <DialogContent className="inputSpace" style={{ overflow: "hidden" }}>
        <Grid
          container 
          alignItems="flex-end"
          className="inputSpace"
        >
          <Grid item xs={1} >
            <AccountCircle fontSize="large" color="secondary" />
          </Grid>
          <Grid item xs={11} className="textField" >
            <TextField
              id="email"
              name="Email"
              label="Email"
              onChange = {handleRegisterChange}
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
              name= "Password"
              id="password"
              type="password"
              label="Password"
              onChange = {handleRegisterChange}
            />
          </Grid>
        </Grid>
      </DialogContent>

      <DialogActions style={{ justifyContent: "center",paddingBottom:"8%"  }}>
        <Button size="large" color="primary" variant="contained" className="buttonColor" onClick={submitRegister}>
          Sign up
        </Button>
      </DialogActions>
    </Dialog>
     : 
     <Login
     openLogin = {true}
     handleLoginClose = {false}   
     fromRegister ={true}
 /> }
       </div>
  );
}

export default Register;
