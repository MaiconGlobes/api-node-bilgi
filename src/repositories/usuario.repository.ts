import { Usuario } from '@prisma/client';
import { database } from "../database";

class UsuarioRepository {

   public async Listar(): Promise<Usuario[]> {
      const usuarios = await database.usuario.findMany()
  
        return usuarios
   }

   public async BuscarById(uuid: string): Promise<Usuario> {
      const usuario = await database.usuario.findFirst({
         where : {
            id: uuid ? uuid : ''
         }
      })
  
        return <Usuario>usuario;
   }

   public async Gravar(AUser: Omit<Usuario, 'id'>): Promise<Usuario> {
      const usuario = await database.usuario.create({
         data : AUser
      })

      return usuario;
   }

   public async Atualizar(AUser: Usuario): Promise<Usuario> {
      const usuario = await database.usuario.update({
         where : {
            id: AUser.id
         },
         data : AUser
      })

      return usuario;
   }

} 

export default UsuarioRepository;