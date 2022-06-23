import React from "react";
import { Box, Stack, Typography } from "@mui/material";

import Logo from "../assets/images/Logo-1.png";

const Footer = () => {
  return (
    <Box mt="80px" bgcolor="#fff3f4">
      <Stack gap="40px" alignItems="center" px="40px" pt="24px">
        <img src={Logo} alt="Logo" width="200px" height="40px" />
        <Typography color="#000" variant="h5" pb="40px">
          Made by{" "}
          <a
            style={{
              textDecoration: "none",
              color: "#0d236c",
            }}
            color="#000"
            href={`https://www.linkedin.com/in/aryan-tiwari-5276351a6/`}
            target="_blank"
            rel="noreferrer"
          >
            Aryan Tiwari
          </a>{" "}
          💪🏻🚴🏻‍♀️
        </Typography>
      </Stack>
    </Box>
  );
};

export default Footer;
