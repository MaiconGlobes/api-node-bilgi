import express from 'express';
import { usuarioRoutes } from '../routes/usuario.route';

const routes = express();

routes.use('/usuario', usuarioRoutes);

export default routes;