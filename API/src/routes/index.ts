import { Router } from 'express';
import auth from './auth';
import user from './user';
import product from './product';
import product_c from './product_c';

const routes = Router();

routes.use('/auth', auth);
routes.use('/users', user);
routes.use('/products', product);
routes.use('/products_c', product_c);


export default routes;
