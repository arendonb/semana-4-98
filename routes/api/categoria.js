const router = require('express').Router();
const categoriaController = require('../../controllers/CategoriaController');
const auth = require('../../middlewares/auth')

/* router.get('/list', auth.verificarVendedor, categoriaController.list);
router.post('/add', auth.verificarVendedor, categoriaController.add);
router.put('/update', auth.verificarVendedor, categoriaController.update);
router.put('/activate', auth.verificarVendedor, categoriaController.activate);
router.put('/deactivate', auth.verificarVendedor, categoriaController.deactivate); */

router.get('/list', categoriaController.list);
router.post('/add', categoriaController.add);
router.put('/update', categoriaController.update);
router.put('/activate', categoriaController.activate);
router.put('/deactivate', categoriaController.deactivate);

module.exports=router;
