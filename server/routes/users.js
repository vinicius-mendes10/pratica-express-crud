var express = require('express');
const controller = require("../controllers/UsersController")
var router = express.Router();

router.get('/', controller.index);

router.get('/adicionar', controller.add);
router.post('/adicionar', controller.create);

router.get('/:id/editar', controller.edit);
router.put('/:id/editar', controller.update);

router.get('/:id/apagar', controller.exclude);
router.delete('/:id/apagar', controller.delete);

router.get('/:id', controller.show);

module.exports = router;
