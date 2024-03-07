import { PrismaClientKnownRequestError, empty } from "@prisma/client/runtime/library";
import { eCodigoErro } from "../@enums/erros.enum";
import { eStatusHTTP } from "../@enums/response.enum";
import TRetornoObjetoResponse from "../@types/response.type";
import Utils from "../utils/utils";
import ValidacaoServices from "./validacao.services";

class ValidacaoErro {
   private _utils : Utils;
   private _validacaoServices : ValidacaoServices;

   constructor() {
      this._utils =  new Utils();
      this._validacaoServices =new ValidacaoServices();
   }
   
   public TratarErros(AErro: any | undefined | PrismaClientKnownRequestError): TRetornoObjetoResponse {
      switch (AErro?.code) {
         case eCodigoErro.DUPLICATE_KEY_VALUE_MYSQL:
            return this.ErroRegistroDuplicado(AErro, new Array());
         case eCodigoErro.VALUE_NOT_PRESENT_MYSQL:
            return this.ErroValorNaoPresente(AErro, new Array());
         case eCodigoErro.VALUE_TO_LONG_MYSQL:
            return this.ErroValorMuitoLongo(new Array());
         case eCodigoErro.INPUT_INVALID_MYSQL:
            return this.ErroEntradaInvalida(new Array());
         default:
            return this.ErroDefault(AErro, new Array());
      }
   }

   private ErroRegistroDuplicado(AErro: any | undefined, AArrayErros: Array<object>): TRetornoObjetoResponse {
      const regex = /Unique constraint failed on the constraint/gi;
      let resultado = '';
      const reg_duplicado = regex.test(AErro?.message);

      if (reg_duplicado)
         resultado = 'Registro duplicado! Violação de Unique constraint.';

      AArrayErros.push(this._validacaoServices.DuplicidadeDeRegistro(AErro?.table ? AErro.table : 'Banco de dados', resultado));
      return this._utils.MontarJsonRetorno(eStatusHTTP.REGISTRO_DUPLICADO, AArrayErros);
   }
   
   private ErroValorNaoPresente(AErro: any | undefined, AArrayErros: Array<object>): TRetornoObjetoResponse {
      const str = AErro?.detail.slice(4);
      let resultado = str.replace('(', '[');
      resultado = resultado.replace(')', ']');
      resultado = resultado.replace(/[\\"]/g, '');
      resultado = resultado.replace('is not present in table', 'não está presente na tabela');
   
      AArrayErros.push(this._validacaoServices.ErroProcessamento('Banco de dados', resultado));
      return this._utils.MontarJsonRetorno(eStatusHTTP.ERRO, AArrayErros);
   }
   
   private ErroValorMuitoLongo(AArrayErros: Array<object>): TRetornoObjetoResponse {
      AArrayErros.push(this._validacaoServices.ErroProcessamento('Banco de dados', 'Valor muito longo para um ou mais campos da tabela do banco de dados.'));
      return this._utils.MontarJsonRetorno(eStatusHTTP.ERRO, AArrayErros);
   }
   
   private ErroDefault(AErro: any | undefined, AArrayErros: Array<object>): TRetornoObjetoResponse {
      const regex = /Invalid `database/gi;
      let resultado = '';
      const reg_duplicado = regex.test(AErro?.message);

      if (reg_duplicado)
         resultado = `Erro crítico no banco de dados\n\n##:${AErro?.message}`;

      AArrayErros.push(this._validacaoServices.DuplicidadeDeRegistro(AErro?.table ? AErro.table : 'Banco de dados', resultado));
      return this._utils.MontarJsonRetorno(eStatusHTTP.REGISTRO_DUPLICADO, AArrayErros);;
   }
   
   private ErroEntradaInvalida(AArrayErros: Array<object>): TRetornoObjetoResponse {
      AArrayErros.push(this._validacaoServices.ErroProcessamento('Banco de dados', 'sintaxe de entrada inválida para um ou mais tipos.'));
      return this._utils.MontarJsonRetorno(eStatusHTTP.ERRO, AArrayErros);
   }
}

export default ValidacaoErro;