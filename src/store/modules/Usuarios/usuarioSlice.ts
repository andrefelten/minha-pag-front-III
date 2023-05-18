import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { Usuario } from '../../../types';
import { RootState } from '../..';

const adapterUsuarios = createEntityAdapter<Usuario>({
  selectId: (item) => item.email,
});

export const { selectAll: buscarUsuarios, selectById } =
  adapterUsuarios.getSelectors((state: RootState) => state.usuarios);

const usuariosSlice = createSlice({
  name: 'usuariosSlice',
  initialState: adapterUsuarios.getInitialState(),
  reducers: {
    adicionarUsuario: adapterUsuarios.addOne,
  },
});

export const { adicionarUsuario } = usuariosSlice.actions;

export default usuariosSlice.reducer;