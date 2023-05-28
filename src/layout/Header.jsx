import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import { useLocation, useNavigate } from "react-router";
import EditNoteIcon from "@mui/icons-material/EditNote";
import storage from "redux-persist/lib/storage";
import { userFlush } from "../store/auth/actions";
import { useDispatch } from "react-redux";

const pages = [" Get Started", "Our Story", `What's New`];
const settings = [
  { rouete: "/profile-detail", name: "Profile" },
  { rouete: "/", name: "Account" },
  { rouete: "/", name: "Dashboard" },
  { rouete: "/logout", name: "Logout" },
];

function Header() {
  let url =
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODgikvgcP-cKJ4XFH0nO-OaFPzVNKT9kzjg&usqp=CAU";
  const nav = useNavigate();
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);
  const token = localStorage.getItem("token");

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const dispatch = useDispatch();

  const handleCloseUserMenu = (address) => {
    console.log(
      "🚀 ~ file: Header.jsx:50 ~ handleCloseUserMenu ~ address:",
      address
    );
    if (address === "/logout") {
      storage.removeItem("persist:root");
      window.localStorage.clear();
      sessionStorage.clear();
      dispatch(userFlush());
      nav("/login");
    } else {
      nav(address);
    }
    setAnchorElUser(null);
  };
  const location = useLocation();
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <AppBar
      position="static"
      sx={{
        color: { xs: "black" },
        bgcolor: location.pathname === "/" ? "#daf3fc" : "white",
        boxShadow: "none",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            href="/"
            sx={{
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "black",
              cursor: "pointer",
              textDecoration: "none",
              display: { md: "flex", xs: "none" },
            }}
            onClick={() => nav("/")}
          >
            LOGO
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
            onClick={() => nav("/")}
          >
            LOGO
          </Typography>
          <Box
            direction={"row"}
            mr={5}
            justifyContent={"end"}
            spacing={3}
            sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}
          >
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "black", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {token && (
              <IconButton onClick={() => nav("/story")} sx={{ mx: 1 }}>
                <EditNoteIcon />
              </IconButton>
            )}

            <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
              {token ? (
                <div>
                  <Avatar
                    size="large"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={handleMenu}
                    color="inherit"
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTODgikvgcP-cKJ4XFH0nO-OaFPzVNKT9kzjg&usqp=CAU"
                  />
                  <Menu
                    sx={{ mt: "45px" }}
                    id="menu-appbar"
                    anchorEl={anchorEl}
                    anchorOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    keepMounted
                    transformOrigin={{
                      vertical: "top",
                      horizontal: "right",
                    }}
                    open={Boolean(anchorEl)}
                    onClose={handleClose}
                  >
                    {settings.map((setting) => (
                      <MenuItem
                        key={setting.name}
                        onClick={() => handleCloseUserMenu(setting.rouete)}
                      >
                        <Typography textAlign="center">
                          {setting.name}
                        </Typography>
                      </MenuItem>
                    ))}
                  </Menu>
                </div>
              ) : (
                <Button
                  variant="contained"
                  onClick={() => nav("/login")}
                  sx={{
                    borderRadius: "25px",
                    whiteSpace: "nowrap",
                    color: "white",
                    bgcolor: "black",
                    ":hover": {
                      bgcolor: "wheat",
                      color: "black",
                    },
                  }}
                >
                  Membership
                </Button>
              )}
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
