import { Router } from 'express';
import auth from './auth';
import user from './user';
import product from './product';
import pedido from './pedido';
import envio from './envio';
import vehiculo_envio from "./vehiculo_envio";

import targeta from './targeta';

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/products', product);
routes.use('/pedidos', pedido);
routes.use('/envios', envio);
routes.use('/vehiculos', vehiculo_envio);
routes.use('/targetas', targeta);


export default routes;
