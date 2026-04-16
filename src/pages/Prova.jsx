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
import questoes from "../../data/questoes";
import Footer from "../components/Footer";
import { speakText } from "../services/service";

const Prova = () => {
  const [counter, setCounter] = useState(0);
  const [language, setLanguage] = useState("en");
  const question = questoes[counter];

  const handleNext = () => {
    setCounter((prev) => (prev + 1) % questoes.length);
  };

  const handlePrev = () => {
    setCounter((prev) => (prev - 1 + questoes.length) % questoes.length);
  };

  const handleLanguageToggle = () => {
    setLanguage((prev) => (prev === "en" ? "pt" : "en"));
  };

  const handleSpeak = () => {
    const text = question[language];
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

        <Card sx={{ width: "100%", borderRadius: 3, minHeight: 260 }}>
          <CardContent>
            <Stack alignItems="center" spacing={2}>
              <Box
                component="img"
                src={question.imagem}
                alt={question[language]}
                sx={{
                  width: "100%",
                  maxWidth: 260,
                  height: 180,
                  objectFit: "contain",
                }}
              />
              <Typography variant="h4">{question[language]}</Typography>
              <Typography variant="body2" color="text.secondary">
                {question.categoria}
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

export default Prova;
