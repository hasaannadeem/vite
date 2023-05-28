import { Container, Typography, Link, Grid, Stack } from "@mui/material";
import React from "react";
import feedImage from "../../assets/images/feedImage.svg";

const CryptoNewsFeedCard = ({
  bgaColor,
  textColor,
  underlineStyle,
  headingColor,
}) => {
  return (
    <Stack
      sx={{
        background: bgaColor,
        p: 2,
      }}
      spacing={4}
      color={textColor}
    >
      <Link
        component="text"
        sx={{ cursor: "pointer" }}
        underline={underlineStyle}
        textAlign={{ xs: "center", md: "start" }}
        color={headingColor}
      >
        NFTs, Dapps, and Blockchain Games
      </Link>
      <Grid container xs={12} gap={2}>
        <Grid item xs={12}>
          <Stack direction={"column"} height={"100%"}>
            <Stack
              direction={"row"}
              spacing={1}
              height={"100%"}
              justifyContent={"space-between"}
            >
              <Stack>
                <Typography fontFamily={"Inter"} lineHeight={"16.94px"}>
                  Fear Of Cycling In The Park Because Squirrels Know No
                  Boundaries And Have No Inhibitions - My Actifit Report Ca...
                </Typography>
                <Typography fontFamily={"Inter"}>marianomariano68</Typography>
              </Stack>
              <img src={feedImage} width={"100%"} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"column"} height={"100%"}>
            <Stack
              direction={"row"}
              spacing={1}
              height={"100%"}
              justifyContent={"space-between"}
            >
              <Stack>
                <Typography fontFamily={"Inter"} lineHeight={"16.94px"}>
                  Fear Of Cycling In The Park Because Squirrels Know No
                  Boundaries And Have No Inhibitions - My Actifit Report Ca...
                </Typography>
                <Typography fontFamily={"Inter"}>marianomariano68</Typography>
              </Stack>
              <img src={feedImage} width={"100%"} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"column"} height={"100%"}>
            <Stack
              direction={"row"}
              spacing={1}
              height={"100%"}
              justifyContent={"space-between"}
            >
              <Stack>
                <Typography fontFamily={"Inter"} lineHeight={"16.94px"}>
                  Fear Of Cycling In The Park Because Squirrels Know No
                  Boundaries And Have No Inhibitions - My Actifit Report Ca...
                </Typography>
                <Typography fontFamily={"Inter"}>marianomariano68</Typography>
              </Stack>
              <img src={feedImage} width={"100%"} />
            </Stack>
          </Stack>
        </Grid>
        <Grid item xs={12}>
          <Stack direction={"column"} height={"100%"}>
            <Stack
              direction={"row"}
              spacing={1}
              height={"100%"}
              justifyContent={"space-between"}
            >
              <Stack>
                <Typography fontFamily={"Inter"} lineHeight={"16.94px"}>
                  Fear Of Cycling In The Park Because Squirrels Know No
                  Boundaries And Have No Inhibitions - My Actifit Report Ca...
                </Typography>
                <Typography fontFamily={"Inter"}>marianomariano68</Typography>
              </Stack>
              <img src={feedImage} width={"100%"} />
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Stack>
  );
};

export default CryptoNewsFeedCard;
