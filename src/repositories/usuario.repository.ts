import { Usuario } from '@prisma/client';
import { database } from "../database";

class UsuarioRepository {

   public async Listar(): Promise<Usuario[]> {
      const usuarios = await database.usuario.findMany()
  
        return usuarios
   }

   public async BuscarId(uuid: string | undefined): Promise<Usuario> {
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

   // public async AlterarSenha(AModel: Omit<Usuario, 'id'>): Promise<number> {

   //  const usuario = await database.usuario.updateMany({
   //       where: {
   //          email: AModel.email,
   //       },
   //       data: {
   //          senha: AModel.senha,
   //       },
   //    });

   //    return usuario.count;
   // }
} 

export default UsuarioRepository;