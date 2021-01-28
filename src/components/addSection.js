import React, { useState } from "react";
import {
  Avatar,
  Card,
  CardHeader,
  CardContent,
  TextField,
  makeStyles,
} from "@material-ui/core";


import AddButton from "./addContent";
import "../css/addSection.css";
import Feed from "./feed";

const useStyles = makeStyles({
  root: {
    maxWidth: 525,
  },
  cardHeader: {
    background: "#eeeeee",
  },
});

function AddSection(props) {
  const classes = useStyles();
  const [textarea, setTextarea] = useState();

  const useremailid = sessionStorage.getItem("useremail")
  // Textcapture-------------------------------------------------------------------------
  const changeText = (e) => {
    const textvalue = e.target.value;
    setTextarea(textvalue);
  };
  var images = [];
  var declaredfile = [];
  console.log("child feed", props.images);
  if (
    props.images === undefined ||
    props.images === "" ||
    props.images === null ||
    props.images === []
  ) {
    <h1>Please post something</h1>
  } else {
    images = props.images;
     declaredfile = images.filter(content =>
      content.emailid === sessionStorage.getItem("useremail")
    );
    // return declaredfile;
    console.log("ddfile", declaredfile);
    
  }
 
  const textContent = textarea;
  // ------------------------------------------------------------------------------------
  return (
    <div className="addSection">
      <Card>
        <CardHeader
          title={sessionStorage.getItem("useremail")}
          subheader="Zlanerz technologies"
          avatar={<Avatar alt="userAvatar" src="images/photo.jpg" />}
          className={classes.cardHeader}
        />
        <CardContent>
          <AddButton textContent={textContent}></AddButton>
          <TextField
            id="outlined-basic"
            label="Hey, Do you want to share something..."
            variant="outlined"
            multiline={true}
            onChange={changeText}
          />
        </CardContent>
      </Card>
      <div >
        {declaredfile.map((image) => (
          <Feed
            key={image._id}
            imageUpdate={image.img}
            status={image.textstatus}
          />
        ))}
      </div>
    </div>
  );
}

export default AddSection;
