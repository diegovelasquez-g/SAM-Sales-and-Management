import { React } from "react";
import { Container, Grid, Paper, Typography, Box, TextField, Button,Alert} from "@mui/material";
import { useRegister } from "../../hooks/useRegister";
export const RegisterPage = () =>{
    const {handleSubmit, dataRegister,alertsData} = useRegister()
    return(
        <Container maxWidth="xs">
            <Grid 
                container
                direction="column"
                justifyContent="center"
                alignItems="center"
                sx={{minHeight:"100vh"}}> 
                <Grid item>
                    <Paper sx={{padding: "1.2em", borderRadius: "0.5em", boxShadow:5}}> 
                        <Typography variant="h4" align="center">Sign Up</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            {
                                alertsData.isActive ? <Alert severity={alertsData.type}>{alertsData.message}</Alert> : null
                            }
                            <TextField
                                label="Email"
                                fullWidth
                                sx={{mt:2,mb:1.5}} 
                                required 
                                name="email"
                                autoFocus
                                type="email"
                                onChange={dataRegister}/>
                            <TextField
                                label="Username"
                                fullWidth
                                sx={{mt:1,mb:1.5}} 
                                required
                                name="userName"
                                onChange={dataRegister} />
                            <TextField
                                label="Password"
                                fullWidth
                                sx={{mt:1,mb:1.5}} 
                                required
                                name="password"
                                type="password"
                                onChange={dataRegister} />
                            <TextField
                                label="Confirm Password"
                                fullWidth
                                sx={{mt:1,mb:1.5}} 
                                required
                                name="confirmPassword"
                                type="password"
                                onChange={dataRegister} />
                            <Button fullWidth type="submit" variant="contained">SIGN UP</Button>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
}