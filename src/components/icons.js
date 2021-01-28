import React, { useState } from "react";
import PersonIcon from '@material-ui/icons/Person';
import NotificationsActiveRoundedIcon from '@material-ui/icons/NotificationsActiveRounded';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import { Tooltip, IconButton } from "@material-ui/core";
import { Redirect } from "react-router-dom";


import "../css/icons.css";

function Icons() {
  const [logout,setLogout] = useState(false)

    const logoutuser = () =>{
      setLogout(true)
    }

  return (
    <div>
      <Tooltip aria-label="Home" title="Logout" >
        <IconButton onClick={logoutuser} color='secondary'>
          <PersonIcon></PersonIcon>
        </IconButton>
      </Tooltip>
      <Tooltip aria-label="notification" title="notification" >
        <IconButton color='secondary'>
          <NotificationsActiveRoundedIcon></NotificationsActiveRoundedIcon>
        </IconButton>
      </Tooltip>
      <Tooltip aria-label="messages" title="messages" >
        <IconButton color='secondary'>
         <MessageRoundedIcon></MessageRoundedIcon>
        </IconButton>
      </Tooltip>
      <div>{logout ? <Redirect to="/" /> : null}</div>
    </div>
  );
}

export default Icons;