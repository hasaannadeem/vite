import styled from "@emotion/styled";
import {
  IconButton,
  Link,
  ListItem,
  ListItemButton,
  ListItemIcon,
  Stack,
  Typography,
} from "@mui/material";
import React from "react";
import Facebook from "../assets/images/Facebook.svg";
import LinkedIn from "../assets/images/LinkedIn.svg";
import Instagram from "../assets/images/Instagram.svg";

const HoverTypography = styled(Typography)(({ theme }) => ({
  "&:hover": {
    color: "black",
    backgroundColor: "white",
    borderRadius: "10px",
  },
}));
const footerSocialIcons = [
  { icon: <img src={Instagram} alt="" />, value: "instaUrl" },
  { icon: <img src={LinkedIn} alt="" />, value: "linkedInUrl" },
  { icon: <img src={Facebook} alt="" />, value: "facebookUrl" },
];

const Footer = (props) => {
  return (
    <Stack minHeight={"10vh"} bgcolor="black" px={4} py={2}>
      <Stack direction={"row"} justifyContent={"space-between"} color="white">
        <Stack sx={{ position: "relative" }}>
          <Typography variant="body2" color="white">
            {"Copyright © "}
            <Link
              underline="none"
              color="inherit"
              href="http://localhost:3000/"
            >
              Vite
            </Link>{" "}
            {new Date().getFullYear()}
            {"."}
          </Typography>
          <Typography
            sx={{
              position: "absolute",
              top: "50%",
              transform: "translateY(-50%)",
            }}
          >
            LOGO
          </Typography>
        </Stack>
        <Stack direction="row" spacing={3}>
          <Stack>
            <Typography fontWeight="bold" mb={2} padding={1}>
              Pages
            </Typography>
            <HoverTypography
              padding={1}
              sx={{ cursor: "pointer" }}
              color="white"
              // onClick={() => window.location.replace("/#cryptocurrencyworld")}
            >
              Our Story
            </HoverTypography>
            <HoverTypography
              padding={1}
              sx={{ cursor: "pointer" }}
              color="white"
              // onClick={() => window.location.replace("/#cryptocurrencynews")}
            >
              What's New
            </HoverTypography>
            <HoverTypography
              padding={1}
              sx={{ cursor: "pointer" }}
              color="white"
              // onClick={() => window.location.replace("/#chooseyourointerest")}
            >
              Membership
            </HoverTypography>
          </Stack>
          <Stack>
            <Typography fontWeight="bold" mb={2} padding={1}>
              Jum To:
            </Typography>
            <HoverTypography
              padding={1}
              color="white"
              onClick={() => window.location.replace("/#cryptocurrencyworld")}
              sx={{ cursor: "pointer" }}
            >
              Cryptocurrency World
            </HoverTypography>
            <HoverTypography
              padding={1}
              color="white"
              onClick={() => window.location.replace("/#cryptocurrencynews")}
              sx={{ cursor: "pointer" }}
            >
              Cryptocurrency News
            </HoverTypography>
            <HoverTypography
              padding={1}
              color="white"
              onClick={() => window.location.replace("/#chooseyourointerest")}
              sx={{ cursor: "pointer" }}
            >
              Choose Your Interest
            </HoverTypography>
          </Stack>

          <Stack display={{ xs: "none", sm: "inherit" }}>
            <Typography fontWeight="bold" mb={2} padding={1}>
              Social
            </Typography>
            <Stack
              flexDirection="row"
              justifyContent={{ xs: "center", sm: "inherit" }}
            >
              {footerSocialIcons.map(({ icon, value }, i) => (
                <ListItem key={i} disablePadding sx={{ width: "fit-content" }}>
                  <ListItemButton sx={{ padding: "0 !important" }}>
                    <ListItemIcon
                      sx={{ color: "#FFFFFF", justifyContent: "center" }}
                    >
                      {icon}
                    </ListItemIcon>
                  </ListItemButton>
                </ListItem>
              ))}
            </Stack>
          </Stack>
        </Stack>
      </Stack>
      <Stack
        flexDirection="row"
        justifyContent={"center"}
        display={{ xs: "inherit", sm: "none" }}
      >
        {footerSocialIcons.map(({ icon, value }, i) => (
          <ListItem key={i} disablePadding sx={{ width: "fit-content" }}>
            <ListItemButton sx={{ padding: "0 !important" }}>
              <ListItemIcon sx={{ color: "#FFFFFF", justifyContent: "center" }}>
                {icon}
              </ListItemIcon>
            </ListItemButton>
          </ListItem>
        ))}
      </Stack>
    </Stack>
  );
};

export default Footer;
