import { Box, Button, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
import { deepPurple } from "@mui/material/colors";
import { Link, useNavigate } from "react-router-dom";
import { Usuario } from "../types";

const Cadastro: React.FC = () => {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [confirmasenha, setConfirmasenha] = useState("")
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const navigate = useNavigate();

  const regraCadastro= () => {
    if (!email) {
   
      alert("Digite um e-mail válido!");
    }

    if (!senha) {
      alert("Digite uma senha válida");
    }

    if (!confirmasenha) {
      alert("Digite a mesma senha que no campo anterior");
    }

    if (
      usuarios.some(
        (usuario) => usuario.email === email /* && usuario.senha === senha */
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
            <Typography marginLeft={10}>
              <h2> Cadastre-se</h2>
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
            <TextField
              id="confirmar-senha"
              label="Confirmar senha"
              variant="standard"
              fullWidth
              margin="normal"
              onChange={(evento) => setConfirmasenha(evento.target.value)}
            />

            <Grid container>
              <Grid item xs={6}>
                <Typography>
                  <Link to={"/"}> ir para Login </Link>
                </Typography>
              </Grid>

              <Button  onClick={regraCadastro} variant="text">Cadastrar</Button>
            </Grid>
          </Box>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Cadastro;
