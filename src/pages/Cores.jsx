import React, { useState } from "react";
import {
  Stack,
  Button,
  ButtonGroup,
  Typography,
  IconButton,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { Link } from "react-router-dom";
import VolumeUpIcon from "@mui/icons-material/VolumeUp";
import SwapHorizIcon from "@mui/icons-material/SwapHoriz";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import cores from "../../data/cores";
import Footer from "../components/Footer";
import { speakText } from "../services/service";

const Cores = () => {
  const [counter, setCounter] = useState(0);
  const [language, setLanguage] = useState("en");
  const cor = cores[counter];

  const handleNext = () => {
    setCounter((prev) => (prev + 1) % cores.length);
  };

  const handlePrev = () => {
    setCounter((prev) => (prev - 1 + cores.length) % cores.length);
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  const handleSpeak = () => {
    const text = cor[language];
    const langCode = language === "en" ? "en-US" : "pt-BR";
    speakText(text, langCode);
  };

  return (
    <Stack
      spacing={2}
      direction="column"
      maxWidth={400}
      justifyContent="center"
      margin="auto"
      height="100vh"
      p={2}
    >
      <Stack boxShadow={4} borderRadius={2} p={2} alignItems="center" spacing={2}>
        <Stack direction="row" justifyContent="space-between" width="100%">
          <Typography component="div">#{counter + 1}</Typography>
          <Typography component="div" fontWeight="bold">
            {language === "en" ? "Inglês" : "Português"}
          </Typography>
        </Stack>

        <Card sx={{ width: "100%", borderRadius: 3 }}>
          <CardContent>
            <Stack alignItems="center" spacing={2}>
              <Box
                sx={{
                  width: "100%",
                  height: 200,
                  backgroundColor: cor.hex,
                  borderRadius: 2,
                  border:
                    cor.hex === "#ffffff"
                      ? "2px solid #ccc"
                      : cor.hex === "#000000"
                      ? "2px solid #666"
                      : "none",
                }}
              />
              <Typography variant="h4">{cor[language]}</Typography>
              <Typography variant="body2" color="text.secondary">
                {cor.categoria}
              </Typography>
            </Stack>
          </CardContent>
        </Card>

        <Stack direction="row" spacing={1} alignItems="center">
          <Button
            startIcon={<SwapHorizIcon />}
            variant="outlined"
            onClick={handleLanguageToggle}
          >
            Mostrar {language === "en" ? "Português" : "Inglês"}
          </Button>
          <IconButton color="primary" onClick={handleSpeak} aria-label="ouvir">
            <VolumeUpIcon />
          </IconButton>
        </Stack>
      </Stack>

      <ButtonGroup variant="contained" fullWidth>
        <Button startIcon={<ArrowBackIcon />} onClick={handlePrev}>
          Anterior
        </Button>
        <Button endIcon={<ArrowForwardIcon />} onClick={handleNext}>
          Próximo
        </Button>
      </ButtonGroup>

      <Link to="/" style={{ textDecoration: "none" }}>
        <Button fullWidth>Voltar ao Menu</Button>
      </Link>
      <Footer />
    </Stack>
  );
};

export default Cores;
