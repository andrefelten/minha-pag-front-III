export type Recado = {
    id: number;
    titulo: string;
    descricao: string;
    criadoPor: string;
  };
  
  export type Usuario = {
    email: string;
    senha: string;
    recados: Recado[];
  };
  
  export type Acao = 'criar' | 'atualizar' | 'deletar';
  