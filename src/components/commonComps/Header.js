"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import {
  AppBar,
  Box,
  Container,
  IconButton,
  Menu,
  MenuItem,
  Toolbar,
  Button,
  Grid,
  Typography,
  Paper,
  Drawer,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { useTheme, useMediaQuery } from "@mui/material";
import { navbarFeatures } from "../../Data/Navbar";
import { MdAddIcCall } from "react-icons/md";

const Header = () => {
  const [featuresAnchor, setFeaturesAnchor] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleFeaturesClick = (event) => {
    setFeaturesAnchor(event.currentTarget);
  };

  const handleFeaturesClose = () => {
    setFeaturesAnchor(null);
  };

  const toggleDrawer = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <AppBar position="fixed" className="header">
      <Container maxWidth="lg">
        <Toolbar disableGutters className="toolbar">
          {/* Logo */}
          <Link href="/" className="logo-link">
            <img
              src="/assets/white-logo.png"
              alt="A2Zhome-solutions"
              className="logo-image"
            />
          </Link>

          {/* Desktop Navigation (Order Maintained) */}
          {!isMobile && (
            <Box className="nav-container">
              <Button
                component={Link}
                href="/"
                color="inherit"
                className={`nav-button ${pathname === "/" ? "active" : ""}`}
              >
                Home
              </Button>

              <Button
                color="inherit"
                onClick={handleFeaturesClick}
                endIcon={<KeyboardArrowDownIcon />}
                className="nav-button"
              >
                Services
              </Button>
              <Menu
                anchorEl={featuresAnchor}
                open={Boolean(featuresAnchor)}
                onClose={handleFeaturesClose}
                sx={{ mt: 1 }}
                MenuListProps={{ disablePadding: true }}
              >
                <Paper sx={{ p: 2 }}>
                  <Typography variant="h5">Interior</Typography>
                  <Grid container spacing={2} sx={{ width: 500 }}>
                    {navbarFeatures.map((feature, index) => (
                      <Grid item xs={3} key={index}>
                        <Link href={feature.link}>
                          <MenuItem
                            onClick={handleFeaturesClose}
                            sx={{
                              "&:hover": { backgroundColor: "#f0f0f0" },
                              textDecoration: "none",
                              color: "inherit",
                            }}
                          >
                            <Typography
                              variant="body1"
                              sx={{ textDecoration: "none", color: "#000" }}
                            >
                              {feature.title}
                            </Typography>
                          </MenuItem>
                        </Link>
                      </Grid>
                    ))}
                  </Grid>
                </Paper>
              </Menu>

              <Button
                component={Link}
                href="/gallery"
                color="inherit"
                className={`nav-button ${
                  pathname === "/gallery" ? "active" : ""
                }`}
              >
                Gallery
              </Button>

              <Button
                component={Link}
                href="/blog"
                color="inherit"
                className={`nav-button ${pathname === "/blog" ? "active" : ""}`}
              >
                Blog
              </Button>

              <Button
                component={Link}
                href="/contact"
                color="inherit"
                className={`nav-button ${
                  pathname === "/contact" ? "active" : ""
                }`}
              >
                Contact
              </Button>
            </Box>
          )}

          {/* Desktop "Book a Consultation" Button */}
          {!isMobile && (
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1.1rem",
                  backgroundColor: "#0d6aa3",
                  padding: "8px 16px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#115580",
                  },
                }}
              >
                Call now: +1- 832-312-5501
              </Typography>
            </Box>
          )}

          {/* Mobile Menu Button (Hamburger Icon with #0d6aa3 Color) */}
          {isMobile && (
            <IconButton
              edge="end"
              onClick={toggleDrawer}
              className="mobile-menu-icon"
            >
              <MenuIcon sx={{ color: "#0d6aa3", fontSize: 32 }} />
            </IconButton>
          )}
        </Toolbar>
      </Container>

      {/* Mobile Drawer (Maintaining Order + Close Icon) */}
      <Drawer anchor="right" open={mobileOpen} onClose={toggleDrawer}>
        <Box sx={{ width: 250, p: 2 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end" }}>
            <IconButton onClick={toggleDrawer}>
              <CloseIcon sx={{ color: "#0d6aa3", fontSize: 32 }} />
            </IconButton>
          </Box>
          <List>
            <ListItem button component={Link} href="/" onClick={toggleDrawer}>
              <ListItemText primary="Home" />
            </ListItem>

            <ListItem button onClick={handleFeaturesClick}>
              <ListItemText primary="Services" />
            </ListItem>

            <ListItem
              button
              component={Link}
              href="/gallery"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Gallery" />
            </ListItem>

            <ListItem
              button
              component={Link}
              href="/blog"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Blog" />
            </ListItem>

            <ListItem
              button
              component={Link}
              href="/contact"
              onClick={toggleDrawer}
            >
              <ListItemText primary="Contact" />
            </ListItem>

            <ListItem>
              <Typography
                sx={{
                  color: "#fff",
                  fontWeight: "bold",
                  fontSize: "1rem",
                  backgroundColor: "#0d6aa3",
                  padding: "4px 8px",
                  borderRadius: "8px",
                  transition: "all 0.3s ease",
                  "&:hover": {
                    backgroundColor: "#095484",
                  },
                }}
              >
                +1- 832-312-5501
              </Typography>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header;
