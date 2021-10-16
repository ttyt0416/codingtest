import React from "react";
import {
  Homepage,
  HomepageWelcome,
  HomepageContent,
} from "../styles/pages/home.styles";

import ImageSlide from "../components/image-slide/image-slide";

const Home = () => {
  const text =
    "Welcome to Beerlist! you can search Beers for your choice by click Beerlist at upper box!";

  const paragraph = text.split(" ");

  return (
    <Homepage>
      <ImageSlide />
      <HomepageWelcome>
        {paragraph.map((p, i) => (
          <HomepageContent>{p}</HomepageContent>
        ))}
      </HomepageWelcome>
    </Homepage>
  );
};

export default Home;
