import { Button, Divider, Fab, Grid, Typography } from "@mui/material";
import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import ListaRecados from "../components/List/index";
import Modal from "../components/Modal/index";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { selectAll } from "../store/modules/Recados/recadoSlice";
import { removerUsuarioLogado } from "../store/modules/UsuarioLogado/usuarioLogadoSlice";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const Recados: React.FC = () => {
  const [abertura, setAbertura] = useState(false);
  const recados = useAppSelector(selectAll);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const usuarioLogado = useAppSelector((state) => state.usuarioLogado);

  const fecharModal = () => {
    setAbertura(false);
  };

  const sair = () => {
    dispatch(removerUsuarioLogado());
    navigate("/");
  };
  return (
    <>
      <Grid
        container
        height={"100vh"}
        item
        display={"flex"}
        justifyContent={"center"}
        alignContent={"center"}
        xs={false}
        sx={{
          background: "url(./images/nuvens.jpg) no-repeat center / cover",
        }}
      >
        <Grid item xs={12} sm={10} md={8}>
          <Grid
            container
            display={"flex"}
            justifyContent={"end"}
            marginTop={8}
            marginBottom={4}
            sx={{ backgroundColor: "#00040776" }}
          >
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              display={"flex"}
              justifyContent={"space-between"}
            >
              <Typography variant="h3" color={"HighlightText"}>
                Meus Recados
              </Typography>
              <Button onClick={sair}>
                <LogoutIcon />
              </Button>
            </Grid>
            <Divider />
            <Grid
              item
              xs={12}
              sm={10}
              md={8}
              display={"flex"}
              alignItems={"flex-start"}
              color={"HighlightText"}
            >
              <Grid container>
                {recados
                  .filter((recado) => recado.criadoPor === usuarioLogado.email)
                  .map((recado) => (
                    <Grid item key={recado.id} xs={12}>
                      <ListaRecados recado={recado} />
                    </Grid>
                  ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>

      <Fab
        onClick={() => setAbertura(true)}
        color="inherit"
        aria-label="Adicionar novo contato"
        sx={{ position: "fixed", right: "30px", bottom: "30px" }}
      >
        <Add />
      </Fab>

      <Modal aberto={abertura} acao="criar" fecharModal={fecharModal} />
    </>
  );
};

export default Recados;
