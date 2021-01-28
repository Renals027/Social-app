import React, { useEffect, useState } from "react";

import {
  AppBar,
  Toolbar,
  Typography,
  makeStyles,
  Grid,
} from "@material-ui/core";
import axios from "axios";

// import HomeIcon from '@material-ui/icons/Home';

import Icons from "./icons";

import "../css/dashboard.css";

import AddSection from "./addSection";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    background: "#d6d3d3",
    width: "100%",
    height: "100%",
    overflow: "auto",
  },
  title: {
    flexGrow: 1,
  },
});

function Dashboard() {
  const [images, setImgdb] = useState();
  const classes = useStyles();

  useEffect(() => {
    async function getfeed() {
      await axios.get("http://localhost:5000/getalldata").then((res) => {
        const cryptos = res.data;
        setImgdb(cryptos);
        console.log("lovefeed", cryptos);
      });
    }
    getfeed();
  }, []);


  return (
    <div>
      <div className={classes.root}>
        <AppBar position="sticky" className="appbarr">
          <Toolbar variant="dense" className="dashboard">
            <Typography className={classes.title}>
              <h5>intense</h5>
            </Typography>
            <Icons />
          </Toolbar>
        </AppBar>
        <AddSection images={images} />
        <div className="noMorePosts">
          <Typography color="textSecondary">No posts to show</Typography>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
