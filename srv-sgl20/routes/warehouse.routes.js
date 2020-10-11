let router = require('express').Router();
let Warehouse = require('../controller/warehouse.model');

router.get('/warehouse-list', Warehouse.fetchAll)
router.get('/create-warehouse', Warehouse.create)
router.post('/create-warehouse', Warehouse.create)
router.get('/edit-warehouse/:id', Warehouse.update)
router.post('/edit-warehouse/:id', Warehouse.update)
router.get('/disable-warehouse/:id', Warehouse.disable)
router.get('/enable-warehouse/:id', Warehouse.enable)

module.exports = router;