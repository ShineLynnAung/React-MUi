import {
    Box,
    Button,
    Checkbox,
    FormControlLabel,
    Stack,
    ThemeProvider,
    Typography,
    Container,
    Paper,
    Grid,
  } from "@mui/material";
  import React, { useState } from "react";
  import theme from "../../theme";
  import { Link } from "react-router-dom";
  import { LoginApi } from "../../api/AuthController";
  import DefaultBtn from "../../components/buttons/DefaultBtn";
import TextInput from "../../components/inputs/TextInput";
import PasswordInput from "../../components/inputs/PasswordInput";
import Logos from "../../components/images/Logos";
  
  export default function LoginPage({ history }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
  
    const handleLogin = async () => {
      LoginApi(username, password, { history });
    };
  
    return (
      <ThemeProvider theme={theme}>
        <Grid container sx={{ height: "100vh" }}>
          <Grid
            item
            md={6}
            sx={{
              display: { xs: "none", md: "flex" },
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "#7a85ee",
              color: "white",
              textAlign: "center",
              padding: 4,
            }}
          >
            <Typography variant="h3" fontWeight={600} gutterBottom>
              Hey There
            </Typography>
            <Typography variant="h5">Welcome Back.</Typography>
            <Typography variant="h6" mt={2}>
              You are just one step away from your feed
            </Typography>
            <Typography variant="body1" mt={4}>
              Don't have an account?
            </Typography>
            <Stack spacing={2} direction="row" mt={2}>
              <Button variant="outlined" onClick={() => history.push("/register")}>
                Sign Up
              </Button>
            </Stack>
          </Grid>
  
          
          <Grid
            item
            xs={12}
            md={6}
            container
            // alignItems="center"
            justifyContent="center"
            component={Paper}
          >
            <Container maxWidth="xs">
              <Typography variant="h6" color="secondary" fontWeight={600} mb={3} mt={5}>
                Sign in
              </Typography>
              <Box>
                <TextInput variant={"standard"} label={"Name"} fullwidth={true} onChange={setUsername} style={{mb:5}}/>
                
                <PasswordInput variant={'standard'} onChange={setPassword} label={"Password"}/>
  
                <Stack direction="row" justifyContent="space-between" alignItems="center" mt={2}>
                  <FormControlLabel control={<Checkbox sx={{ '&.Mui-checked': { color: '#7a85ee' } }}/>} label="Keep me logged in" />
                  <Link to="/forgot" style={{ color: "#FF7043", textDecoration: "none" }}>
                    Forgot Password?
                  </Link>
                </Stack>
  
                <Box display="flex" justifyContent="center" mt={3}>
                  <DefaultBtn
                    style={{ borderRadius: 999, padding: "10px" , width:"100%"}}
                    variant="contained"
                    color="secondary"
                    onClick={handleLogin}
                    label="Login"
                  />
                </Box>
  
                <Typography variant="body2" color="textSecondary" textAlign="center" mt={3}>
                  or, Use social media to sign in
                </Typography>

              </Box>
              <Box sx={{
                mt:4,
                display: "flex" ,
                flexDirection: "row",
                alignItems: "center",
                gap:2,
                justifyContent: 'center'
              }}>
                <Logos alt={'Fb'} url={'https://store-images.s-microsoft.com/image/apps.30645.9007199266245907.cb06f1f9-9154-408e-b4ef-d19f2325893b.ac3b465e-4384-42a8-9142-901c0405e1bc'}/>
                <Logos alt={'x'} url={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlMFJv9yo-2GQMxYrv8ct7IIw9oM7eJcHPnA&s"}/>
                <Logos alt={'ig'} url={"data:image/jpeg;base64,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"}/>
              </Box>
            </Container>
          </Grid>
        </Grid>
      </ThemeProvider>
    );
  }
  