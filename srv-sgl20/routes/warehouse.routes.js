let router = require('express').Router();
let Warehouse = require('../controller/warehouse.model');

router.get('/warehouse-list', Warehouse.fetchAll)
router.get('/create-warehouse', Warehouse.create)
router.post('/create-warehouse', Warehouse.create)


module.exports = router;