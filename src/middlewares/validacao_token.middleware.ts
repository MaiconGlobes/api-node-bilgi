import { NextFunction, Request, Response } from "express";
import ResponseService from "../services/response.service";
import Utils from "../utils/utils";
import TMensagem from "../@types/mensagem.type";
import segurancaService from "../services/seguranca.service";
import ValidacaoServices from "../services/validacao.services";
import { eStatusHTTP } from "../@enums/response.enum";

class ValidacaoTokenMiddleware extends ResponseService {
	private _utils : Utils;
	private _validacao : ValidacaoServices;
	private _erros : Array<TMensagem>;

	constructor() {
		super();
		this._utils = new Utils();
		this._validacao = new ValidacaoServices();
	}

	public ValidarAccessToken = async (AReq: Request, ARes: Response, next: NextFunction): Promise<Object | void> => {
		this._erros = new Array<TMensagem>();

			if (AReq.headers.authorization) {
				const tokenValido = await segurancaService.ValidarToken(AReq.headers.authorization);

				if (!tokenValido) {
					this._erros.push(this._validacao.DeveConterAccessTokenValido('Authorization'));

					const objRetorno = this._utils.MontarJsonRetorno(eStatusHTTP.NAO_AUTORIZADO, this._erros);
					return this.UnauthorizedObjectResult(ARes, objRetorno);
				}
			}

			next();
			return;
	};

}

export default new ValidacaoTokenMiddleware()