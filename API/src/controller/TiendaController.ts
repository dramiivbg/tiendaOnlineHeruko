import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { validate } from 'class-validator';
import {Tiendas } from '../entity/tiendas';


export class TiendaController{
 
   

    static getAll = async (req: Request, res: Response) => {
        const tiendaRepository = getRepository(Tiendas);
        let pagos;

        try {
            pagos = await tiendaRepository.find({ select: ['tienda_id', 'nombre', 'direccion','ciudad','barrio','fecha_fundada'] });
          } catch (e) {
            res.status(404).json({ message: 'Somenthing goes wrong!' });
          }


    if (pagos.length > 0) {
        res.send(pagos);
      } else {
        res.status(404).json({ message: 'Not result' });
      }
    };
    
    
    
    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const tiendaRepository = getRepository(Tiendas);
        try {
          const tienda = await tiendaRepository.findOneOrFail(id);
          res.send(tienda);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };


      static new = async (req: Request, res: Response) => {
        const { nombre, direccion,ciudad,barrio,fecha_fundada} = req.body;
        const tienda = new Tiendas();

        tienda.nombre = nombre;
        tienda.direccion = direccion;
        tienda.ciudad = ciudad;
        tienda.barrio = barrio;
        tienda.fecha_fundada = fecha_fundada;
       
       
 
       

    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(tienda, validationOpt);
        if (errors.length > 0) {
          return res.status(409).json(errors);
        }
    
        // TODO: HASH PASSWORD
    
        const tiendaRepository = getRepository(Tiendas);
        try {
        
          await tiendaRepository.save(tienda);
         
        } catch (e) {
          return res.status(400).json({ message: 'tienda  not create' });
        }
        
        // All ok
        res.send('tienda created');
      };

      static edit = async (req: Request, res: Response) => {
       let tienda: Tiendas;
        const { id } = req.params;
        const { nombre, direccion,ciudad,barrio,fecha_fundada } = req.body;
    
        const tiendaRepository = getRepository(Tiendas);
        // Try get user
        try {
          tienda = await tiendaRepository.findOneOrFail(id);
          tienda.nombre = nombre;
          tienda.direccion = direccion;
          tienda.ciudad = ciudad;
          tienda.barrio = barrio;
          tienda.fecha_fundada = fecha_fundada;
        } catch (e) {
          return res.status(404).json({ message: 'tienda not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(tienda, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await tiendaRepository.save(tienda);
        } catch (e) {
          return res.status(409).json({ message: 'tienda not Edit' });
        }
    
        res.status(201).json({ message: 'tienda update' });
      };


      static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const tiendaRepository = getRepository(Tiendas);
        let tienda: Tiendas;
    
        try {
          tienda = await tiendaRepository.findOneOrFail(id);
        } catch (e) {
          return res.status(404).json({ message: 'tienda not found' });
        }
    
        // Remove user
        tiendaRepository.delete(id);
        res.status(201).json({ message: ' tienda deleted' });
      };
    

    
    
    


}


export default TiendaController;