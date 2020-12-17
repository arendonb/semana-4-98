const router = require('express').Router();
const articuloController = require('../../controllers/ArticuloController');
const auth = require('../../middlewares/auth')

/* router.get('/list', auth.verificarVendedor, articuloController.list);
router.post('/add', auth.verificarVendedor, articuloController.add);
router.put('/update', auth.verificarVendedor, articuloController.update);
router.put('/activate', auth.verificarVendedor, articuloController.activate);
router.put('/deactivate', auth.verificarVendedor, articuloController.deactivate); */

router.get('/list', articuloController.list);
router.post('/add', articuloController.add);
router.put('/update', articuloController.update);
router.put('/activate', articuloController.activate);
router.put('/deactivate', articuloController.deactivate);

module.exports=router;