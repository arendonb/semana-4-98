const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../models');
const tokenServices = require('../services/token')

exports.login = async(req, res, next) => {
        try {
                const user= await db.Usuario.findOne({where: {email: req.body.email}});
                if(user){
                        const passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
                        if(passwordIsValid){
                                const token = await tokenServices.encode(user);
                                res.status(200).send({
                                        auth: true,
                                        tokenReturn: token 
                                })
                        }else{
                                res.status(401).json({
                                        error: 'Error en el usuario o contraseña'
                                })
                        }
                } else {
                        res.status(404).json({
                                error: 'Error en el usuario o contraseña'
                        })
                }
        } catch (error) {
                res.status(500).send({
                                message: 'Error->'
                })
                next(error);
        }
};
                                 
exports.add = async (req, res, next) => {
        try {
                const user = await db.Usuario.findOne({where: {email: req.body.email}});
                if(user){
                        res.status(409).send({
                                message: 'Sorry your request has a conflict with our system state, maybe the email is already bad'
                        })
                } else{
                        req.body.password = bcrypt.hashSync(req.body.password, 12);
                        const user = await db.Usuario.create(req.body);
                        res.status(200).json(user)
                }
                
        } catch (error) {
                res.status(500).send({
                        message: 'Error=>'
                })
                next(error);                    
        }
};
exports.list = async (req, res, next) => {
        try {
                const user = await db.Usuario.findAll();
                if(user){

                        res.status(200).json(user);
                }else{
                        res.status(404).send({
                                message: 'There is not user in the system'
                        })
                }                            
        } catch (error) {
                res.status(500).send({
                        message: 'Error!!'
                })
                next(error);

        }
};

exports.update = async(req, res, next) =>{
        try {
                const user = await db.Usuario.findOne({where: {email: req.body.email}});
                if(user){
                        const user = await db.Usuario.update({nombre: req.body.nombre, password: req.body.password, email: req.body.email, rol: req.body.rol, tipo_documento: req.body.tipo_documento, num_documento: req.body.num_documento, direccion: req.body.direccion, telefono: req.body.telefono},
                                {
                                where: {
                                        email: req.body.email
                                },
                        });
                res.status(200).json(user);                
                }else{
                        res.status(404).send({
                                message: 'user not found.'
                        })
                }
        }catch (error) {
                res.status(500).send({
                        message: 'Error.'
                });
                next(error);
        }        
}

exports.activate = async(req, res, next) =>{
        try {
            const register = await db.Usuario.update({estado: 1},
                    {
                    where: {
                        id: req.body.id
                    },
                });
                res.status(200).json(register);                
        }catch (error) {
                res.status(500).send({
                    message: 'Error.'
                });
                next(error);
        }        
}

exports.deactivate = async(req, res, next) =>{
        try {
            const register = await db.Usuario.update({estado: 0},
                    {
                    where: {
                        id: req.body.id
                    },
                });
                res.status(200).json(register);                
        }catch (error) {
                res.status(500).send({
                    message: 'Error.'
                });
                next(error);
        }        
}