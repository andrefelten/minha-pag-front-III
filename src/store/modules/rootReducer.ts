import { combineReducers } from '@reduxjs/toolkit';
import reducerRecados from './Recados/recadoSlice';
import reducerUsuarios from './Usuarios/usuarioSlice';
import reducerUsuarioLogado from './UsuarioLogado/usuarioLogadoSlice';

const rootReducer = combineReducers({
  usuarios: reducerUsuarios,
  usuarioLogado: reducerUsuarioLogado,
  recados: reducerRecados,
});

export default rootReducer;
