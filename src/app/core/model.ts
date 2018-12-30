
export class Categoria {
  nome: string;
  codigo: number;
}

export class Endereco {
  logradouro: string;
  numero: number;
  complemento: string;
  bairro: string;
  cep: string;
  cidade: string;
  estado: string;
}

export class Lancamento {
  codigo: number;
  tipoLancamento = 'RECEITA';
  descricao: string;
  dataVencimento: Date;
  dataPagamento: Date;
  valor: number;
  observacao: string;
  pessoa = new Pessoa();
  categoria = new Categoria();
}

export class Pessoa {
  nome: string;
  codigo: number;
  ativo: boolean;
  endereco = new Endereco();
}


