 import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { deepPurple } from "@mui/material/colors";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { Usuario } from "../types";

const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const navigate = useNavigate();
 
  const regraLogin = () => {
    if (!email || !email.includes("@" && ".com")) {
     alert( "Digite um e-mail válido!" );
    return
    }

    if (!senha || senha.length < 4) {
      alert("Digite uma senha válida");
    return
    }

    if (
      usuarios.some( 
        (usuario) => usuario.email === email /*  &&  usuario.senha === senha  */
      )
    ) {
      navigate("/recados");
    }
  };

  return (
    <Grid container height="100vh">
      <Grid
        item
        container
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        xs={12}
        bgcolor="black"
        sx={{
          background: "url(./images/nuvens.jpg) no-repeat center / cover",
        }}
      >
        <Grid>
          <Box
            component={"form"}
            bgcolor={deepPurple[300]}
            display={"flex"}
            flexDirection={"column"}
            justifyContent={"space-between"}
            padding={12}
            sx={{
              width: 500,
              height: 500,
            }}
          >
            <Typography marginLeft={15}>
              <h1> Login </h1>
            </Typography>

            <TextField
              id="e-mail"
              label="E-mail"
              variant="standard"
              fullWidth
              margin="normal"
              onChange={(evento) => setEmail(evento.target.value)}
            />
            <TextField
              id="senha"
              label="Senha"
              variant="standard"
              fullWidth
              margin="normal"
              onChange={(evento) => setSenha(evento.target.value)}
            />

            <Grid container>
              <Typography marginLeft={5}>
                Não tem cadastro?<Link to={"/cadastro"}> Clique aqui. </Link>
              </Typography>
            </Grid>

            <Button onClick={regraLogin} variant="text">
              Entrar
            </Button>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Login;
 