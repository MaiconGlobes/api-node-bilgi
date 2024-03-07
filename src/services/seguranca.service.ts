import UsuarioRepository from "../repositories/usuario.repository";
import Utils from "../utils/utils";
import * as bcrypt from 'bcrypt';
import TPeriodo from "../@types/periodo.type";

class SegurancaService {
   private readonly _utils : Utils;
   private _jwt : any;
   private _secret_key : string;

   constructor() {
      this._utils = new Utils();
      this._jwt = require('jsonwebtoken');
      this._secret_key = 'chave_sereta'
   }

   public Criptografar(AsenhaDescriptografada: string): string {
      const secret = process.env.SECRET_KEY || '';
      return bcrypt.hashSync(`${secret} ${AsenhaDescriptografada}`, 10);
   }

   public ChecarHash(AsenhaCriptografada: string, AsenhaDescriptografada: string): boolean {
      const secret = process.env.SECRET_KEY || '';
      return bcrypt.compareSync(`${secret} ${AsenhaDescriptografada}`, AsenhaCriptografada);
   }

   public GerarRefreshToken(AEmail : string, APeriodo : TPeriodo) : string {
      const payload = {
         email: AEmail,
         tipo: 'refresh_token',
      };
      
      const options = {
         expiresIn: APeriodo, 
         algorithm: 'HS256',
      };
      
      const refreshToken = this._jwt.sign(payload, this._secret_key, options);
      return refreshToken;
   }

   public async ValidarToken(AToken: string): Promise<boolean> {
      if (AToken === undefined) {
        return false;
      }
  
      let tokenValido: boolean = false;
  
      this._jwt.verify(AToken, this._secret_key, (erro: any) => {
        tokenValido = erro ? false : true;
      });
  
      return tokenValido;
   }
  
}

export default new SegurancaService;