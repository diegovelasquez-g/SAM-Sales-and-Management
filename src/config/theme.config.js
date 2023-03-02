import { createTheme, ThemeProvider } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import React from "react"

export const themePalette = {
    BG: "#12181b",
    LIME: "#C8F45F",
    FONT_GLOBAL: "JetBrains Mono, monospace",
}

const theme = createTheme({
    palette:{
        mode:"dark",
        background:{
            default: themePalette.BG,
        },
        primary:{
            main: themePalette.LIME,
        },
    },
    typography:{
        fontFamily: themePalette.FONT_GLOBAL,
    },
    components:{
        MuiButton:{
            defaultProps:{
                style:{
                    //Aquí va puro css
                    textTransform: "none",
                    boxShadow: "none",
                    borderRadius: "0.5em"
                }
            }
        }
    }
});

export const ThemeConfig = ({children}) => {
    return <ThemeProvider theme={theme}>
            <CssBaseline />
            {children}
           </ThemeProvider>
    
};