import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface UsuarioLogado {
  email: string;
}

const initialState: UsuarioLogado = {
  email: '',
};

// JUNÇÃO DE ACTIONS E REDUCERS
const usuarioLogadoSlice = createSlice({
  name: 'usuarioLogado',
  initialState,
  reducers: {
    setUsuarioLogado: (state, action: PayloadAction<UsuarioLogado>) => {
      return { email: action.payload.email };
    },
    removerUsuarioLogado: () => {
      return initialState;
    },
  },
});

export const { setUsuarioLogado, removerUsuarioLogado } =
  usuarioLogadoSlice.actions;
export default usuarioLogadoSlice.reducer;

// type e payload
// type - criarUsuarioLogado
// payload - dados a serem usados para completar a intensão da ação
