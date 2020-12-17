const router = require('express').Router();
const userController = require('../../controllers/UserController.js');
const auth = require('../../middlewares/auth')

router.get('/list', auth.verificarAdministrador, userController.list);
router.post('/register', auth.verificarAdministrador, userController.register);
router.put('/update', auth.verificarAdministrador, userController.update);


router.post('/login', userController.login);

module.exports=router;