import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { EnvioController } from './../controller/EnvioController';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', EnvioController.getAll);

// Get one user
router.get('/:id', EnvioController.getById);

// Create a new user
router.post('/', EnvioController.new);

// Edit user
router.patch('/:id',  EnvioController.edit);

//change password

// Delete
router.delete('/:id',  EnvioController.delete);

export default router;