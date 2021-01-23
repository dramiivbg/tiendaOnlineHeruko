import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { validate } from 'class-validator';
import {Pedidos } from '../entity/pedidos';


export class PedidoController{
 
   

    static getAll = async (req: Request, res: Response) => {
        const pedidoRepository = getRepository(Pedidos);
        let pedidos;

        try {
            pedidos = await pedidoRepository.find({ select: ['pedido_id', 'user_id', 'producto_id','pago_id'] });
          } catch (e) {
            res.status(404).json({ message: 'Somenthing goes wrong!' });
          }


    if (pedidos.length > 0) {
        res.send(pedidos);
      } else {
        res.status(404).json({ message: 'Not result' });
      }
    };
    
    
    
    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const pedidoRepository = getRepository(Pedidos);
        try {
          const pedido = await pedidoRepository.findOneOrFail(id);
          res.send(pedido);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };


      static new = async (req: Request, res: Response) => {
        const { user_id,pago_id, direccion,cuidad,producto_id} = req.body;
        const pedido = new Pedidos();
        pedido.user_id = user_id;
        pedido.pago_id = pago_id;
        pedido.direccion = direccion;
        pedido.ciudad = cuidad;
        pedido.producto_id = producto_id;
       
       
 
       

    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(pedido, validationOpt);
        if (errors.length > 0) {
          return res.status(409).json(errors);
        }
    
        
        const pedidoRepository = getRepository(Pedidos);
        try {
        
          await pedidoRepository.save(pedido);
         
        } catch (e) {
          return res.status(400).json({ message: 'pedido  not create' });
        }
        
        // All ok
        res.send('Pedido created');
      };

      static edit = async (req: Request, res: Response) => {
       let pedido: Pedidos;
        const { id } = req.params;
        const { user_id, direccion,ciudad,producto_id,fecha_pedido } = req.body;
    
        const pedidoRepository = getRepository(Pedidos);
        // Try get user
        try {
          pedido = await pedidoRepository.findOneOrFail(id);
          pedido.user_id = user_id ;
          pedido.direccion = direccion;
          pedido.ciudad = ciudad;
          pedido.producto_id = producto_id;
          pedido.fecha_pedido = fecha_pedido;
        ;
          
        } catch (e) {
          return res.status(404).json({ message: 'Pedido not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(pedido, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await pedidoRepository.save(pedido);
        } catch (e) {
          return res.status(409).json({ message: 'pedido not Edit' });
        }
    
        res.status(201).json({ message: 'Pedido update' });
      };


      static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const pedidoRepository = getRepository(Pedidos);
        let pedido: Pedidos;
    
        try {
          pedido = await pedidoRepository.findOneOrFail(id);
        } catch (e) {
          return res.status(404).json({ message: 'Pedido not found' });
        }
    
        // Remove user
        pedidoRepository.delete(id);
        res.status(201).json({ message: ' Pedido deleted' });
      };
    

    
    
    


}


export default PedidoController;