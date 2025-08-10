/* eslint-disable @typescript-eslint/no-unused-vars */
import { BreakpointOverrides } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    // Breakpoints por defecto
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;

    // Breakpoints personalizados
    ultraWide: true;
    superWide: true;
    extraWide: true;
    wideScreen: true;
    largeDesktop: true;
    desktopXl: true;
    desktopLg: true;
    desktopMd: true;
    desktop: true;
    standardLg: true;
    desktopSm: true;
    laptopXl: true;
    laptopLg: true;
    laptop: true;
    tabletXl: true;
    tabletLg: true;
    tablet: true;
    mobileXl: true;
    mobileLg: true;
    mobileMd: true;
    mobile: true;
    smallMobileMd: true;
    smallMobile: true;
    mobileSm: true;
    mobileXs: true;
    tinyMobile: true;
    miniMobile: true;
    smallestMobile: true;
    smallsMobile: true;
  }
}
