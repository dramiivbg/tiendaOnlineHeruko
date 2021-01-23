import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { validate } from 'class-validator';
import {Envios } from '../entity/envios';


export class EnvioController{
 
   

    static getAll = async (req: Request, res: Response) => {
        const envioRepository = getRepository(Envios);
        let envios;

        try {
            envios = await envioRepository.find({ select: ['envio_id', 'pedido_id', 'fecha_envio'] });
          } catch (e) {
            res.status(404).json({ message: 'Somenthing goes wrong!' });
          }


    if (envios.length > 0) {
        res.send(envios);
      } else {
        res.status(404).json({ message: 'Not result' });
      }
    };
    
    
    
    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const envioRepository = getRepository(Envios);
        try {
          const envio = await envioRepository.findOneOrFail(id);
          res.send(envio);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };


      static new = async (req: Request, res: Response) => {
        const {pedido_id,placa_vehiculo} = req.body;
        const envio = new Envios();
        envio.pedido_id = pedido_id;
        envio.placa_vehiculo = placa_vehiculo;
       
       
       
 
       

    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(envio, validationOpt);
        if (errors.length > 0) {
          return res.status(409).json(errors);
        }
    
        // TODO: HASH PASSWORD
    
        const envioRepository = getRepository(Envios);
        try {
        
          await envioRepository.save(envio);
         
        } catch (e) {
          return res.status(400).json({ message: 'envio  not create' });
        }
        
        // All ok
        res.send('envio created');
      };

      static edit = async (req: Request, res: Response) => {
    
        const { id } = req.params;
        const { pedido_id, fecha_envio,placa_vehiculo } = req.body;
        let envios;
        const envioRepository = getRepository(Envios);
        // Try get user
        try {
          await envioRepository.findOne(id);
        

          envios = await envioRepository.update(id, req.body);
          
        } catch (e) {
          return res.status(404).json({ message: 'envio not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(envios, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await envioRepository.save(envios);
        } catch (e) {
          return res.status(409).json({ message: 'envio not Edit' });
        }
    
        res.status(201).json({ message: 'envio update' });
      };


      static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const envioRepository = getRepository(Envios);
        let envio: Envios;
    
        try {
          envio = await envioRepository.findOneOrFail(id);
        } catch (e) {
          return res.status(404).json({ message: 'envio not found' });
        }
    
        // Remove user
        envioRepository.delete(id);
        res.status(201).json({ message: ' envio deleted' });
      };
    

    
    
    


}


export default EnvioController;