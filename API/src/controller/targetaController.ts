import { getRepository } from 'typeorm';
import { Request, Response } from 'express';
import { Targetas } from '../entity/targetas';
import { validate } from 'class-validator';


export class TargetaController{
 
   

    static getAll = async (req: Request, res: Response) => {
        const targetaRepository = getRepository(Targetas);
        let targetas;

        try {
            targetas = await targetaRepository.find({ select: ['targeta_id', 'nombre_targeta' ,'fecha_vencimiento'] });
          } catch (e) {
            res.status(404).json({ message: 'Somenthing goes wrong!' });
          }


    if (targetas.length > 0) {
        res.send(targetas);
      } else {
        res.status(404).json({ message: 'Not result' });
      }
    };
    
    
    
    static getById = async (req: Request, res: Response) => {
        const { id } = req.params;
        const targetaRepository = getRepository(Targetas);
        try {
          const targeta = await targetaRepository.findOneOrFail(id);
          res.send(targeta);
        } catch (e) {
          res.status(404).json({ message: 'Not result' });
        }
      };


      static new = async (req: Request, res: Response) => {
        const { nombre_targeta, nombre_y_apellido, tipo_targeta, fecha_vencimiento, codigo_segurida, tipo_documento, numero_documento} = req.body;
        const targeta = new Targetas();
        targeta.nombre_targeta = nombre_targeta;
        targeta.nombre_y_apellido = nombre_y_apellido;
        targeta.tipo_targeta = tipo_targeta;
        targeta.fecha_vencimiento = fecha_vencimiento;
        targeta.codigo_segurida = codigo_segurida;
        targeta.tipo_documento = tipo_documento;
        targeta.numero_documento = numero_documento;
 
       
    
        // Validate
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(targeta, validationOpt);
        if (errors.length > 0) {
          return res.status(409).json(errors);
        }
    
        // TODO: HASH PASSWORD
    
        const targetaRepository = getRepository(Targetas);
        try {
        
          await targetaRepository.save(targeta);
         
        } catch (e) {
          return res.status(400).json({ message: 'targeta not create' });
        }
        
        // All ok
        res.send('targeta created');
      };

      static edit = async (req: Request, res: Response) => {
       let targeta: Targetas;
        const { id } = req.params;
        const { nombre_targeta, nombre_y_apellido,tipo_targeta, fecha_vencimiento, codigo_segurida, tipo_documento, numero_documento } = req.body;
    
        const targetaRepository = getRepository(Targetas);
        // Try get user
        try {
          targeta = await targetaRepository.findOneOrFail(id);
          targeta.nombre_targeta = nombre_targeta;
          targeta.nombre_y_apellido = nombre_y_apellido ;
          targeta.tipo_targeta = tipo_targeta;
          targeta.fecha_vencimiento = fecha_vencimiento;
          targeta.codigo_segurida = codigo_segurida;
          targeta.tipo_documento = tipo_documento;
          targeta.numero_documento = numero_documento;
          
        } catch (e) {
          return res.status(404).json({ message: 'targeta not found' });
        }
        const validationOpt = { validationError: { target: false, value: false } };
        const errors = await validate(targeta, validationOpt);
    
        if (errors.length > 0) {
          return res.status(400).json(errors);
        }
    
        // Try to save user
        try {
          await targetaRepository.save(targeta);
        } catch (e) {
          return res.status(409).json({ message: 'targeta not Edit' });
        }
    
        res.status(201).json({ message: 'targeta update' });
      };


      static delete = async (req: Request, res: Response) => {
        const { id } = req.params;
        const targetaRepository = getRepository(Targetas);
        let targeta: Targetas;
    
        try {
          targeta = await targetaRepository.findOneOrFail(id);
        } catch (e) {
          return res.status(404).json({ message: 'targeta not found' });
        }
    
        // Remove user
        targetaRepository.delete(id);
        res.status(201).json({ message: ' targeta deleted' });
      };
    

    
    
    


}


export default TargetaController;