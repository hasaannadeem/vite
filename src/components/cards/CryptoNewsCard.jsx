import { Chip, Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

const CryptoNewsCard = () => {
  const nav = useNavigate();
  return (
    <>
      <Paper
        elevation={2}
        sx={{
          bgcolor: "black",
          minHeight: { md: "270", xs: "auto" },
          px: "2em",
          py: "1em",
          borderRadius: "30px",
          cursor: "pointer",
        }}
        onClick={() => nav("/blogs/1")}
      >
        <Stack justifyContent={"space-between"} minHeight={270}>
          <Stack spacing={2}>
            <Typography
              color={"white"}
              fontWeight={"bold"}
              fontFamily={"Inter"}
              sx={{
                fontSize: { xs: "small", md: "large" },
              }}
              whiteSpace={"nowrap"}
            >
              US Bank crises is facing Public Criticism
            </Typography>
            <Stack
              // width={"100%"}
              direction={"row"}
              //   spacing={"1em"}
              gap={".5em"}
              flexWrap={"wrap"}
            >
              <Chip
                label="Crypto Boom"
                sx={{
                  width: "fit-content",
                  backgroundColor: "white",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                }}
              />
              <Chip
                label="Crypto Boom"
                sx={{
                  width: "fit-content",
                  backgroundColor: "white",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                }}
              />
              <Chip
                label="Crypto Boom"
                sx={{
                  width: "fit-content",
                  backgroundColor: "white",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                }}
              />
              <Chip
                label="Crypto Boom"
                sx={{
                  width: "fit-content",
                  backgroundColor: "white",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                }}
              />
              <Chip
                label="Crypto Boom"
                sx={{
                  width: "fit-content",
                  backgroundColor: "white",
                  fontFamily: "Inter",
                  fontWeight: "bold",
                }}
              />
            </Stack>
          </Stack>
          <Stack
            direction={"row"}
            justifyContent={"space-between"}
            color={"white"}
          >
            <Typography fontFamily={"Inter"}>4 min</Typography>
            <Typography fontFamily={"Inter"}>28 April</Typography>
          </Stack>
        </Stack>
      </Paper>
    </>
  );
};

export default CryptoNewsCard;
