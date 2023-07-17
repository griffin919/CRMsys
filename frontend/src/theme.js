import { createTheme } from '@mui/material/styles';
import { light } from "@mui/material/styles/createPalette";

export const DarkShades = {
    //darkblue
    darkblue: {
        100: "#cdd0d6",
        200: "#9ca1ac",
        300: "#6a7183",
        400: "#394259",
        500: "#071330",
        600: "#060f26",
        700: "#040b1d",
        800: "#030813",
        900: "#01040a"
    },
    //midnight blue
    primary: {
        100: "#ced9df",
        200: "#9eb3bf",
        300: "#6d8da0",
        400: "#3d6780",
        500: "#0c4160",
        600: "#0a344d",
        700: "#07273a",
        800: "#051a26",
        900: "#020d13"
    },
    //misty blue
    secondary: {
        100: "#f3f5f8",
        200: "#e7ebf0",
        300: "#dbe2e9",
        400: "#cfd8e1",
        500: "#c3ceda",
        600: "#9ca5ae",
        700: "#757c83",
        800: "#4e5257",
        900: "#27292c"
    },
};


const reverseColorShades = (DarkShades) => {
    const reversedColorShades = {};
    Object.entries(DarkShades).forEach(([key, val]) => {
        const keys = Object.keys(val);
        const values = Object.values(val);
        const length = keys.length;
        const reversedObj = {};
        for(let i=0; i<length; i++){
            reversedObj[keys[i]] = values[length - i - 1];
        }
        reversedColorShades[key] = reversedObj;
    });
    return reversedColorShades;
}

export const lightShades = reverseColorShades(DarkShades);


export const themeSettings = (mode) => {
    return {
        palette: {
            mode: mode,
            ...(mode === 'dark' ? {
                primary: {
                    ...DarkShades.primary,
                    main: DarkShades.primary[400],
                    light: DarkShades.primary[400],
                },
                secondary: {
                    ...DarkShades.secondary,
                    main: DarkShades.secondary[400],
                },
    
                darkblue: {
                    ...DarkShades.darkblue,
                    main: DarkShades.darkblue[400],
                    
                },
                background: {
                    default: DarkShades.primary[800],
                    alt: DarkShades.primary[700],
                }
            } : {
                primary: {
                    ...lightShades.primary,
                    main: DarkShades.primary[100],
                    light: DarkShades.primary[200],
                },
                secondary: {
                    ...DarkShades.secondary,
                    main: DarkShades.secondary[600],
                    light: DarkShades.secondary[700],
                },
    
                neutral: {
                    ...DarkShades.darkblue,
                    main: DarkShades.darkblue[500],
                },
                background: {
                    default: DarkShades.primary[100],
                    alt: DarkShades.primary[200],
                },

            }),
            
        },
        typography: {
            fontFamily: ["fauna one", "sans-serif"].join(","),
            fontSize: 11,
    
            h1: {
                fontFamily: ["cenzil", "sans-serif"].join(","),
                fontSize: 48,
            }
        }
    }
}
