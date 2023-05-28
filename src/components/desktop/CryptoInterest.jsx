import { Chip, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const CryptoInterest = () => {
  return (
    <>
      <Stack
        alignItems={"center"}
        py="2em"
        px={6}
        mt={8}
        spacing={3}
        id="chooseyourointerest"
      >
        <Typography sx={{  fontSize: { lg: "4rem", xs: "1.5rem",  },
            fontWeight: { xs: "500" },
            whiteSpace:"nowrap"}}>
          Choose Your Interest
        </Typography>
        <Stack
          width={"100%"}
          direction={"row"}
          //   spacing={"1em"}
          gap={"1em"}
          flexWrap={"wrap"}
        >
          <Chip
            label="Chip Filled"
            sx={{
              width: "fit-content",
              fontFamily: "Inter",
              bgcolor: "black",
              color: "white",
            }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
          <Chip
            label="Chip Filled"
            sx={{ width: "fit-content", fontFamily: "Inter" }}
          />
        </Stack>
      </Stack>
    </>
  );
};

export default CryptoInterest;
