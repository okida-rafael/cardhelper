import React, { useContext, useState } from "react";
import { Stack, TextField, MenuItem, Button, Typography } from "@mui/material";
import { Navigate } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import Footer from "../components/Footer";

export default function Menu() {
  const {
    principal,
    traduzir,
    iniciar,
    handleChangePrincipal,
    handleChangeTraduzir,
    handleStart,
  } = useContext(LanguageContext);

  const [validate, setValidate] = useState(false);
  const [msgError, setMsgError] = useState("");

  const handleSubmit = () => {
    if (principal === traduzir) {
      setValidate(true);
      setMsgError("Escolha uma opção");
    } else {
      setValidate(false);
      setMsgError("");
      handleStart();
    }
  };

  return (
    <Stack
      spacing={2}
      direction={"column"}
      maxWidth={400}
      justifyContent={"center"}
      margin={"auto"}
      p={2}
      height={"100vh"}
    >
      {iniciar && <Navigate to="/game" />}

      <Typography
        align="center"
        variant="h3"
        sx={{ textShadow: "1px 2px 2px #90caf9" }}
      >
        Card Helper
      </Typography>
      <TextField
        label="Eu sei..."
        select
        fullWidth
        value={principal}
        onChange={handleChangePrincipal}
      >
        <MenuItem value="pt">Português</MenuItem>
        <MenuItem value="en">Inglês</MenuItem>
        <MenuItem value="es">Espanhol</MenuItem>
      </TextField>

      <TextField
        label="Quero aprender..."
        select
        fullWidth
        value={traduzir}
        onChange={handleChangeTraduzir}
        error={validate}
        helperText={msgError}
      >
        {principal != "pt" && <MenuItem value="pt">Português</MenuItem>}
        {principal != "en" && <MenuItem value="en">Inglês</MenuItem>}
        {principal != "es" && <MenuItem value="es">Espanhol</MenuItem>}
      </TextField>

      <Button variant="contained" onClick={handleSubmit}>
        Começar
      </Button>
      <Footer />
    </Stack>
  );
}
