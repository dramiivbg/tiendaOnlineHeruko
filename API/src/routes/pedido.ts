import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { PedidoController } from './../controller/PedidoController';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', PedidoController.getAll);

// Get one user
router.get('/:id', PedidoController.getById);

// Create a new user
router.post('/', PedidoController.new);

// Edit user
router.patch('/:id',  PedidoController.edit);

//change password

// Delete
router.delete('/:id',  PedidoController.delete);

export default router;
