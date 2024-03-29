import "../css/ImageList.css";
import React from "react";
import ImageCard from "./ImageCard";

const ImageList = props => {
  const images = props.imageList.map(image => {
    return <ImageCard key={image.id} image={image} />;
  });

  return <div className={"image-list"}>{images}</div>;
};

export default ImageList;
