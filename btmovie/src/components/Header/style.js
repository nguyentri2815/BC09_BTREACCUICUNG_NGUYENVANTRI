
const styles = (theme) => {
  return {
    "@global": {
      body: {
        backgroundColor: "#ffffff",
      },
    },
    title: {
      flexGrow: 1,
      animation: "$Fade 0.5s infinite",
    },
    navLink: {
      color: "#ffffff",
      marginLeft: 20,
      opacity: 0.75,
      textDecoration: "none",
      "&:hover": {
        opacity: 1,
      },
      // max-width: 1280px
      [theme.breakpoints.down("md")]: {
        fontSize: 70,
      },
      // max-width: 960px
      [theme.breakpoints.down("sm")]: {
        fontSize: 50,
      },
      // max-width: 600px
      [theme.breakpoints.down("xs")]: {
        fontSize: 20,
      },
    },
    active: {
      opacity: 1,
    },
    relative:{
      position:"relative"
    },
    profile: {
      position:"absolute",
      background: "white",
      color: "black",
      zIndex: 99,
      width: 226,
      right: 0
    },

    "@keyframes Fade": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
  };
};

export default styles;

// .title {
//   flex-grow: 1;
// }

// .nav-link {
//   color: #ffffff;
//   margin-left: 20px;
//   opacity: 0.75;
//   text-decoration: none;
// }

// .active {
//   opacity: 1;
// }
