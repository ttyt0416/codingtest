import React from "react";
import styled from "styled-components";

//customed components by styled-components
const Homepage = styled.div`
  width: 100%;
  height: 100%;
  text-align: center;
`;

const HomepageContent = styled.p`
  font-size: 15px;
  font-weight: 700;
  margin-top: 15%;
`;

const Home = () => {
  return (
    <Homepage>
      <HomepageContent>
        Welcome to Beerlist! you can search Beers for your choice by click
        Beerlist at upper box!
      </HomepageContent>
    </Homepage>
  );
};

export default Home;
