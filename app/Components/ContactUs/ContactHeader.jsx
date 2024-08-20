"use client";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Link from "next/link"; // For Next.js navigation
import { Box, Dialog, DialogTitle, DialogContent, DialogActions, TextField, Grid } from "@mui/material";

const ContactHeader = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [modalOpen, setModalOpen] = useState(false);
  const [loginType, setLoginType] = useState(""); // "mechanic" or "user"

  const toggleDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const handleOpenModal = (type) => {
    setLoginType(type);
    setModalOpen(true);
  };

  const handleCloseModal = () => {
    setModalOpen(false);
    setLoginType(""); // Reset login type
  };

  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data, [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationError = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Simplified email regex

    if(!data.email.trim()){
      validationError.email = 'please enter email';
    } else if(!regex.test(data.email)) {
      validationError.email = 'invalid email';
    }

    if(!data.password.trim()){
      validationError.password = 'please enter password';
    }

    setErrors(validationError);

    if(Object.keys(validationError).length === 0) {
      setData({email: '', password: ''});
      setModalOpen(false);
      setLoginType(""); // Reset login type
    }
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#020E3F' ,borderRadius:'10px' }} elevation={0}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          px: { xs: 1, sm: 2 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            lineHeight: "10px",
            color: "white",
          }}
        >
          <Box variant="h6" component={'img'} src="/logo.png" alt="Logo" sx={{ flexGrow: 0, height: "30px", marginLeft: "60px" }} />
          {["Home", "About us", "Product", "Pricing", "Contact us"].map((text, index) => (
            <Button
              key={index}
              color="inherit"
              component={Link}
              href={`/${text.toLowerCase().replace(/ /g, "-")}`}
              sx={{
                display: { xs: "none", md: "flex" },
                fontSize: { xs: "inherit", sm: "inherit" },
                minWidth: "auto",
                margin: "0 10px",
                color: "white",
              }}
            >
              {text}
            </Button>
          ))}
        </Box>

        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Button
            onClick={() => handleOpenModal("mechanic")}
            color="inherit"
            sx={{
              border: "2px solid blue",
              marginLeft: "10px",
              color: "white",
              display: { xs: "none", md: "flex" },
              mx: 1,
              borderRadius: "10px",
            }}
          >
            Login as a mechanic
          </Button>
          <Button
            onClick={() => handleOpenModal("user")}
            color="inherit"
            sx={{
              border: "2px solid blue",
              marginLeft: "10px",
              color: "white",
              display: { xs: "none", md: "flex" },
              mx: 1,
              borderRadius: "10px",
            }}
          >
            Login as a user
          </Button>
        </Box>

        <IconButton
          edge="end"
          color="inherit"
          aria-label="menu"
          onClick={toggleDrawer}
          sx={{
            display: { xs: "flex", md: "none" },
            marginBottom: 1,
            color: 'white'
          }}
        >
          <MenuIcon />
        </IconButton>
        <Drawer
          anchor="right"
          open={drawerOpen}
          onClose={toggleDrawer}
          sx={{
            '& .MuiDrawer-paper': {
              width: '250px', // Adjust the width as needed
              borderRadius: "10px",
            },
          }}
        >
          <List sx={{ width: '100%', padding: '10px' }} onClick={toggleDrawer}>
            {["Home", "About us", "Product", "Pricing", "Contact us"].map((text, index) => (
              <ListItem button key={index} component={Link} href={`/${text.toLowerCase().replace(/ /g, "-")}`}>
                <ListItemText primary={text} />
              </ListItem>
            ))}
          </List>
          <Box sx={{ padding: "10px" }}>
            <Button
              onClick={() => handleOpenModal("mechanic")}
              sx={{
                border: "1px solid blue",
                marginBottom: "10px",
                width: "100%",
                borderRadius: "10px",
                mx: 1,
              }}
            >
              Login as a mechanic
            </Button>
            <Button
              onClick={() => handleOpenModal("user")}
              sx={{
                border: "1px solid blue",
                width: "100%",
                borderRadius: "10px",
                mx: 1,
              }}
            >
              Login as a user
            </Button>
          </Box>
        </Drawer>
        <Dialog open={modalOpen} onClose={handleCloseModal} maxWidth="sm" fullWidth>
          <DialogTitle>{loginType === "mechanic" ? "Login as Mechanic" : "Login as User"}</DialogTitle>
          <DialogContent>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                height: '100%',
              }}
            >
              <form onSubmit={handleSubmit} style={{ width: '100%' }}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Email"
                      type="email"
                      name="email"
                      value={data.email}
                      onChange={handleChange}
                      required
                    />
                    {errors.email && <span style={{ color: 'red' }}>{errors.email}</span>}
                  </Grid>
                  <Grid item xs={12}>
                    <TextField
                      fullWidth
                      margin="normal"
                      label="Password"
                      type="password"
                      name="password"
                      value={data.password}
                      onChange={handleChange}
                      required
                    />
                    {errors.password && <span style={{ color: 'red' }}>{errors.password}</span>}
                  </Grid>
                  <Grid item xs={12}>
                    <Link href='/steps'>
                      <Button type="submit" variant="contained" color="primary" sx={{ mt: 2 }} fullWidth>
                        Login
                      </Button>
                    </Link>
                  </Grid>
                </Grid>
              </form>
            </Box>
            <p>This is the login form for {loginType === "mechanic" ? "mechanics" : "users"}.</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleCloseModal} color="primary">
              Cancel
            </Button>
          </DialogActions>
        </Dialog>
      </Toolbar>
    </AppBar>
  );
};

export default ContactHeader;
