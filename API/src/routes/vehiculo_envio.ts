import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { VehiculoEnvioController } from './../controller/VehiculoEnvioController';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', VehiculoEnvioController.getAll);

// Get one user
router.get('/:id', VehiculoEnvioController.getById);

// Create a new user
router.post('/', VehiculoEnvioController.new);

// Edit user
router.patch('/:id',  VehiculoEnvioController.edit);

//change password

// Delete
router.delete('/:id',  VehiculoEnvioController.delete);

export default router;
