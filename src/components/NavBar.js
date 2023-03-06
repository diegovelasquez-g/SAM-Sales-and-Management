import { AppBar, IconButton, Toolbar, Typography, Box } from "@mui/material"
import { Container } from "@mui/system"
import { Menu } from '@mui/icons-material'
export const NavBar = () =>{
    return(
        <AppBar position="static">
           <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography variant="h6" noWrap sx={{
                        mr: 2,
                        display: {xs: 'none', md:'flex'},
                        fontWeight: 700,
                        color: 'inherit',
                        textDecoration: 'none'
                    }}>
                        MyApppp
                    </Typography>
                    <Box sx={{flexGrow: 1, display: {xs: 'flex',md: 'none'}}}>
                       <IconButton>
                            <Menu />
                        </IconButton> 
                    </Box>

                </Toolbar>
            </Container> 
        </AppBar>
    )
}