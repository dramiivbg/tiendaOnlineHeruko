import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { TiendaController } from './../controller/TiendaController';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', TiendaController.getAll);

// Get one user
router.get('/:id', TiendaController.getById);

// Create a new user
router.post('/', TiendaController.new);

// Edit user
router.patch('/:id',  TiendaController.edit);

//change password

// Delete
router.delete('/:id',  TiendaController.delete);

export default router;
