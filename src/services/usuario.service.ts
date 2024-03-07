import { Usuario } from "@prisma/client";
import { eStatusHTTP } from "../@enums/response.enum";
import TRetornoObjetoResponse from "../@types/response.type";
import Utils from "../utils/utils";
import SegurancaService from "./seguranca.service";
import ValidacaoErro from "./validacao_erro.service";
import UsuarioRepository from "../repositories/usuario.repository";
import { Request } from "express";
import TMensagem from "../@types/mensagem.type";

class UsuarioService {
   private _usuarioRepository : UsuarioRepository;
   private _utils : Utils;
   private _validacaoErro : ValidacaoErro;
   private _erros : Array<TMensagem>;
    
   constructor() {
      this._usuarioRepository = new UsuarioRepository();
      this._utils = new Utils();
      this._validacaoErro = new ValidacaoErro();
   }

   public async ListarUsuarios(AReq: Request): Promise<TRetornoObjetoResponse> {
      try {
         const retornoUsuarios = await this._usuarioRepository.Listar()

         return this._utils.MontarJsonRetorno(eStatusHTTP.SUCESSO, retornoUsuarios);
      
      } catch (error) {
         const objRetorno = this._validacaoErro.TratarErros(error);
         return this._utils.MontarJsonRetorno(eStatusHTTP.ERRO, objRetorno);
      }
   }
   
   public async CadastrarUsuario(AReq: Request): Promise<TRetornoObjetoResponse> {
      try {
         const usuario = <Usuario>AReq['body']['usuario'];
         const senha_criptografada = SegurancaService.Criptografar(usuario.senha);
         const token = SegurancaService.GerarRefreshToken(usuario.email, '10s');

         usuario['senha'] = senha_criptografada;

         const retornoUsuario = await this._usuarioRepository.Gravar(usuario)

         return this._utils.MontarJsonRetorno(eStatusHTTP.SUCESSO, this._utils.AlterarObjeto(retornoUsuario, {token}, 'senha'));
      
      } catch (error) {
         const objRetorno = this._validacaoErro.TratarErros(error);
         return this._utils.MontarJsonRetorno(eStatusHTTP.ERRO, objRetorno);
      }
   }

   public async AtualizarUsuario(AReq: Request): Promise<TRetornoObjetoResponse> {
      try {
         const usuario = <Usuario>AReq['body']['usuario'];
         const senha_criptografada = SegurancaService.Criptografar(usuario.senha);
         this._erros = new Array<TMensagem>();

         usuario['senha'] = senha_criptografada;

         const usuarioById = await this._usuarioRepository.BuscarById(usuario.id)

         if (usuarioById)
         {
            const retornoUsuario = await this._usuarioRepository.Atualizar(usuario)
            return this._utils.MontarJsonRetorno(eStatusHTTP.SUCESSO, {});
         }

         this._erros.push({codigo: '22', descricao : 'Usuário não localizado para atualização dos dados.'});

         return this._utils.MontarJsonRetorno(eStatusHTTP.NAO_LOCALIZADO, this._erros);
      
      } catch (error) {
         const objRetorno = this._validacaoErro.TratarErros(error);
         return this._utils.MontarJsonRetorno(eStatusHTTP.ERRO, objRetorno);
      }
   }
}

export default UsuarioService;