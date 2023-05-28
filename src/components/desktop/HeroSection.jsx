import { Grid, Stack, Typography } from "@mui/material";
import React from "react";
import HeroSectionCarousal from "../carousal/HeroSectionCarousal";
import desktopBG from "../../assets/images/desktopBG.svg";

const HeroSection = () => {
  return (
    <Stack
      sx={{
        backgroundImage: `url(${desktopBG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        objectFit: "cover",
      }}
      pl={11}
      pt={11}
    >
      <Grid container xs={12} minHeight={"100vh"}>
        <Grid item xs={12} md={6}>
          <Typography
            sx={{
              fontSize: { xs: "2em", sm: "3em", md: "4rem" },
              fontWeight: { xs: "400" },
              fontFamily: "Josefin Sans",
              lineHeight: "64px",
            }}
            mb={3}
            id="cryptocurrencyworld"
          >
            Cryptocurrency World
          </Typography>
          <Typography
            fontWeight={"600"}
            sx={{ fontSize: { lg: "2rem", md: "1rem" } }}
            fontFamily={"Josefin Sans"}
          >
            Cryptocurrency Trends & Insights: Stay Up-to-Date with OurExpert
            Analysis
          </Typography>
        </Grid>
        <Grid item xs={12} md={6}>
          <HeroSectionCarousal />
        </Grid>
      </Grid>
    </Stack>
  );
};

export default HeroSection;
