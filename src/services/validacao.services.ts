import TAssuntoMensagem from '../@types/assunto_msg.type';
import TMensagem  from '../@types/mensagem.type';

class ValidacaoServices {
  
    private Mensagem(ACodigo: string, ADescricao: string): TMensagem {
    return {
      codigo: ACodigo,
      descricao: ADescricao,
    };
  }

  AcessoProibido(APropriedade: TAssuntoMensagem): TMensagem {
    return this.Mensagem('1', `[${APropriedade}] - Acesso Proibido!`);
  }

  AcessoNaoAutorizado(APropriedade: TAssuntoMensagem): TMensagem {
    return this.Mensagem('1.2', `[${APropriedade}] - Acesso não autorizado!`);
  }

  AcessoInativo(APropriedade: TAssuntoMensagem): TMensagem {
    return this.Mensagem('1.3', `[${APropriedade}] - Acesso inativo!`);
  }

  AcessoNaoPermitido(APropriedade: TAssuntoMensagem): TMensagem {
    return this.Mensagem('1.4', `[${APropriedade}] - Acesso não permitido!`);
  }

  ErroProcessamento(APropriedade: TAssuntoMensagem, AErroExcecao?: string): TMensagem {
    return this.Mensagem('1.5', `[${APropriedade}] - ${AErroExcecao}`);
  }

  ErroEnvioEmail(APropriedade: TAssuntoMensagem): TMensagem {
    return this.Mensagem('1.6', `[${APropriedade}] - Erro no envio do e-mail!`);
  }

  ErroBuscarRegistro(APropriedade: string): TMensagem {
    return this.Mensagem('1.7', `[${APropriedade}] - Erro ao buscar o registro!`);
  }

  ErroSalvarRegistro(APropriedade: string): TMensagem {
    return this.Mensagem('1.8', `[${APropriedade}] - Erro ao salvar o registro!`);
  }

  ErroInternoServidor(AErroExcecao: string): TMensagem {
    return this.Mensagem('1.9', `Erro interno de servidor: #:${AErroExcecao}`);
  }

  ErroNaAtualizacao(APropriedade: TAssuntoMensagem): TMensagem {
    return this.Mensagem('1.10', `[${APropriedade}] - Erro na atualização da entidade.`);
  }

  DeveSerInformado(APropriedade: string): TMensagem {
    return this.Mensagem('1.11', `[${APropriedade}] - Campo deve ser informado.`);
  }

  DeveSerDoTipoObjeto(APropriedade: string): TMensagem {
    return this.Mensagem('1.12', `[${APropriedade}] - Campo deve ser do tipo objeto.`);
  }

  DeveSerDoTipoArrayObjetos(APropriedade: string): TMensagem {
    return this.Mensagem('1.13', `[${APropriedade}] - Campo deve ser do tipo array de objetos.`);
  }

  DeveConterConexaoComBanco(): TMensagem {
    return this.Mensagem('1.14', `Não foi possível conectar com o banco dados!`);
  }

  DeveConterValorPermitido(APropriedade: string, AValoresPermitidos: (string | number)[]): TMensagem {
    return this.Mensagem('1.15', `[${APropriedade}] - Campo possui Valor diferente dos permitidos: [${AValoresPermitidos.join(', ')}]`);
  }

  DeveConterXCaracteres(APropriedade: string, AQtdeCaracteres: number): TMensagem {
    return this.Mensagem('1.16', `[${APropriedade}] - Campo deve conter ${AQtdeCaracteres} caracteres`);
  }

  DeveConterXDigitos(APropriedade: string, AQtdeDigitos: number): TMensagem {
    return this.Mensagem('1.17', `[${APropriedade}] - Campo deve conter ${AQtdeDigitos} dígitos.`);
  }

  DeveConterDeXaXCaracteres(APropriedade: string, AQtdeInicial: number, AQtdeFinal: number): TMensagem {
    return this.Mensagem('1.18', `[${APropriedade}] - Campo deve conter de ${AQtdeInicial} á ${AQtdeFinal} caracteres.`);
  }

  DeveConterNoMaximoXCaracteres(APropriedade: string, AQtdeCaracteres: number): TMensagem {
    return this.Mensagem('1.19', `[${APropriedade}] - Campo deve conter no máximo ${AQtdeCaracteres} caracteres.`);
  }

