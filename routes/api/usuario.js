const router = require('express').Router();
const userController = require('../../controllers/UserController.js');
const auth = require('../../middlewares/auth')

/* router.get('/list', auth.verificarAdministrador, userController.list);
router.post('/add', auth.verificarAdministrador, userController.add);
router.put('/update', auth.verificarAdministrador, userController.update);
router.put('/activate', auth.verificarAdministrador, userController.activate);
router.put('/deactivate', auth.verificarAdministrador, userController.deactivate); */

router.get('/list', userController.list);
router.post('/add', userController.add);
router.put('/update', userController.update);
router.put('/activate', userController.activate);
router.put('/deactivate', userController.deactivate);


router.post('/login', userController.login);

module.exports=router;