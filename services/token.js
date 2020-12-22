const jwt = require('jsonwebtoken');
const models = require('../models');

const checkToken = async (token) =>{
        let localID = null;
        try {
                const id = token.decode(token);
                localID = id;
        } catch (error) {
                
        }
        const user = await models.Usuario.findOne({where: {
                id: localID,
                estado: 1
        }});
        if(user){
                const token = encode(user);
                return {
                        token,
                        rol: user.rol
                }
        }else{
                return false
        }
}

module.exports = {
        //encode: async(user)=>{
        encode: async(id,rol,nombre,email)=>{
                const token = jwt.sign({
                        /* id: user.id,
                        nombre: user.nombre,
                        email: user.email,
                        rol: user.rol,
                        estado: user.estado
                },'config.secret', {
                        expiresIn: 86400,
                }
                ); */
                        id: id,
                        rol: rol,
                        nombre: nombre,
                        email: email
                }, 'secretKeyToGenerateToken', {
                        expiresIn: '1d'
                });
                return token;
        },
        decode: async(token)=>{
                try {
                        const id = await jwt.verify(token, 'config.secret')
                        const user = await models.Usuario.findOne({where: {
                                id: id,
                                estado: 1
                        }});
                        if(user){
                                return user;
                        }else{
                                return false;
                        }
                } catch (error) {
                        const newToken = await checkToken(token);
                        return newToken
                }
        }
}