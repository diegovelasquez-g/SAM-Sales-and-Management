import { Button, Container, Grid, Paper, TextField, Typography,Box,Alert,Link, CircularProgress} from "@mui/material";
import { React } from "react";
import { useLogin } from "../../hooks/useLogin";
export const LoginPage = () => {
    const {handleSubmit, dataLogin, alertsData, loading} = useLogin()
    return(
        <Container maxWidth="xs">
            <Grid 
                container 
                direction="column" 
                alignItems="center" 
                justifyContent="center" 
                sx={{minHeight:"100vh"}}>
                <Grid item>
                    <Paper 
                        sx={{padding: "1.2em", borderRadius: "0.5em", boxShadow:5}}>
                        <Typography variant="h4" align="center">Sign In</Typography>
                        <Box component="form" onSubmit={handleSubmit}>
                            {
                                alertsData.isActive ? <Alert severity={alertsData.type}>{alertsData.message}</Alert> : null
                            }
                            <TextField 
                                fullWidth 
                                label="Username" 
                                sx={{mt:2,mb:1.5}} 
                                required 
                                name="userName" 
                                onChange={dataLogin}
                                autoFocus/>
                            <TextField 
                                fullWidth 
                                label="Password" 
                                sx={{mt:1.5,mb:1.5}} 
                                required 
                                type="password" 
                                name="password" 
                                onChange={dataLogin}/>
                            <Box sx={{position: 'relative'}}>
                                <Button fullWidth type="submit" variant="contained" disabled={loading}>SIGN IN</Button>
                                {
                                    loading ? <CircularProgress 
                                    size={24}
                                    sx={{
                                        position: 'absolute',
                                        top: '50%',
                                        left: '50%',
                                        marginTop: '-12px',
                                        marginLeft: '-12px'
                                    }} /> : null
                                }
                            </Box>
                            
                        </Box>
                    </Paper>
                </Grid>
                <Grid item sx={{maxWidth:"45vh", mt: 2}} direction="row">
                    <Paper sx={{borderRadius:"0.5em", height: "40%", maxWidth:"100vh", boxShadow: 5}}>
                        <Box 
                            justifyContent="center"
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',
                                p: 1.4,
                                m: 1,
                            }}>
                            <Typography variant="body2">Don't have an account?</Typography>
                            <Typography variant="body2"><Link href="/SignUp" sx={{pl:1}}>Create an account.</Link></Typography>
                        </Box>
                    </Paper>
                </Grid>
            </Grid>
        </Container>
    )
};