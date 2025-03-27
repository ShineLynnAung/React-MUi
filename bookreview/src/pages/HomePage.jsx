import {
    Avatar,
    Button,
    FormControl,
    IconButton,
    InputBase,
    InputLabel,
    MenuItem,
    Paper,
    Select,
    Stack,
    ThemeProvider,
    Box,
    Grid,
    Typography,
    CircularProgress,
    Drawer,
    Divider,
  } from "@mui/material";
  import React, { useEffect, useState } from "react";
  import theme from "../theme";
  import { Search, Menu } from "@mui/icons-material";
  import { booksData } from "../constants/configData";
  import { GetBusinessTypeAPI } from "../api/HomeController";
  
  export default function HomePage({ history }) {
    const [loading, setLoading] = useState(true);
    const [data, setData] = useState([]);
    const [chooseBusinessType, setChooseBusinessType] = useState("");
    const [drawerOpen, setDrawerOpen] = useState(false);
  
    useEffect(() => {
      const getBusinessList = async () => {
        try {
          const response = await GetBusinessTypeAPI();
          console.log("Data", response);
          setData(response.business_types || []);
        } catch (error) {
          console.error("Error fetching business types:", error);
        } finally {
          setLoading(false);
        }
      };
  
      const timer = setTimeout(() => {
        getBusinessList();
      }, 1000);
  
      return () => clearTimeout(timer);
    }, []);
  
    const handleChooseBusinessType = (event) => {
      setChooseBusinessType(event.target.value);
    };
  
    const toggleDrawer = (open) => (event) => {
      if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
        return;
      }
      setDrawerOpen(open);
    };
  
    if (loading) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
          }}
        >
          <CircularProgress size={80} />
        </Box>
      );
    }
  //loading
    return (
      <ThemeProvider theme={theme}>
        <Box sx={{ display: "flex" , overflowX: 'hidden'}}>
          {/* App Bar with Menu Button */}
          <Box sx={{ position: 'fixed', top: 16, left: 16, zIndex: 1200 }}>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer(true)}
              edge="start"
              sx={{ mr: 2 }}
            >
              <Menu sx={{ fontSize: 32, color: 'white' }} />
            </IconButton>
          </Box>
  
          {/* Drawer */}
          <Drawer
            anchor="left"
            open={drawerOpen}
            onClose={toggleDrawer(false)}
            sx={{
              '& .MuiDrawer-paper': {
                width: '30%',
                minWidth: 250,
                backgroundColor: '#7a85ee',
                color: 'white',
              },
            }}
          >
            <Box
              sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                p: 3,
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
              onKeyDown={toggleDrawer(false)}
            >
              <Stack direction="row" spacing={2} sx={{ mt: 8, alignItems: 'center' }}>
                <Avatar
                  alt="Andrew"
                  sx={{ width: 80, height: 80 }}
                  src="https://mir-s3-cdn-cf.behance.net/user/230/c944b01205713867.6535e30a65df7.jpg"
                />
                <Box>
                  <Typography variant="h5" sx={{ fontWeight: "bold" }}>
                    Andrew
                  </Typography>
                  <Button
                    variant="outlined"
                    sx={{
                      borderRadius: "999px",
                      padding: "6px",
                      width: 96,
                      mt: 1,
                      color: 'white',
                      borderColor: 'white',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)',
                        borderColor: 'white',
                      }
                    }}
                    onClick={() => history.push("/")}
                  >
                    Logout
                  </Button>
                </Box>
              </Stack>
              <Divider sx={{ my: 3, backgroundColor: 'rgba(255, 255, 255, 0.3)' }} />
              {/* You can add more drawer items here if needed */}
            </Box>
          </Drawer>
  
          {/* Main Content */}
          <Box sx={{ width: "100%" }}>
            {/* Hero Image */}
            <Box sx={{ position: "relative", width: "100%" }}>
              <Box
                component="img"
                sx={{
                  width: "100%",
                  height: 240,
                  objectFit: "cover",
                  opacity: 0.75,
                  filter: "brightness(0.5)",
                }}
                src="https://images.unsplash.com/photo-1490332695540-5acc256ec383?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt=""
              />
              <Typography
                variant="h6"
                sx={{
                  position: "absolute",
                  left: "50%",
                  transform: "translateX(-50%)",
                  top: 56,
                  color: "white",
                  fontWeight: "medium",
                }}
              >
                Find Your Next Book to Read
              </Typography>
              <Box
                sx={{
                  position: "absolute",
                  top: 96,
                  left: "50%",
                  transform: "translateX(-50%)",
                }}
              >
                <Paper
                  component="form"
                  sx={{
                    p: "2px 4px",
                    display: "flex",
                    alignItems: "center",
                    width: 400,
                  }}
                >
                  <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search For a Book"
                    inputProps={{ "aria-label": "Search For a Book" }}
                  />
                  <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
                    <Search />
                  </IconButton>
                </Paper>
              </Box>
            </Box>
  
            {/* Books Grid */}
            <Grid container spacing={3} sx={{ mt: 3, px: 1, mb: 1 }}>
              {booksData.map((book) => (
                <Grid item xs={12} sm={6} md={4} key={book.id}>
                  <Paper
                    sx={{
                      overflow: "hidden",
                      transition: "transform 0.3s, box-shadow 0.3s",
                      "&:hover": {
                        transform: "scale(1.05)",
                        boxShadow: 3,
                      },
                    }}
                  >
                    <Box
                      component="img"
                      src={book.path}
                      alt={book.name}
                      sx={{ width: "100%", height: 320, objectFit: "cover" }}
                    />
                    <Box sx={{ p: 2 }}>
                      <Typography variant="h6" component="h2">
                        {book.name}
                      </Typography>
                      <Typography variant="body2" color="text.secondary">
                        {book.author}
                      </Typography>
                    </Box>
                  </Paper>
                </Grid>
              ))}
            </Grid>
  
            {/* Business Type List */}
            <FormControl fullWidth sx={{ mt: 3, mb: 3, px: 2 }}>
              <InputLabel id="business-type-label">Business Types</InputLabel>
              <Select
                labelId="business-type-label"
                id="business-type-select"
                value={chooseBusinessType}
                label="Choose Business"
                onChange={handleChooseBusinessType}
              >
                {data?.map((item, index) => (
                  <MenuItem key={index} value={item.type}>
                    {item.type}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }