import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import { Stack, Typography } from "@mui/material";

const Footer = () => {
  return (
    <Stack alignItems={"center"} spacing={2}>
      <a href="https://github.com/okida-rafael/cardhelper" target="_blank"><GitHubIcon /></a>

      <Typography variant="body2">Criado por <a href="https://www.linkedin.com/in/rafael-okida-78391b34/" target="_blank">Rafael Okida</a> </Typography>
    </Stack>
  );
};

export default Footer;
