import { Request } from "express";

interface IMiddlwareValidar {
    Validar(AReq: Request): Promise<void>;
  }
  
  export default IMiddlwareValidar;