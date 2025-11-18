import localFont from "next/font/local";
// export const atomicMarker = localFont({
//   src: "../../public/fonts/atomic-marker/AtomicMarker.woff2",
//   variable: "--font-atomic",
//   weight: "400",
//   preload: true,
//   display: "swap",
// });
export const casaGrande = localFont({
  src: "../public/fonts/casagrande/casa-grande.woff2",
  variable: "--font-casa-grande",
  weight: "900",
  preload: true,
  style: "normal",
  display: "swap",
});

export const strawFord = localFont({
  preload: true,
  display: "swap",
  src: [
    {
      path: "../public/fonts/strawford/Strawford-Black.woff2",
      weight: "900",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/strawford/Strawford-BlackItalic.woff2",
    //   weight: "900",
    //   style: "italic",
    // },
    {
      path: "../public/fonts/strawford/Strawford-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/strawford/Strawford-BoldItalic.woff2",
    //   weight: "700",
    //   style: "italic",
    // },
    // {
    //   path: "../../public/fonts/strawford/Strawford-ExtraLight.woff2",
    //   weight: "200",
    //   style: "normal",
    // },
    // {
    //   path: "../../public/fonts/strawford/Strawford-ExtraLightItalic.woff2",
    //   weight: "200",
    //   style: "italic",
    // },
    // {
    //   path: "../../public/fonts/strawford/Strawford-Light.woff2",
    //   weight: "300",
    //   style: "normal",
    // },
    // {
    //   path: "../../public/fonts/strawford/Strawford-LightItalic.woff2",
    //   weight: "300",
    //   style: "italic",
    // },
    {
      path: "../public/fonts/strawford/Strawford-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/strawford/Strawford-MediumItalic.woff2",
    //   weight: "500",
    //   style: "italic",
    // },
    {
      path: "../public/fonts/strawford/Strawford-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    // {
    //   path: "../../public/fonts/strawford/Strawford-RegularItalic.woff2",
    //   weight: "400",
    //   style: "italic",
    // },
    // {
    //   path: "../../public/fonts/strawford/Strawford-Thin.woff2",
    //   weight: "100",
    //   style: "normal",
    // },
    // {
    //   path: "../../public/fonts/strawford/Strawford-ThinItalic.woff2",
    //   weight: "100",
    //   style: "italic",
    // },
  ],
  variable: "--font-strawford",
});
