import React, { useState } from "react";
import {
  Card,
  CardHeader,
  IconButton,
  Avatar,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  makeStyles,
} from "@material-ui/core";
import { MoreVert, Favorite, Share } from "@material-ui/icons";


import "../css/feed.css";

const useStyles = makeStyles((theme) => ({
  media: {
    height: 0,
    paddingTop: "65.25%", // 16:9
  }
}));

function Feed(props) {
  const classes = useStyles();
  const [buttonColor, setButtonColor ] = useState(false)
  const [count, setcount] = useState(0);

  // -----------------------FavButton Edit-------------------------------
  const onFavClick = () =>{
    changeCount();
    changeColor()
  }
  const changeCount = () =>{
    setcount(count+1)
  }
  const changeColor = () => {
    setButtonColor(true)
  }

// ------------------------------------------------------------------

  return (
    <div className="feed">
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" src={props.imageUpdate[0]} /> 
          }
          action={
            <IconButton aria-label="settings">
              <MoreVert />
            </IconButton>
          }
          title={sessionStorage.getItem("useremail")}
          subheader="January 24, 2020"
        />
        <CardMedia
          className={classes.media}
          image={props.imageUpdate}
          title="Image"
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.status}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
            <Favorite onClick ={onFavClick} className={buttonColor ? "buttonTrue" : "buttonFalse"} />
          <p className="favCount">{count}</p>
          <IconButton aria-label="share">
            <Share />
          </IconButton>
        </CardActions>
      </Card>
    </div>
  );
}

export default Feed;
