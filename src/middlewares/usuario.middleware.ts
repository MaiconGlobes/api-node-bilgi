import ResponseService from "../services/response.service";
import { ValidationError, validationResult } from 'express-validator';
import { NextFunction, Request, Response } from 'express';
import Utils from "../utils/utils";
import { eStatusHTTP } from "../@enums/response.enum";
import TMensagem from "../@types/mensagem.type";
import ValidacaousuarioMiddleware from './validators/cadastro.usuario.middleware.validator';

class UsuarioMiddleware extends ResponseService {
   private _utils : Utils;
   private _erros : Array<TMensagem>;

   constructor() {
      super();
      this._utils = new Utils();
   }

   public ValidarCadastro = async (AReq: Request, ARes: Response, next: NextFunction): Promise<Object | void> => {
      this._erros = new Array<TMensagem>();

      await ValidacaousuarioMiddleware.Validar(AReq);

      const errorFormatter = ({ msg }: ValidationError): Object => {
         return msg as Object;
      };

      const erros = validationResult(AReq);

      if (!erros.isEmpty()) {
         const msgArray = validationResult(AReq).formatWith(errorFormatter).array();

         msgArray.forEach((mensagem) => {
            this._erros.push({codigo: '22', descricao : mensagem as string});
         });

         return this.BadRequestResult(ARes, this._utils.MontarJsonRetorno(eStatusHTTP.REQUISICAO_INVALIDA, this._erros));
      }

      next();
      return;
   };

   public ValidarEdicao = async (AReq: Request, ARes: Response, next: NextFunction): Promise<Object | void> => {
      this._erros = new Array<TMensagem>();

      await ValidacaousuarioMiddleware.Validar(AReq);

      const errorFormatter = ({ msg }: ValidationError): Object => {
         return msg as Object;
      };

      const erros = validationResult(AReq);

      if (!erros.isEmpty()) {
         const msgArray = validationResult(AReq).formatWith(errorFormatter).array();

         msgArray.forEach((mensagem) => {
            this._erros.push({codigo: '22', descricao : mensagem as string});
         });

         return this.BadRequestResult(ARes, this._utils.MontarJsonRetorno(eStatusHTTP.REQUISICAO_INVALIDA, this._erros));
      }

      next();
      return;
   };

   public ValidarDelecao = async (AReq: Request, ARes: Response, next: NextFunction): Promise<Object | void> => {
      this._erros = new Array<TMensagem>();

      await ValidacaousuarioMiddleware.Validar(AReq);

      const errorFormatter = ({ msg }: ValidationError): Object => {
         return msg as Object;
      };

      const erros = validationResult(AReq);

      if (!erros.isEmpty()) {
         const msgArray = validationResult(AReq).formatWith(errorFormatter).array();

         msgArray.forEach((mensagem) => {
            this._erros.push({codigo: '22', descricao : mensagem as string});
         });

         return this.BadRequestResult(ARes, this._utils.MontarJsonRetorno(eStatusHTTP.REQUISICAO_INVALIDA, this._erros));
      }

      next();
      return;
   };
}

export default new UsuarioMiddleware();