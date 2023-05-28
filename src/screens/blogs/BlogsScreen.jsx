import {
  Stack,
  ToggleButton,
  Typography,
  Chip,
  Button,
  CardContent,
  CardMedia,
  CardActions,
  Card,
  Input,
} from "@mui/material";
import ThumbUpOutlinedIcon from "@mui/icons-material/ThumbUpOutlined";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import SmsIcon from "@mui/icons-material/Sms";
import ThumbUpIcon from "@mui/icons-material/ThumbUp";
import Grid from "@mui/material/Grid";
import Avatar from "@mui/material/Avatar";
import TextField from "@mui/material/TextField";
import Drawer from "@mui/material/Drawer";
import React, { useEffect, useState } from "react";
import { padding } from "@mui/system";
import { useNavigate } from "react-router";
import { getLikePost, likePost } from "../../store/post/actions";
import { useDispatch, useSelector } from "react-redux";

const BlogsScreen = () => {
  const [selected, setSelected] = React.useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const nav = useNavigate();
  const dispatch = useDispatch();
  const { likes, loading } = useSelector((state) => state.post);
  const [totalLike, setTotalLike] = useState();
  let url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODgikvgcP-cKJ4XFH0nO-OaFPzVNKT9kzjg&usqp=CAU";
  const data = [
    {
      title: "Mega design",
      count: "232",
      img: "https://vitejs.dev/og-image.png",
    },
    {
      title: "Vite ethics",
      count: "232",
      img: "https://vitejs.dev/og-image.png",
    },
    {
      title: "Structure",
      count: "232",
      img: "https://vitejs.dev/og-image.png",
    },
    {
      title: "Vite design",
      count: "232",
      img: "https://vitejs.dev/og-image.png",
    },
  ];
  const handleButtonClick = () => {
    setIsDrawerOpen(true);
  };

  const handleCloseDrawer = () => {
    setIsDrawerOpen(false);
  };
  useEffect(() => {
    dispatch(getLikePost(1));
  }, []);
  useEffect(() => {
    console.log("likes", likes);
    if (likes) {
      setTotalLike(likes);
    }
  }, [likes]);

  const handleLike = (id) => {
    const payload = {
      postid: id,
    };
    dispatch(likePost(payload));
    setSelected(!selected);
  };

  return (
    <>
      <Stack px={"20%"} py={"3em"} mb={3} spacing={3}>
        <Typography
          sx={{
            fontSize: { lg: "3rem", xs: "20px" },
          }}
          variant="h3"
          fontFamily={"Inter"}
          fontWeight={"bold"}
        >
          US Bank crises is facing Public Criticism
        </Typography>
        <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Stack>
            <Avatar sx={{ width: 56, height: 56 }} alt="Remy Sharp" src={url} />
          </Stack>
          <Stack>
            <Typography variant="h6">
              Rumbi &nbsp;
              <span>
                <Chip
                  label="Follow "
                  sx={{
                    backgroundColor: "white",
                    color: "black",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                />
              </span>{" "}
            </Typography>
            <Typography sx={{ fontSize: "12px" }} variant="p">
              5 mint read .&nbsp; May 10
            </Typography>
          </Stack>
        </Grid>
        <Stack
          direction={"row"}
          borderTop={"1px solid gray"}
          borderBottom={"1px solid gray"}
          justifyContent={"end"}
        >
          <Stack alignItems={"center"}>
            <ToggleButton
              value="check"
              selected={selected}
              onChange={() => {
                handleLike(1);
              }}
              sx={{
                border: "none !important",
                borderRadius: "50px !important",

                ":hover": {
                  bgcolor: "white",
                  color: "red",
                },
                "&.Mui-selected, &.Mui-selected:hover": {
                  color: "white",
                  backgroundColor: "white",
                },
              }}
            >
              <FavoriteIcon
                sx={{
                  fill: selected ? "red" : "currentcolor",
                }}
              />
            </ToggleButton>
            <Typography>{totalLike}</Typography>
          </Stack>
          <ToggleButton
            sx={{
              border: "none !important",
              borderRadius: "50px !important",

              ":hover": {
                bgcolor: "white",
                color: "blue",
              },
              "&.Mui-selected, &.Mui-selected:hover": {
                color: "white",
                backgroundColor: "white",
              },
            }}
          >
            <ShareIcon />
          </ToggleButton>
          <ToggleButton
            onClick={handleButtonClick}
            sx={{
              border: "none !important",
              borderRadius: "50px !important",

              ":hover": {
                bgcolor: "white",
                color: "green",
              },
              "&.Mui-selected, &.Mui-selected:hover": {
                color: "white",
                backgroundColor: "white",
              },
            }}
          >
            <SmsIcon />
          </ToggleButton>
        </Stack>
        <Stack>
          <Drawer
            PaperProps={{
              sx: {
                width: 250, // Set the desired width here
                padding: "20px",
              },
            }}
            anchor="right"
            open={isDrawerOpen}
            onClose={handleCloseDrawer}
          >
            <TextField
              margin="normal"
              required
              fullWidth
              id="text"
              label="What are your thoughts ?"
              name="name"
              autoComplete="name"
              autoFocus
            />
            <hr />
            <Grid sx={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <Stack>
                <Avatar
                  sx={{ width: 56, height: 56 }}
                  alt="Remy Sharp"
                  src={url}
                />
              </Stack>
              <Stack>
                <Typography variant="h6">Chris </Typography>
                <Typography sx={{ fontSize: "12px" }} variant="p">
                  5 days ago
                </Typography>
              </Stack>
            </Grid>
            <Typography
              fontFamily={"Inter"}
              sx={{ fontSize: "12px", textAlign: "start", marginTop: "1rem" }}
            >
              Lorem ipsum may be used as a placeholder before final copy is
              available.
            </Typography>
            <Stack
              sx={{
                display: "-webkit-inline-box",
                justifyContent: "space-between",
              }}
            >
              <div>
                <ThumbUpIcon />
              </div>

              <Typography sx={{ cursor: "pointer" }} variant="p">
                Reply
              </Typography>
            </Stack>
          </Drawer>
        </Stack>
        <Stack alignItems={"center"}>
          <Button
            onClick={() => nav("/login")}
            variant="outlined"
            sx={{ width: "fit-content" }}
          >
            Sign In to Leave a Comment
          </Button>
        </Stack>
        <Stack>
          <Typography fontFamily={"Inter"}>
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
            <br />
            In publishing and graphic design, Lorem ipsum is a placeholder text
            commonly used to demonstrate the visual form of a document or a
            typeface without relying on meaningful content. Lorem ipsum may be
            used as a placeholder before final copy is available.
          </Typography>
        </Stack>
        <Stack>
          <Typography variant="h5" fontFamily={"Inter"} fontWeight={"bold"}>
            Thank You
          </Typography>
        </Stack>
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
              backgroundColor: "black",
              color: "white",
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
          />
          <Chip
            label="Crypto Boom"
            sx={{
              width: "fit-content",
              backgroundColor: "black",
              color: "white",
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
          />
          <Chip
            label="Crypto Boom"
            sx={{
              width: "fit-content",
              backgroundColor: "black",
              color: "white",
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
          />
          <Chip
            label="Crypto Boom"
            sx={{
              width: "fit-content",
              backgroundColor: "black",
              color: "white",
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
          />
          <Chip
            label="Crypto Boom"
            sx={{
              width: "fit-content",
              backgroundColor: "black",
              color: "white",
              fontFamily: "Inter",
              fontWeight: "bold",
            }}
          />
        </Stack>
        <Grid
          md={12}
          mb={3}
          sx={{
            display: "flex",
            gap: "10px",
            flexWrap: "wrap",
            mx: { lg: "3rem", md: "2rem", xs: "3rem" },
          }}
        >
          {data.map((item) => {
            return (
              <Card sx={{ maxWidth: 300 }}>
                <CardMedia
                  sx={{ height: 140 }}
                  image={item.img}
                  title="green iguana"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {item.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Share</Button>
                  <Button size="small">Learn More</Button>
                  <Button size="small">
                    <ThumbUpOutlinedIcon />
                  </Button>
                </CardActions>
              </Card>
            );
          })}
        </Grid>
      </Stack>
    </>
  );
};

export default BlogsScreen;
