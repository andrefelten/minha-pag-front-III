import { Box, Grid, Typography } from "@mui/material";
import React from "react";
import { deepPurple } from "@mui/material/colors";
import { Link } from "react-router-dom";
import Form from "../components/Form/index";

const Login: React.FC = () => {
  return (
    

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
      <Box
        component={"div"}
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
        <Grid container height={'100%'} alignItems={'center'}>
            <Grid
              item
              xs={12}
              height={'100%'}
              display={'flex'}
              flexDirection={'column'}
              justifyContent={'space-around'}
              padding={3}
            >
              <Typography variant="h3" textAlign={'center'}>
                Cadastro
              </Typography>
              <Form tipo="cadastro" />
              <Typography textAlign="center" variant="body2">
                 Ir para página inicial?{' '}
                <Link to="/" style={{ color: 'inherit' }}>
                  Let´s go
                </Link>
              </Typography>
            </Grid>
          </Grid>

      </Box>
    </Grid>
  );
};

export default Login;