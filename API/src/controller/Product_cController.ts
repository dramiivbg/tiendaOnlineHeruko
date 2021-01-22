import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { validate } from 'class-validator';
import { Products_c } from '../entity/Products_c';


export class Product_cController{
 
   

    static getAll = async (req: Request, res: Response) => {
        const userRepository = getRepository(Products_c);
        let products_c;

        try {
            products_c = await userRepository.find({ select: ['producto_id', 'user_id', 'veces_comprado'] });
          } catch (e) {
            res.status(404).json({ message: 'Somenthing goes wrong!' });
          }


    if (products_c.length > 0) {
        res.send(products_c);
      } else {
        res.status(404).json({ message: 'Not result' });
      }
    };
    
    
    
    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(Products_c);
        try {
          const product_c = await userRepository.findOneOrFail(id);
          res.send(product_c);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };


      static new = async (req: Request, res: Response) => {
        const { producto_id,user_id, veces_comprado} = req.body;
        const product_c = new Products_c();
        product_c.producto_id = producto_id;
        product_c.user_id = user_id;
        product_c.veces_comprado = veces_comprado;
       
 
       
    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(product_c, validationOpt);
        if (errors.length > 0) {
          return res.status(409).json(errors);
        }
    
        // TODO: HASH PASSWORD
    
        const userRepository = getRepository(Products_c);
        try {
        
          await userRepository.save(product_c);
         
        } catch (e) {
          return res.status(400).json({ message: 'product_c not create' });
        }
        
        // All ok
        res.send('Product_c created');
      };

      static edit = async (req: Request, res: Response) => {
       let product_c: Products_c;
        const { id } = req.params;
        const { veces_comprado } = req.body;
    
        const userRepository = getRepository(Products_c);
        // Try get user
        try {
          product_c = await userRepository.findOneOrFail(id);
          product_c.veces_comprado = veces_comprado ;
        ;
          
        } catch (e) {
          return res.status(404).json({ message: 'Product_c not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(product_c, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await userRepository.save(product_c);
        } catch (e) {
          return res.status(409).json({ message: 'product_c not Edit' });
        }
    
        res.status(201).json({ message: 'Product_c update' });
      };


      static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const userRepository = getRepository(Products_c);
        let product_c: Products_c;
    
        try {
          product_c = await userRepository.findOneOrFail(id);
        } catch (e) {
          return res.status(404).json({ message: 'Product_c not found' });
        }
    
        // Remove user
        userRepository.delete(id);
        res.status(201).json({ message: ' Product_c deleted' });
      };
    

    
    
    


}


export default Product_cController;