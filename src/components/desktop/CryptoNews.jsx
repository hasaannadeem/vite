import { Button, Link, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import CryptoNewsCard from "../cards/CryptoNewsCard";
import CryptoNewsCarousal from "../carousal/CryptoNewsCarousal";

const CryptoNews = () => {
  return (
    <Stack px={6}>
      <Stack
        direction={"row"}
        justifyContent={"space-between"}
        pb={"66px"}
        pr={3}
        id="cryptocurrencynews"
      >
        <Typography
          sx={{
            fontSize: { lg: "3rem", xs: "1.5rem",  },
            fontWeight: { xs: "500" },
            whiteSpace:"nowrap"
           
            
          }}
         
          fontFamily={"Inter"}
        >
          Cryptocurrency News
        </Typography>
        <Button sx={{ color: "black", fontFamily: "Inter", whiteSpace:"nowrap" }}>See All</Button>
      </Stack>
      <Stack>
        <CryptoNewsCarousal />
      </Stack>
    </Stack>
  );
};

export default CryptoNews;
