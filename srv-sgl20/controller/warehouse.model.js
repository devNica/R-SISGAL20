let db = require('../models');
let ws = db.warehouse;

const Warehouse = (data)=>{
    this.idwarehouse = data.warehouse;
    this.warehouse = data.warehouse;
    this.isActive = data.isActive;
}

Warehouse.fetchAll = (req, res)=>{
    ws.findAll()
    .then(result=>{
        res.render('templates/view-warehouses', {warehouses: result})
        //res.json({warehouses: result})
    })
}


module.exports = Warehouse;