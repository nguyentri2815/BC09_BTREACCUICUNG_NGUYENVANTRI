import { Box, Typography } from "@material-ui/core";
import React, { Component } from "react";
import Header from "../../components/Header";

class Layout extends Component {
  render() {
    return (
      <Box bgcolor="#cecece">
        <Header />

        {this.props.children}

        <Box
          bgcolor="#000000"
          color="#ffffff"
          textAlign="center"
          paddingY="20px"
          marginTop="30px"
        >
          <Typography variant="h5" align="center">
            Footer
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default Layout;
