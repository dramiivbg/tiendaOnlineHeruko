import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { TargetaController } from './../controller/targetaController';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', TargetaController.getAll);

// Get one user
router.get('/:id',  TargetaController.getById);

// Create a new user
router.post('/', TargetaController.new);

// Edit user
router.patch('/:id',  TargetaController.edit);


// Delete
router.delete('/:id', TargetaController.delete);

export default router;