  DeveConterNoMaximoXDigitos(APropriedade: string, AQtdeDigitos: number): TMensagem {
    return this.Mensagem('1.20', `[${APropriedade}] - Campo deve conter no máximo ${AQtdeDigitos} dígitos.`);
  }

  DeveConterNoMinimoXCaracteres(APropriedade: string, AQtdeCaracteres: number): TMensagem {
    return this.Mensagem('1.21', `[${APropriedade}] - Campo deve conter no mínimo ${AQtdeCaracteres} caracteres.`);
  }

  DeveConterNoMinimoXDigitos(APropriedade: string, AQtdeDigitos: number): TMensagem {
    return this.Mensagem('1.22', `[${APropriedade}] - Campo deve conter no mínimo ${AQtdeDigitos} dígitos.`);
  }

  DeveConterColecaoStringNumerica(APropriedade: string): TMensagem {
    return this.Mensagem('1.23', `[${APropriedade}] - Campo deve conter uma coleção de string numérica.`);
  }

  DeveConterColecaoStringAlfaNumerica(APropriedade: string): TMensagem {
    return this.Mensagem('1.24', `[${APropriedade}] - Campo deve conter uma coleção de string alfanumérica.`);
  }

  DeveConterDadosNumericosTipoInteiro(APropriedade: string): TMensagem {
    return this.Mensagem('1.25', `[${APropriedade}] - Campo deve conter apenas dados numéricos do tipo inteiro.`);
  }

  DeveConterDadosNumericosTipoFloat(APropriedade: string): TMensagem {
    return this.Mensagem('1.26', `[${APropriedade}] - Campo deve conter apenas dados numéricos do tipo float.`);
  }

  DeveConterDadosTipoBoleano(APropriedade: string): TMensagem {
    return this.Mensagem('1.27', `[${APropriedade}] - Campo deve conter apenas dados do tipo booleano.`);
  }

  DeveConterTokenValido(APropriedade: string): TMensagem {
    return this.Mensagem('1.28', `[${APropriedade}] - Access token informado é inválido.`);
  }

  DeveConterCPFValido(APropriedade: string): TMensagem {
    return this.Mensagem('1.29', `[${APropriedade}] - Campo deve conter um CPF válido.`);
  }

  DeveConterCNPJValido(APropriedade: string): TMensagem {
    return this.Mensagem('1.30', `[${APropriedade}] - Campo deve conter um CNPJ válido.`);
  }

  DeveConterEMAILValido(APropriedade: string): TMensagem {
    return this.Mensagem('1.31', `[${APropriedade}] - Campo deve conter um e-mail válido.`);
  }
  DeveConterDATAValida(APropriedade: string): TMensagem {
    return this.Mensagem('1.32', `[${APropriedade}] - Campo deve conter uma data válida.`);
  }

  DeveConterRelacaoComSistema(APropriedade: string): TMensagem {
    return this.Mensagem('1.33', `[${APropriedade}] - Número não pertencente á nenhum sistema.`);
  }

  DeveConterUmCNPJValidoNoHasch(APropriedade: string): TMensagem {
    return this.Mensagem('1.34', `[${APropriedade}] - Parâmetro deve conter CNPJ válido em seu hasch.`);
  }

  DeveConterAccessTokenValido(APropriedade: TAssuntoMensagem): TMensagem {
    return this.Mensagem('1.35', `[${APropriedade}] - Parâmetro deve conter valor válido.`);
  }

  DeveConterRefreshTokenValido(APropriedade: string): TMensagem {
    return this.Mensagem('1.36', `[${APropriedade}] - Parâmetro deve conter refresh token válido.`);
  }

  DeveConterTextoComNumerosEPonto(APropriedade: string): TMensagem {
    return this.Mensagem('1.37', `[${APropriedade}] - Parâmetro deve conter apenas números e ponto.`);
  }

  NaoPodeSerInformado(APropriedade: string): TMensagem {
    return this.Mensagem('1.38', `[${APropriedade}] - Campo não pode ser informado.`);
  }

  NaoPodeSerNulo(APropriedade: string): TMensagem {
    return this.Mensagem('1.39', `[${APropriedade}] - Campo não pode ser nulo.`);
  }

  NaoPodeSerVazio(APropriedade: string): TMensagem {
    return this.Mensagem('1.40', `[${APropriedade}] - Campo não pode ser vazio.`);
  }

