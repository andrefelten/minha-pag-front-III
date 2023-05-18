import { createSlice, createEntityAdapter } from '@reduxjs/toolkit';
import { Recado } from '../../../types';
import { RootState } from '../..';

const adapterRecados = createEntityAdapter<Recado>({
  selectId: (item) => item.id,
});

export const { selectAll, selectById } = adapterRecados.getSelectors(
  (state: RootState) => state.recados
);

const recadosSlice = createSlice({
  name: 'recadosSlice',
  initialState: adapterRecados.getInitialState(),
  reducers: {
    adicionarRecado: adapterRecados.addOne,
    atualizarRecado: adapterRecados.updateOne,
    excluirRecado: adapterRecados.removeOne,
  },
});

export const { adicionarRecado, atualizarRecado, excluirRecado } =
  recadosSlice.actions;
export default recadosSlice.reducer;
