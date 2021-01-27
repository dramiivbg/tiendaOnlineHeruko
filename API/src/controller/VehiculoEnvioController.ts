import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { validate } from 'class-validator';
import {Vehiculo_envios } from '../entity/vehiculo_envios';


export class VehiculoEnvioController{
 
   

    static getAll = async (req: Request, res: Response) => {
        const VehiculoEnvioRepository = getRepository(Vehiculo_envios);
        let vehiculo_envios;

        try {
            vehiculo_envios = await VehiculoEnvioRepository.find({ select: ['placa', 'nombre', 'color','marca'] });
          } catch (e) {
            res.status(404).json({ message: 'Somenthing goes wrong!' });
          }


    if (vehiculo_envios.length > 0) {
        res.send(vehiculo_envios);
      } else {
        res.status(404).json({ message: 'Not result' });
      }
    };
    
    
    
    static getById = async (req: Request, res: Response) => {
        const { placa } = req.params;
        const VehiculoEnvioRepository = getRepository(Vehiculo_envios);
        try {
          const pedido = await VehiculoEnvioRepository.findOneOrFail(placa);
          res.send(pedido);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };


      static new = async (req: Request, res: Response) => {
        const { placa,nombre,color, marca} = req.body;
        const vehiculo_envio = new Vehiculo_envios();
        
        vehiculo_envio.placa = placa;
        vehiculo_envio.nombre = nombre;
        vehiculo_envio.color = color;
        vehiculo_envio.marca = marca;
        
       
 
       

    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(vehiculo_envio, validationOpt);
        if (errors.length > 0) {
          return res.status(409).json(errors);
        }
    
        
        const VehiculoEnvioRepository = getRepository(Vehiculo_envios);
        try {
        
          await VehiculoEnvioRepository.save(vehiculo_envio);
         
        } catch (e) {
          return res.status(400).json({ message: 'vehiculo_envio  not create' });
        }
        
        // All ok
        res.send('vehiculo_envio created');
      };

      static edit = async (req: Request, res: Response) => {
       let vehiculo_envio: Vehiculo_envios;
        const { placa1 } = req.params;
        const { placa,nombre,color,marca } = req.body;
    
        const VehiculoEnvioRepository = getRepository(Vehiculo_envios);
        // Try get user
        try {
          vehiculo_envio = await VehiculoEnvioRepository.findOneOrFail(placa1);
          vehiculo_envio.placa = placa;
          vehiculo_envio.nombre = nombre;
          vehiculo_envio.color = color;
          vehiculo_envio.marca = marca;
          
        } catch (e) {
          return res.status(404).json({ message: 'vehiculo not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(vehiculo_envio, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await VehiculoEnvioRepository.save(vehiculo_envio);
        } catch (e) {
          return res.status(409).json({ message: 'vehiculo not Edit' });
        }
    
        res.status(201).json({ message: 'vehiculo update' });
      };


      static delete = async (req: Request, res: Response) => {
        const { placa } = req.params;
        const VehiculoEnvioRepository = getRepository(Vehiculo_envios);
        let vehiculo_envio: Vehiculo_envios;
    
        try {
          vehiculo_envio = await VehiculoEnvioRepository.findOneOrFail(placa);
        } catch (e) {
          return res.status(404).json({ message: 'vehiculo not found' });
        }
        
        // Remove user
        VehiculoEnvioRepository.delete(placa);
        res.status(201).json({ message: ' vehiculo deleted' });
      };
    

    
    
    


}


export default VehiculoEnvioController;