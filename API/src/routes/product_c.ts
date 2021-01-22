import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { Product_cController } from './../controller/Product_cController';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', Product_cController.getAll);

// Get one user
router.get('/:id',  Product_cController.getById);

// Create a new user
router.post('/', Product_cController.new);

// Edit user
router.patch('/:id',  Product_cController.edit);

//change password

// Delete
router.delete('/:id',  Product_cController.delete);

export default router;
