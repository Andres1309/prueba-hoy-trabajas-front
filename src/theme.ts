import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,

      ultraWide: 2450,
      superWide: 2360,
      extraWide: 2213,
      wideScreen: 1965,
      largeDesktop: 1920,
      desktopXl: 1800,
      desktopLg: 1620,
      desktopMd: 1550,
      desktop: 1500,
      standardLg: 1440,
      desktopSm: 1390,
      laptopXl: 1320,
      laptopLg: 1280,
      laptop: 1200,
      tabletXl: 1121,
      tabletLg: 1110,
      tablet: 1024,
      mobileXl: 1000,
      mobileLg: 950,
      mobileMd: 850,
      mobile: 750,
      smallMobileMd: 700,
      smallMobile: 650,
      mobileSm: 600,
      mobileXs: 550,
      tinyMobile: 500,
      miniMobile: 450,
      smallestMobile: 390,
      smallsMobile: 350,
    },
  },
  palette: {
    primary: {
      main: '#7C8772',
    },
    secondary: {
      main: '#738068',
    },
    background: {
      default: '#FFF',
      paper: '#E5EAE2',
    },
    text: {
      primary: '#1E1E1E',
      secondary: '#575954',
    },
  },
});

export default theme;
