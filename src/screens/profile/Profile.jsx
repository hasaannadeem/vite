import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router";
import { useState, useEffect, useRef } from "react";
import Avatar from "@mui/material/Avatar";
import ProfileTabs from "../../components/Tabs/Tabs";

import {
  Stack,
  ToggleButton,
  Typography,
  Chip,
  Button,
  Box,
  CardContent,
  CardMedia,
  CardActions,
  Card,
  Input,
} from "@mui/material";
import Footer from "../../layout/Footer";

const Profile = () => {
  const nav = useNavigate();
  const [selectedFile, setSelectedFile] = useState();

  const [preview, setPreview] = useState();
  useEffect(() => {
    if (!selectedFile) {
      setPreview(undefined);
      return;
    }
    const objectUrl = URL.createObjectURL(selectedFile);
    setPreview(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectedFile]);
  const onSelectFile = (e) => {
    if (!e.target.files || e.target.files.length === 0) {
      setSelectedFile(undefined);
      return;
    }

    // I've kept this example simple by using the first image instead of multiple

    setSelectedFile(e.target.files[0]);
  };

  const inputFileRef = useRef(null);

  let url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODgikvgcP-cKJ4XFH0nO-OaFPzVNKT9kzjg&usqp=CAU";
  return (
    <>
      <Container style={{ width: "100%", padding: "0px" }} maxWidth="xl">
        <Grid
          xs={12}
          py={3}
          px={3}
          sx={{ width: "inherit" }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
          color={"#F83D4B"}
          backgroundColor={"#DCF3FC"}
        >
          <Grid sx={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <Stack>
              {selectedFile ? (
                <Avatar
                  src={preview}
                  sx={{ width: 56, height: 56, cursor: "pointer" }}
                  alt="Remy Sharp"
                />
              ) : (
                <Avatar
                  src={url}
                  onClick={() => inputFileRef.current.click()}
                  sx={{ width: 56, height: 56, cursor: "pointer" }}
                  alt="Remy Sharp"
                />
              )}
              <input
                ref={inputFileRef}
                type="file"
                id="uploadedFile"
                accept=".png,.jpg,.jpeg,.gif"
                name="uploadedFile"
                // multiple={true}
                style={{ display: "none" }}
                onChange={onSelectFile}
              />{" "}
            </Stack>
            <Stack mt={1}>
              <Typography
                sx={{ fontWeight: "bold", color: "black" }}
                variant="h6"
              >
                Anna Adame{" "}
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "black" }} variant="p">
                Owner & Founder
              </Typography>
              <Typography sx={{ fontSize: "12px", color: "black" }} variant="p">
                California,United States
              </Typography>
            </Stack>
          </Grid>

          <Grid mr={3} sx={{ display: "flex", gap: "1rem" }}>
            <Stack sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{ fontWeight: "bold", color: "black" }}
                variant="p"
              >
                24.3K
              </Typography>
              <Typography color={"black"} variant="p">
                Followers
              </Typography>
            </Stack>
            <Stack sx={{ display: "flex", flexDirection: "column" }}>
              <Typography
                sx={{ fontWeight: "bold", color: "black" }}
                variant="p"
              >
                1.3K
              </Typography>
              <Typography color={"black"} variant="p">
                Following
              </Typography>
            </Stack>
          </Grid>
        </Grid>

        <Stack>
          <ProfileTabs />
        </Stack>
      </Container>
    </>
  );
};

export default Profile;
