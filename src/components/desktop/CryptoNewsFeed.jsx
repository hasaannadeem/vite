import { Grid } from "@mui/material";
import React from "react";
import CryptoNewsFeedCard from "../cards/CryptoNewsFeedCard";

const CryptoNewsFeed = () => {
  return (
    <Grid container xs={12} my={"2em"} px={6} spacing={2}>
      <Grid item xs={12} md={6} lg={4}>
        <CryptoNewsFeedCard underlineStyle={"always"} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CryptoNewsFeedCard
          underlineStyle={"none"}
          headingColor={"black"}
          bgaColor={
            "linear-gradient(359.36deg, #7ED4F7 0.48%, rgba(126, 212, 247, 0) 99.39%)"
          }
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CryptoNewsFeedCard underlineStyle={"always"} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CryptoNewsFeedCard underlineStyle={"always"} />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CryptoNewsFeedCard
          headingColor={"black"}
          underlineStyle={"none"}
          bgaColor={"linear-gradient(359.36deg, #1E1E1E 0.48%, #FFFFFF 99.39%)"}
          textColor={"white"}
        />
      </Grid>
      <Grid item xs={12} md={6} lg={4}>
        <CryptoNewsFeedCard underlineStyle={"always"} />
      </Grid>
    </Grid>
  );
};

export default CryptoNewsFeed;
