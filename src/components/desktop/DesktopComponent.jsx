import { Grid, Typography } from "@mui/material";
import React from "react";
import CryptoInterest from "./CryptoInterest";
import CryptoNews from "./CryptoNews";
import CryptoNewsFeed from "./CryptoNewsFeed";
import HeroSection from "./HeroSection";

const DesktopComponent = () => {
  return (
    <>
      <HeroSection />
      <CryptoNews />
      <CryptoInterest />
      <CryptoNewsFeed />
    </>
  );
};

export default DesktopComponent;
