/** @type {import('tailwindcss').Config} */


export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {

    extend: {
      colors: {
        darky: "#0B0D17",
        lightblue: "#D0D6F9",
        divider: "#383B4B",
        tab: "#979797",
      },
      letterSpacing: {
        "2.7px": "2.7px",
        "tab-mobile": "2.36px",
        "menu-space": "4.75px",
        "home-subtitle": "3.38px",
      }, 
      fontSize: {
        "title-mobile": "56px",
        "tab-mobile": "14px",
        "menu-mobile": "16px",
        "menu-desktop": "28px",
        "title-mobile": "80px",
        "subtitle-desktop": "28px",
        "title-sat-desktop": "100px",
        "title-desktop": "150px",
        "circle-title-mobile": "20px",
        "circle-title-tablet": "32px",
        "paragraph-mobile": "15px",
        "paragraph-desktop": "18px",
      },
      lineHeight: {
        "paragraph-mobile": "25px",
        "paragraph-tablet": "28px",
        "paragraph-desktop": "32px",
      },
      height: {
        "2px": "2px",
        "menu-height": "96px",
      },
      maxHeight: {
        "crew-mobile": "222px",
        "crew-tablet": "572px",
        "crew-desktop": "712px",
      },
      maxWidth: {
        desktop: "1440px",
        "paragraph-mobile": "327px",
        "paragraph-tablet": "450px",
        "paragraph-desktop": "444px",
        "paragraph-des-tablet": "573px",
      },
      fontFamily: {
        bellefair: "bellefair",
        barlow: 'barlow',
        "barlow-condensed": '"barlow condensed"',
      },
      backgroundImage: {
        //Background
        "home-mobile": "url('./assets/home/background-home-mobile.jpg')",
        "home-tablet": "url('./assets/home/background-home-tablet.jpg')",
        "home-desktop": "url('./assets/home/background-home-desktop.jpg')",
        //Destination
        // "url('./src/assets/destination/background-destination-mobile.jpg')",
        "destination-mobile":
          "url('./assets/destination/background-destination-mobile.jpg')",
        "destination-tablet":
          "url('./assets/destination/background-destination-tablet.jpg')",
        "destination-desktop":
          "url('./assets/destination/background-destination-desktop.jpg')",
        //Crew
        "crew-mobile": "url('./assets/crew/background-crew-mobile.jpg')",
        "crew-tablet": "url('./assets/crew/background-crew-tablet.jpg')",
        "crew-desktop": "url('./assets/crew/background-crew-desktop.jpg')",
        //Technology
        "tech-mobile": "url('./assets/technology/background-technology-mobile.jpg')",
        "tech-tablet": "url('./assets/technology/background-technology-tablet.jpg')",
        "tech-desktop": "url('./assets/technology/background-technology-desktop.jpg')",
        //Technology
        "404-mobile": "url('./assets/404/mobile.webp')",
        "404-tablet": "url('./assets/404/tablet.webp')",
      },
      padding: {
        "124px": "124px",
        "165px": "165px",
      },
      size: {
        "satellite-mobile": "170px",
        "satellite-tablet": "300px",
        "satellite-desktop": "445px",
        "circle-mobile": "150px",
        "circle-tablet": "242px",
        "circle-desktop": "274px",
      },
    },
  },
  plugins: [],
};
