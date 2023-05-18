import React, { useEffect, useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Acao, Recado } from '../../types';
import { Grid, TextField } from '@mui/material';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  adicionarRecado,
  atualizarRecado,
  excluirRecado,
} from '../../store/modules/Recados/recadoSlice';
import { gerarId } from '../../utils/gerald';

interface ModalProps {
  aberto: boolean;
  fecharModal: () => void;
  acao: Acao;
  recado?: Recado;
}

const Modal: React.FC<ModalProps> = ({ aberto, fecharModal, acao, recado }) => {
  const [titulo, setTitulo] = useState('');
  const [descricao, setDescricao] = useState('');

  const dispatch = useAppDispatch();

  const usuarioLogado = useAppSelector((state) => state.usuarioLogado);

  useEffect(() => {
    if (recado && acao === 'atualizar') {
      setTitulo(recado.titulo);
      setDescricao(recado.descricao);
    }
  }, [acao, recado]);

  const salvar = () => {
    switch (acao) {
      case 'criar':
        dispatch(
          adicionarRecado({
            id: gerarId(),
            titulo,
            descricao,
            criadoPor: usuarioLogado.email,
          })
        );
        limparCampos();
        break;
      case 'atualizar':
        if (recado) {
          dispatch(
            atualizarRecado({ id: recado.id, changes: { titulo, descricao } })
          );
        }
        break;
      case 'deletar':
        if (recado) {
          dispatch(excluirRecado(recado.id));
        }
        break;
      default:
    }
    fecharModal();
  };

  const limparCampos = () => {
    setTitulo('');
    setDescricao('');
  };

  return (
    <Dialog
      open={aberto}
      onClose={fecharModal}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">
        {acao === 'criar' && 'Criar recado'}
        {acao === 'atualizar' && 'Atualizar recado'}
        {acao === 'deletar' && 'Deletar recado'}
      </DialogTitle>
      <DialogContent>
        {acao === 'deletar' && (
          <DialogContentText id="alert-dialog-description">
            Deseja remover o item?
          </DialogContentText>
        )}
        {acao !== 'deletar' && (
          <Grid container spacing={2} marginTop={1}>
            <Grid item xs={12}>
              <TextField
                id="titulo"
                label={'Título'}
                value={titulo}
                onChange={(ev) => setTitulo(ev.target.value)}
                fullWidth
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                id="descricao"
                label={'Descrição'}
                value={descricao}
                onChange={(ev) => setDescricao(ev.target.value)}
                fullWidth
              />
            </Grid>
          </Grid>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={fecharModal}>NÃO</Button>
        <Button onClick={salvar} autoFocus>
          SIM
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Modal;
