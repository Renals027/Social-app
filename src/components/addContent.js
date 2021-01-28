import React, {useState} from "react";
import ImageUploading from "react-images-uploading";
import {Button} from "@material-ui/core";
import {storage} from "../firebase/index"
import axios from 'axios';

import "../css/addContent.css";

function AddButton(props) { 

  const {textContent} = props

  const [images, setImages] = React.useState([]);
  
  const maxNumber = 69;
  const emailName = sessionStorage.getItem("useremail");
  let today = new Date().toLocaleDateString()
  // image input---------------------------------------------------------
  const onChange = (imageList, addUpdateIndex) => {
      setImages(imageList);
  };
  console.log("images", images)

// ---------------------------------------------------------------------
 
// postimage------------------------------------------------------------
  const onPost = async () =>{
    const uploadTask = storage.ref(`Storeimages/${images[0].file.name}`).put(images[0].file);
    uploadTask.on(
      "state_changed", 
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
        .ref("Storeimages")
        .child(images[0].file.name)
        .getDownloadURL()
        .then (async (url) =>{
          const finalUrl = {
            url : url,
            mailName : emailName, 
            texting : textContent
          }
          const resp = await axios.post('http://localhost:5000/imgUpload', finalUrl );
          const data = await resp.data;
          console.log("response", data);
        })
        .then ( () =>{
          window.location.reload();
        })
      }
    );    
  }

  return (
    <div className="addButton">
      <ImageUploading
        value={images}
        onChange={onChange}
        maxNumber={maxNumber}
        dataURLKey="data_url"
      >
        {({ imageList, onImageUpload, onImageUpdate, onImageRemove}) => (
          <div>
            <Button onClick={onImageUpload}>Add Photo</Button>
            &nbsp;
            <Button onClick={onPost}>Post</Button>
            {imageList.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.data_url} alt="" width="300" />
                <div >
                  <Button onClick={() => onImageUpdate(index)}>Change photo</Button>
                  <Button onClick={() => onImageRemove(index)}>Remove</Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </ImageUploading>
    </div>
  );
}

export default AddButton;
