import { Request, Response } from "express";
import { eStatusHTTP } from "../@enums/response.enum";
import TRetornoObjetoResponse from "../@types/response.type";
import ResponseService from "../services/response.service";
import UsuarioService from "../services/usuario.service";

class UsuarioController extends ResponseService {

	private _usuarioService : UsuarioService;

	constructor() {
		super();
		this._usuarioService = new UsuarioService();
	}

	public ProcessarListarUsuarios = async (AReq : Request, AResp : Response): Promise<Response | undefined> => {
		try {
			
			const objRetorno = await this._usuarioService.ListarUsuarios(AReq);

			switch (objRetorno.codigo_status) {
			case eStatusHTTP.SUCESSO:
				return await this.OkObjectResult(AResp, objRetorno);
			case eStatusHTTP.ERRO:
				return await this.UnprocessableEntity(AResp, objRetorno);
			case eStatusHTTP.NAO_AUTORIZADO:
				return await this.UnauthorizedObjectResult(AResp, objRetorno);
			case eStatusHTTP.ACESSO_PROIBIDO:
				return await this.ForbiddenObjectResult(AResp, objRetorno);
			case eStatusHTTP.ERRO_SERVIDOR:
				return await this.ServerErrorMessageResult(AResp, objRetorno);
			}
		} catch (error) {
			const objRetorno = <TRetornoObjetoResponse>{status: 'Erro', codigo_status : 1, titulo: 'mensagens', conteudo: {}}
			return await this.ServerErrorMessageResult(AResp, objRetorno);
		}
	};

	public ProcessarCadastrarUsuario = async (AReq : Request, AResp : Response): Promise<Response | undefined> => {
		try {
			
			const objRetorno = await this._usuarioService.CadastrarUsuario(AReq);

			switch (objRetorno.codigo_status) {
			case eStatusHTTP.SUCESSO:
				return await this.CreatedObjectResult(AResp, objRetorno);
			case eStatusHTTP.ERRO:
				return await this.UnprocessableEntity(AResp, objRetorno);
			case eStatusHTTP.NAO_AUTORIZADO:
				return await this.UnauthorizedObjectResult(AResp, objRetorno);
			case eStatusHTTP.ACESSO_PROIBIDO:
				return await this.ForbiddenObjectResult(AResp, objRetorno);
			case eStatusHTTP.ERRO_SERVIDOR:
				return await this.ServerErrorMessageResult(AResp, objRetorno);
			}
		} catch (error) {
			const objRetorno = <TRetornoObjetoResponse>{status: 'Erro', codigo_status : 1, titulo: 'mensagens', conteudo: {}}
			return await this.ServerErrorMessageResult(AResp, objRetorno);
		}
	};

	public ProcessarEditarUsuario = async (AReq : Request, AResp : Response): Promise<Response | undefined> => {
		try {
			
			const objRetorno = await this._usuarioService.AtualizarUsuario(AReq);

			switch (objRetorno.codigo_status) {
				case eStatusHTTP.SUCESSO:
				return await this.NoContentResult(AResp);
				case eStatusHTTP.SUCESSO:
					return await this.NoContentResult(AResp);
				case eStatusHTTP.NAO_LOCALIZADO:
					return await this.OkObjectResult(AResp, objRetorno);
				case eStatusHTTP.NAO_AUTORIZADO:
					return await this.UnauthorizedObjectResult(AResp, objRetorno);
				case eStatusHTTP.ACESSO_PROIBIDO:
					return await this.ForbiddenObjectResult(AResp, objRetorno);
				case eStatusHTTP.ERRO_SERVIDOR:
					return await this.ServerErrorMessageResult(AResp, objRetorno);
			}
		} catch (error) {
			const objRetorno = <TRetornoObjetoResponse>{status: 'Erro', codigo_status : 1, titulo: 'mensagens', conteudo: {}}
			return await this.ServerErrorMessageResult(AResp, objRetorno);
		}
	};

   public ProcessarExcluirUsuario = async (AReq : Request, AResp : Response): Promise<Response | undefined> => {
		try {
			
			const objRetorno = await this._usuarioService.ExcluirUsuario(AReq);

			switch (objRetorno.codigo_status) {
				case eStatusHTTP.SUCESSO:
				return await this.OkObjectResult(AResp, objRetorno);
				case eStatusHTTP.SUCESSO:
					return await this.NoContentResult(AResp);
				case eStatusHTTP.NAO_LOCALIZADO:
					return await this.OkObjectResult(AResp, objRetorno);
				case eStatusHTTP.NAO_AUTORIZADO:
					return await this.UnauthorizedObjectResult(AResp, objRetorno);
				case eStatusHTTP.ACESSO_PROIBIDO:
					return await this.ForbiddenObjectResult(AResp, objRetorno);
				case eStatusHTTP.ERRO_SERVIDOR:
					return await this.ServerErrorMessageResult(AResp, objRetorno);
			}
		} catch (error) {
			const objRetorno = <TRetornoObjetoResponse>{status: 'Erro', codigo_status : 1, titulo: 'mensagens', conteudo: {}}
			return await this.ServerErrorMessageResult(AResp, objRetorno);
		}
	};
}

export default new UsuarioController();