import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Products } from '../entity/Products';
import { validate } from 'class-validator';


export class ProductController{
 
   

    static getAll = async (req: Request, res: Response) => {
        const productRepository = getRepository(Products);
        let products;

        try {
            products = await productRepository.find({ select: ['producto_id' ,'tipo_producto', 'valor'] });
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
        const productRepository = getRepository(Products);
        try {
          const product = await productRepository.findOneOrFail(id);
          res.send(product);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };


      static new = async (req: Request, res: Response) => {
        const {   tipo_producto, valor, ciudad_de_exportacion} = req.body;
        const product = new Products();
        product.tipo_producto = tipo_producto;
        product.valor = valor;
        product.ciudad_de_exportacion = ciudad_de_exportacion;
 
       
    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(product, validationOpt);
        if (errors.length > 0) {
          return res.status(409).json(errors);
        }
    
        // TODO: HASH PASSWORD
    
        const productRepository = getRepository(Products);
        try {
        
          await productRepository.save(product);
         
        } catch (e) {
          return res.status(400).json({ message: 'product not create' });
        }
        
        // All ok
        res.send('Product created');
      };

      static edit = async (req: Request, res: Response) => {
       let product: Products;
        const { id } = req.params;
        const { tipo_producto, valor,ciudad_de_exportacion } = req.body;
    
        const productRepository = getRepository(Products);
        // Try get user
        try {
          product = await productRepository.findOneOrFail(id);
       
          product.tipo_producto = tipo_producto;
          product.valor = valor;
          product.ciudad_de_exportacion = ciudad_de_exportacion;
          
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
          await productRepository.save(product);
        } catch (e) {
          return res.status(409).json({ message: 'product not Edit' });
        }
    
        res.status(201).json({ message: 'Product update' });
      };


      static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const productRepository = getRepository(Products);
        let product: Products;
    
        try {
          product = await productRepository.findOneOrFail(id);
        } catch (e) {
          return res.status(404).json({ message: 'Product not found' });
        }
    
        // Remove user
        productRepository.delete(id);
        res.status(201).json({ message: ' Product deleted' });
      };
    

    
    
    


}


export default ProductController;