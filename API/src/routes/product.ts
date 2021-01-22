import { checkRole } from './../middlewares/role';
import { checkJwt } from './../middlewares/jwt';
import { ProductController } from './../controller/ProductController';
import { Router } from 'express';

const router = Router();

// Get all users
router.get('/', ProductController.getAll);

// Get one user
router.get('/:id',  ProductController.getById);

// Create a new user
router.post('/', ProductController.new);

// Edit user
router.patch('/:id',  ProductController.edit);


// Delete
router.delete('/:id', ProductController.delete);

export default router;
