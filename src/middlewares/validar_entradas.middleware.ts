import { NextFunction, Request, Response } from 'express';
import { eStatusHTTP } from '../@enums/response.enum';
import TMensagem from '../@types/mensagem.type';
import ResponseService from '../services/response.service';
import Utils from '../utils/utils';
import ValidacaoServices from '../services/validacao.services';
import ErrorQuery from '../interfaces/error_query.interface';


class ValidarEntradasSistemaMiddleware extends ResponseService {
	private _utils : Utils;
	private _validacao : ValidacaoServices;
	private _erros : Array<TMensagem>;

	constructor() {
		super();
		this._utils = new Utils();
		this._validacao = new ValidacaoServices();
	}

  public ValidarEntrada = async (AError: ErrorQuery, AReq: Request, ARes: Response, next: NextFunction) => {
    const catchErro = AError.stack;
    const objErros = new Array<Object>();

    if (catchErro?.includes('SyntaxError')) {
      objErros.push(this._validacao.ErroProcessamento('JSON', `JSON mal formatado ou inválido: ${AError.query ? AError.query : AError}`));
      this.BadRequestResult(ARes, this._utils.MontarJsonRetorno(eStatusHTTP.REQUISICAO_INVALIDA, objErros));
    } else {
      objErros.push(this._validacao.ErroInternoServidor(''));
      this.BadRequestResult(ARes, this._utils.MontarJsonRetorno(eStatusHTTP.ERRO_SERVIDOR, objErros));
    }
  };
  
}

export default new ValidarEntradasSistemaMiddleware();