  NaoPodeSerNegativo(APropriedade: string): TMensagem {
    return this.Mensagem('1.41', `[${APropriedade}] - Campo não pode ser negativo.`);
  }

  NaoPodeSerInferiorValorMinimoPermitido(APropriedade: string, AValorMinimoPermitido: number): TMensagem {
    return this.Mensagem('1.42', `[${APropriedade}] - Campo não pode ser menor que o valor mínimo permitido: [${AValorMinimoPermitido}]`);
  }

  NaoPodeUltrapassarValorMaximoPermitido(APropriedade: string, AValorMaximoPermitido: number): TMensagem {
    return this.Mensagem('1.43', `[${APropriedade}] - Campo não pode ultrapassar o valor máximo permitido: [${AValorMaximoPermitido}]`);
  }

  ParametroNaoPermitido(APropriedade: string, AParamPermitidos: string[]): TMensagem {
    return this.Mensagem('1.44', `[${APropriedade}] - Parâmetro informado diferente dos permitidos: [${AParamPermitidos.join(', ')}]`);
  }

  ParametroNaoPodeSerVazio(APropriedade: string): TMensagem {
    return this.Mensagem('1.45', `[${APropriedade}] - Parâmetro não pode ser vazio.`);
  }

  ParametroDeveSerInformadoNoHeader(APropriedade: string): TMensagem {
    return this.Mensagem('1.46', `[${APropriedade}] - Parâmetro deve ser informado no header.`);
  }

  ParametroDeveSerInformadoNoQuery(APropriedade: string): TMensagem {
    return this.Mensagem('1.47', `[${APropriedade}] - Parâmetro deve ser informado no query.`);
  }

  ParametroDeveConterDadosNumericosTipoInteiro(APropriedade: string): TMensagem {
    return this.Mensagem('1.48', `[${APropriedade}] - Parâmetro deve conter apenas dados numéricos do tipo inteiro.`);
  }

  ParametroDeveConterDadosNumericosTipoFloat(APropriedade: string): TMensagem {
    return this.Mensagem('1.49', `[${APropriedade}] - Parâmetro deve conter apenas dados numéricos do tipo float.`);
  }

  ParametroDeveConterColecaoStringNumerica(APropriedade: string): TMensagem {
    return this.Mensagem('1.50', `[${APropriedade}] - Parâmetro deve conter uma coleção de string numérica.`);
  }

  PropriedadeNaoPermitida(APropriedade: string): TMensagem {
    return this.Mensagem('1.51', `[${APropriedade}] - Campo informado não permitido.`);
  }

  DeveTerValorEntre(APropriedade: string, AMinimo: number, AMaximo: number) {
    return this.Mensagem('1.52', `[${APropriedade}] - Campo informado deve ter um valor entre ${AMinimo} e ${AMaximo}.`);  
  }

  DadosIncorreto(APropriedade: TAssuntoMensagem): TMensagem {
    return this.Mensagem('2.1', `[${APropriedade}] - Dados incorretos!`);
  }

  RegistroNaoLocalizado(APropriedade: TAssuntoMensagem): TMensagem {
    return this.Mensagem('2.2', `[${APropriedade}] - Registro não localizado!`);
  }

  ValorInvalido(APropriedade: string): TMensagem {
    return this.Mensagem('2.3', `[${APropriedade}] - Valor inválido.`);
  }

  SemSucessoNaVerificacaoLoja(): TMensagem {
    return this.Mensagem('2.4', `Não foi possível verificar situação de cadastro para essa Loja.`);
  }

  ConflitoDeEntidades(APropriedade: string): TMensagem {
    return this.Mensagem('2.5', `[${APropriedade}] - Entidade não permitida na requisição.`);
  }

  DuplicidadeDeRegistro(APropriedade: TAssuntoMensagem | string, AMensagem?: string): TMensagem {
    return this.Mensagem('2.6', `[${APropriedade}] - ${AMensagem ? AMensagem : 'Registro já cadastrado no banco de dados.'}`);
  }

  RegistroNaoPodeSerAlterado(APropriedade: string): TMensagem {
    return this.Mensagem('2.7', `[${APropriedade}] - Registro não pode ser modificado.`);
  }
}

export default ValidacaoServices;