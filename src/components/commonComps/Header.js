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
} from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
import { features } from "../../Data/Navbar";
import "../../../styles/Header.css"

const Header = () => {
  const [featuresAnchor, setFeaturesAnchor] = useState(null);
  const pathname = usePathname();

  const handleFeaturesClick = (event) => {
    setFeaturesAnchor(event.currentTarget);
  };

  const handleFeaturesClose = () => {
    setFeaturesAnchor(null);
  };

  return (
    <AppBar position="fixed" className="header">
      <Container maxWidth="lg">
        <Toolbar disableGutters>
          <Link href="/" className="logo-link">
            <img
              src="/assets/white-logo.png"
              alt="A2Zhome-solutions"
              className="logo-image"
            />
          </Link>

          <Box className="nav-container"
           // sx={{ flexGrow: 1, display: "flex", alignItems: "center", ml: 4 }}
          >
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
                <Typography variant="h5" >
                 Interior
                </Typography>
                <Grid container spacing={2} sx={{ width: 500 }}>
                  {features.map((feature, index) => (
                    <Grid item xs={4} key={index}>
                      <Link href={feature.link} passHref>
                        <MenuItem onClick={handleFeaturesClose}>
                          <Typography variant="body1">
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
              href="/portfolio"
              color="inherit"
              className={`nav-button ${pathname === "/portfolio" ? "active" : ""}`}
            >
              Portfolio
            </Button>
            <Button
              component={Link}
              href="/gallery"
              color="inherit"
              className={`nav-button ${pathname === "/gallery" ? "active" : ""}`}
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
              className={`nav-button ${pathname === "/contact" ? "active" : ""}`}
            >
              Contact
            </Button>
          </Box>

          <Box sx={{ display: "flex", gap: 2 }}>
            <Button  variant="outlined">
              Book a Free Consultation
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
