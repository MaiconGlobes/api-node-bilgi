import express from 'express';
import usuarioController from '../controllers/usuario.controller';
import UsuarioMiddleware from '../middlewares/usuario.middleware';

	const usuarioRoutes = express.Router();

	usuarioRoutes.get(
		'/listar-usuario', 
		usuarioController.ProcessarListarUsuarios);

	usuarioRoutes.post(
		'/cadastrar-usuario', 
		UsuarioMiddleware.ValidarCadastro, 
		usuarioController.ProcessarCadastrarUsuario);

	usuarioRoutes.put(
		'/editar-usuario', 
		UsuarioMiddleware.ValidarEdicao, //corrigir as validações de edição
		usuarioController.ProcessarEditarUsuario);

	usuarioRoutes.delete(
		'/deletar-usuario', 
		UsuarioMiddleware.ValidarDelecao, //corrigir as validações de deleção (uuid valido)
		usuarioController.ProcessarExcluirUsuario);

export { usuarioRoutes };