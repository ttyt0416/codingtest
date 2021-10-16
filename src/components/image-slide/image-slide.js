import React, { useState, useEffect } from "react";
import {
  ImageContainer,
  ImageControl,
  Image,
  ImagePrev,
  ImageNext,
} from "../../styles/components/image-slide.styles";

const ImageSlide = () => {
  const imageList = [
    "https://images.unsplash.com/photo-1546622891-02c72c1537b6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1485686531765-ba63b07845a7?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1167&q=80",
    "https://images.unsplash.com/photo-1538488881038-e252a119ace7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
    "https://images.unsplash.com/photo-1514933651103-005eec06c04b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80",
    "https://images.unsplash.com/photo-1597290282695-edc43d0e7129?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1175&q=80",
  ];
  let [order, setOrder] = useState(0);
  const images = document.getElementsByTagName("img");

  const initImage = () => {
    setOrder(0);
    for (let i = 1; i < images.length; i++) {
      images[i].style.opacity = 0;
    }
  };

  //   const nextImage = () => {
  //     setOrder(order + 1);
  //     images[order % 5].style.display = "block";
  //     if ((order % 5) - 1 <= -1) {
  //       images[4].style.display = "none";
  //     } else {
  //       images[(order % 5) - 1].style.display = "none";
  //     }
  //   };

  const nextImage = () => {
    setOrder(order === 4 ? 0 : order + 1);
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = 0;
    }
    images[order].style.opacity = 1;
  };

  const prevImage = () => {
    setOrder(order === 0 ? 4 : order - 1);
    for (let i = 0; i < images.length; i++) {
      images[i].style.opacity = 0;
    }
    images[order].style.opacity = 1;
  };

  useEffect(() => {
    initImage();
  }, []);

  return (
    <ImageContainer>
      {imageList.map((img, i) => (
        <Image alt="" src={img} />
      ))}
      <ImageControl>
        <ImagePrev onClick={prevImage} />
        <ImageNext onClick={nextImage} />
      </ImageControl>
    </ImageContainer>
  );
};

export default ImageSlide;
