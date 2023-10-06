import React, { useContext, useState } from "react";
import { Stack, ButtonGroup, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
import { LanguageContext } from "../context/languageContext";
import dados from "../../data/dados";

const Game = () => {
  const {
    linguagem,
    counter,
    handleStart,
    handleLinguagem,
    handleDecrement,
    handleIncrement,
  } = useContext(LanguageContext);

  const [cardRotation, setCardrotaion] = useState("");

  const handleCardRotation = () => {
    cardRotation === "rotation"
      ? setCardrotaion("noRotation")
      : setCardrotaion("rotation");
    handleLinguagem();
  };

  return (
    <Stack
      spacing={2}
      direction={"column"}
      maxWidth={400}
      justifyContent={"center"}
      margin={"auto"}
      height={"100vh"}
      p={2}
    >
      <Stack
        spacing={2}
        boxShadow={4}
        borderRadius={1}
        alignItems={"center"}
        p={1}
        className={cardRotation}
      >
        <Stack direction={"row"} spacing={35}>
          <Typography alignSelf={"flex-start"}>#{counter + 1}</Typography>
          <Typography alignSelf={"flex-end"}>
            {linguagem.toUpperCase()}
          </Typography>
        </Stack>
        <Typography variant="h4">{dados[counter][linguagem]}</Typography>
        <Stack direction={"row"} spacing={2} alignItems={"center"}>
          <Typography>{dados[counter].categoria}</Typography>
          <Typography variant="body2" fontWeight={"bold"} color={"secondary"}>
            {dados[counter].dificuldade}
          </Typography>
        </Stack>

        <Button size="small" onClick={handleCardRotation}>
          Virar cartão
        </Button>
      </Stack>

      <ButtonGroup variant="contained" fullWidth>
        <Button onClick={handleDecrement}>Voltar</Button>
        <Button onClick={handleIncrement}>Próximo</Button>
      </ButtonGroup>

      <Link to="/">
        <Button fullWidth onClick={handleStart}>
          Menu
        </Button>
      </Link>
    </Stack>
  );
};

export default Game;
