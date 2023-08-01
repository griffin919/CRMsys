import { createTheme } from '@mui/material/styles';
import { light } from "@mui/material/styles/createPalette";

export const DarkShades = {
    calmblue: {
        100: "#e0e1e1",
        200: "#b2b3b3",
        300: "#838585",
        400: "#545656",
        500: "#262828",
        600: "#202323",
        700: "#191b1b",
        800: "#131414",
        900: "#0c0d0d"
      },
    
      primary: {
        100: "#e2e3e2",
        200: "#b4b6b4",
        300: "#868886",
        400: "#575a57",
        500: "#292b29",
        600: "#232424",
        700: "#1c1e1c",
        800: "#151616",
        900: "#0e0f0e"
      },
    
      secondary: {
        100: "#e4e5e4",
        200: "#b6b8b6",
        300: "#888a88",
        400: "#595b59",
        500: "#2b2d2b",
        600: "#252726",
        700: "#1d1f1d",
        800: "#161717",
        900: "#0f0f0f"
      },
  
    
};

// Define Light Theme Colors
export const LightShades = {
    calmblue: {
      100: "#f5f6f6",
      200: "#e3e4e4",
      300: "#d1d2d2",
      400: "#bfc0c0",
      500: "#adafaf",
      600: "#9b9d9d",
      700: "#898b8b",
      800: "#777878",
      900: "#656666",
    },
    primary: {
      100: "#f5f6f6",
      200: "#e3e4e4",
      300: "#d1d2d2",
      400: "#bfc0c0",
      500: "#adafaf",
      600: "#9b9d9d",
      700: "#898b8b",
      800: "#777878",
      900: "#656666",
    },
    secondary: {
      100: "#f5f6f6",
      200: "#e3e4e4",
      300: "#d1d2d2",
      400: "#bfc0c0",
      500: "#adafaf",
      600: "#9b9d9d",
      700: "#898b8b",
      800: "#777878",
      900: "#656666",
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

export const lightShades = reverseColorShades(LightShades); // Reverse Light Shades

export const themeSettings = (mode) => {
  return {
    palette: {
      mode: mode,
      ...(mode === "dark"
        ? {
            primary: {
              ...DarkShades.primary,
              main: DarkShades.primary[400],
              light: DarkShades.primary[400],
            },
            secondary: {
              ...DarkShades.secondary,
              main: DarkShades.secondary[400],
            },
            calmblue: {
              ...DarkShades.calmblue,
              main: DarkShades.calmblue[400],
            },
            background: {
              default: DarkShades.primary[800],
              alt: DarkShades.primary[700],
            },
          }
        : {
            primary: {
              ...LightShades.primary,
              main: LightShades.primary[400],
              light: LightShades.primary[400],
            },
            secondary: {
              ...LightShades.secondary,
              main: LightShades.secondary[400],
            },
            calmblue: {
              ...LightShades.calmblue,
              main: LightShades.calmblue[400],
            },
            background: {
              default: LightShades.primary[100],
              alt: LightShades.primary[600],
            },
          }),
    },
    typography: {
      fontFamily: ["Rubik", "sans-serif"].join(","),
      fontSize: 13,
      h1: {
        fontFamily: ["cenzil", "sans-serif"].join(","),
        fontSize: 48,
      },
    },
  };
};