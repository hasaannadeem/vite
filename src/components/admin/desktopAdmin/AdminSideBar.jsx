import { Badge } from "@mui/base";
import {
  Card,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router";
import { sideBarList } from "../../../common/data";

const AdminSideBar = () => {
  const nav = useNavigate();
  const token = localStorage.getItem("token");
  const location = useLocation();
  const handlePath = (path) => {
    if (token) {
      nav(path);
    }
  };
  return (
    <>
      <Card sx={{ height: "80vh", borderRadius: "25px" }} elevation={5}>
        <Stack
          sx={{ backgroundColor: "#ffffff" }}
          
        >
          <Drawer
            sx={{
              flexShrink: 0,
              "& .MuiDrawer-paper": {
                position: "inherit",
                borderRight: "0px",
              },
            }}
            variant="permanent"
            anchor="left"
          >
            <List>
              {sideBarList.map(({ icon, text, path }, index) => (
                <ListItem
                  key={text}
                  sx={{
                    paddingY: "8px",
                    paddingX: "8px",
                    display: text === "Logout" && !token ? "none" : "inherit",
                  }}
                >
                  <ListItemButton
                    sx={{ marginInlineStart: 1, marginInlineEnd: 1 }}
                    onClick={() => handlePath(path)}
                    className={
                      path === location.pathname
                        ? "sidebarStyle"
                        : "sidebarUnstyle"
                    }
                  >
                    <ListItemIcon
                      sx={{
                        color: path === location.pathname ? "black" : "#98A3B3",
                      }}
                    >
                      {icon}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>

          {/* Logout Popup */}
          {/* <ReuseableModal
            handleClose={() => setLogout(false)}
            open={logout}
            width={"fit-content"}
          >
            <Typography variant="h6" fontWeight={"bold"}>
              Are you sure, you want to logout?
            </Typography>
            <Stack direction={"row"} width="100%" spacing={2}>
              <CustomButton
                sx={{
                  borderRadius: "54.6591px",
                  bgcolor: "#F83D4B",
                  fontSize: "small",
                  p: 2,
                  color: "white",
                  width: "100%",
                }}
                onClick={() => handleLogoutClose()}
              >
                Yes
              </CustomButton>
              <CustomButton
                sx={{
                  borderRadius: "54.6591px",
                  bgcolor: "#F83D4B",
                  fontSize: "small",
                  p: 2,
                  color: "white",
                  width: "100%",
                }}
                onClick={() => setLogout(false)}
              >
                Cancel
              </CustomButton>
            </Stack>
          </ReuseableModal> */}
        </Stack>
      </Card>
    </>
  );
};

export default AdminSideBar;
