let router = require('express').Router();
let Warehouse = require('../controller/warehouse.model');

router.get('/warehouse-list', Warehouse.fetchAll)


module.exports = router;