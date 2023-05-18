import { Box, TextField, Button, Alert } from '@mui/material';
import Recat, { useState } from 'react';
import { Usuario } from '../../types';
import { useNavigate } from 'react-router-dom';
import {
  adicionarUsuario,
  buscarUsuarios,
} from '../../store/modules/Usuarios/usuarioSlice';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import { setUsuarioLogado } from '../../store/modules/UsuarioLogado/usuarioLogadoSlice';

interface FormProps {
  tipo: 'login' | 'cadastro';
}

const Form: Recat.FC<FormProps> = ({ tipo }) => {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [repetirSenha, setRepetirSenha] = useState('');
  const [alerta, setAlerta] = useState<{ show: boolean; mensagem: string }>({
    show: false,
    mensagem: '',
  });

  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const usuarios = useAppSelector(buscarUsuarios);

  const logar = () => {

    if (
      usuarios.some(
        (usuario) => usuario.email === email && usuario.senha === senha
      )
    ) {
      dispatch(setUsuarioLogado({ email }));
      navigate('/recados');
      console.log('logou');
    } else {
      setAlerta({ show: true, mensagem: 'Usuário ou senha constam divirgências TENTE NOVAMENTE' });
      setTimeout(() => {
        setAlerta({ show: false, mensagem: '' });
      }, 5000);
      return;
    }
  };

  const cadastrar = () => {

    console.log("entrou");
    

    if (!email) {
      setAlerta({ show: true, mensagem: 'Digite um e-mail válido' });
      setTimeout(() => {
        setAlerta({ show: false, mensagem: '' });
      }, 5000);
      return;
    }
     
    console.log('email verificado');
    

    if (senha.length < 5 || senha !== repetirSenha) {
      setAlerta({ show: true, mensagem: 'Digite uma senha válida' });
      setTimeout(() => {
        setAlerta({ show: false, mensagem: '' });
      }, 5000);
      return;
    }

    console.log('senha');
    

    if (usuarios.some((usuario) => usuario.email === email)) {
      setAlerta({ show: true, mensagem: 'E-mail já cadastrado' });
      setTimeout(() => {
        setAlerta({ show: false, mensagem: '' });
      }, 5000);
    }

    console.log('email2');
    

    const novoUsuario: Usuario = {
      email,
      senha,
      recados: [],
    };

    dispatch(adicionarUsuario(novoUsuario));
    navigate('/');
    limparCampos();
  };

  const limparCampos = () => {
    setEmail('');
    setSenha('');
    setRepetirSenha('');
  };

  return (
    <Box
      onSubmit={(ev)=>{
        ev.preventDefault()
        tipo === 'login' ? logar() : cadastrar()
      }}
      component={'form'}
      padding={3}
    >
      <TextField 
      id="email" 
      label="E-mail" 
      variant="filled" 
      margin="dense"
      onChange={(ev) => setEmail(ev.target.value)}
      fullWidth
      />

      <TextField
        id="password"
        type="password"
        label={'Senha'}
        variant="filled"
        margin="dense"
        onChange={(ev) => setSenha(ev.target.value)}
        fullWidth
      />

      {tipo === 'cadastro' ? (
        <TextField
          id="passwordrepeat"
          type="password"
          label={'Repita sua senha'}
          variant="filled"
          margin="normal"
          onChange={(ev) => setRepetirSenha(ev.target.value)}
          fullWidth
        />
      ) : (
        <></>
      )}
      <Button
        type="submit"
        variant="contained"
        size="large"
        fullWidth
        sx={{ marginTop: 2, marginBottom: 2 }}
      >
        {tipo === 'login' ? 'ENTRAR' : 'CADASTRAR'}
      </Button>
      {alerta.show ? (
        <Alert variant="outlined" severity="error" sx={{ color: 'white' }}>
          {alerta.mensagem}
        </Alert>
      ) : (
        <></>
      )}
    </Box>
  );
};

export default Form;
