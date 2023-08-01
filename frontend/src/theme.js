import { createTheme } from '@mui/material/styles';
import { light } from "@mui/material/styles/createPalette";

export const DarkShades = {
 
    //darkblue
    darkblue: {
          100: "#cccdcd",
          200: "#9a9a9a",
          300: "#676868",
          400: "#353535",
          500: "#020303",
          600: "#020202",
          700: "#010202",
          800: "#010101",
          900: "#000101"
    },
    //midnight blue
  
    primary: {
        100: "#cfcfcf",
        200: "#9fa0a0",
        300: "#6e7070",
        400: "#3e4141",
        500: "#0e1111",
        600: "#0b0e0e",
        700: "#080a0a",
        800: "#060707",
        900: "#030303"
    },
    //misty blue
    secondary: {
        100: "#d1d2d2",
        200: "#a3a5a5",
        300: "#767979",
        400: "#484c4c",
        500: "#1a1f1f",
        600: "#151919",
        700: "#101313",
        800: "#0a0c0c",
        900: "#050606"
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
            fontFamily: ["Rubik", "sans-serif"].join(","),
            fontSize: 13,
    
            h1: {
                fontFamily: ["cenzil", "sans-serif"].join(","),
                fontSize: 48,
            }
        }
    }
}
