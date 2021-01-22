import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Products } from '../entity/Products';
import { validate } from 'class-validator';


export class ProductController{
 
   

    static getAll = async (req: Request, res: Response) => {
        const userRepository = getRepository(Products);
        let products;

        try {
            products = await userRepository.find({ select: ['producto_id', 'tipo_producto', 'valor'] });
          } catch (e) {
            res.status(404).json({ message: 'Somenthing goes wrong!' });
          }


    if (products.length > 0) {
        res.send(products);
      } else {
        res.status(404).json({ message: 'Not result' });
      }
    };
    
    
    
    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(Products);
        try {
          const product = await userRepository.findOneOrFail(id);
          res.send(product);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };


      static new = async (req: Request, res: Response) => {
        const { producto_id,cantidad, tipo_producto, valor} = req.body;
        const product = new Products();
        product.producto_id = producto_id;
        product.cantidad = cantidad;
        product.tipo_producto = tipo_producto;
        product.valor = valor;
 
       
    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(product, validationOpt);
        if (errors.length > 0) {
          return res.status(409).json(errors);
        }
    
        // TODO: HASH PASSWORD
    
        const userRepository = getRepository(Products);
        try {
        
          await userRepository.save(product);
         
        } catch (e) {
          return res.status(400).json({ message: 'product not create' });
        }
        
        // All ok
        res.send('Product created');
      };

      static edit = async (req: Request, res: Response) => {
       let product: Products;
        const { id } = req.params;
        const { cantidad,tipo_producto, valor } = req.body;
    
        const userRepository = getRepository(Products);
        // Try get user
        try {
          product = await userRepository.findOneOrFail(id);
          product.cantidad = cantidad ;
          product.tipo_producto = tipo_producto;
          product.valor = valor;
          
        } catch (e) {
          return res.status(404).json({ message: 'User not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(product, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await userRepository.save(product);
        } catch (e) {
          return res.status(409).json({ message: 'product not Edit' });
        }
    
        res.status(201).json({ message: 'Product update' });
      };


      static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(Products);
        let product: Products;
    
        try {
          product = await userRepository.findOneOrFail(id);
        } catch (e) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        // Remove user
        userRepository.delete(id);
        res.status(201).json({ message: ' Product deleted' });
      };
    

    
    
    


}


export default ProductController;