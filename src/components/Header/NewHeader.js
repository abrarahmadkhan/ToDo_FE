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
import { Link } from "@mui/material";
import { useState } from "react";
import LogoutButton from "../Button/LogOut";
import jwt from "jwt-decode";
import LogoOG from "../Images/LogoOG.png";

// const pages = ["Create New", "Pending", "InProcesses", "Completed"];
//const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const isAuth = window.sessionStorage.AccessToken;
  const user = jwt(isAuth);

  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  // const [CreateNew, setCreateNew] = React.useState();

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xll">
        <Toolbar disableGutters>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="home"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            <img src={LogoOG} width="75" height="75" alt="LogoOG" />
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
              {/* {pages.map((page) => (
                <MenuItem key={page} onClick={handleCreateNewClick}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))} */}
              <MenuItem>
                <Typography textAlign="center">
                  <Link href="/home" color="inherit" underline="none">
                    <Button onClick={handleCloseNavMenu}>HomePage</Button>
                  </Link>
                </Typography>
              </MenuItem>
              {/* <MenuItem>
                <Typography textAlign="center">
                  <Link href="#" color="inherit" underline="none">
                    <Button onClick={handleCloseNavMenu}>Pending</Button>
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">
                  <Link href="#" color="inherit" underline="none">
                    <Button onClick={handleCloseNavMenu}>In Processes</Button>
                  </Link>
                </Typography>
              // </MenuItem> */}
              <MenuItem>
                <Typography textAlign="center">
                  <Link href="/account" color="inherit" underline="none">
                    <Button onClick={handleCloseNavMenu}>Users</Button>
                  </Link>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>

          <Typography
            variant="h5"
            noWrap
            component="a"
            href="home"
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
          >
            <img src={LogoOG} width="75" height="75" alt="LogoOG" />
          </Typography>
          <Box sx={{ flexGrow: 3, display: { xs: "none", md: "flex" } }}>
            <Button
              variant="text"
              href="/home"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Home Page
            </Button>
            {/* <Button
              variant="text"
              href="form"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              Pending
            </Button>
            <Button
              variant="text"
              href="form"
              sx={{ my: 2, color: "white", display: "block" }}
            >
              In Processes
            </Button> */}
            <Button
              variant="text"
              href="/account"
              sx={{
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Users
            </Button>
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt={user.user} src="/static/images/avatar/1.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {/* <MenuItem> */}
              {/* <Typography textAlign="center">
                  <Link href="#" color="inherit" underline="none">
                    <Button onClick={handleCloseUserMenu}>Profile</Button>
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                {/* <Typography textAlign="center">
                  <Link href="#" color="inherit" underline="none">
                    <Button onClick={handleCloseUserMenu}>Account</Button>
                  </Link>
                </Typography> 
              </MenuItem> */}
              <MenuItem>
                <Typography textAlign="center">
                  <Link href="/home" color="inherit" underline="none">
                    <Button onClick={handleCloseUserMenu}>Dashboard</Button>
                  </Link>
                </Typography>
              </MenuItem>
              <MenuItem>
                <Typography textAlign="center">
                  <Button onClick={handleCloseUserMenu}>
                    <LogoutButton />
                  </Button>
                </Typography>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
