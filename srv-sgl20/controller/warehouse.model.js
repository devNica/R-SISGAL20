let db = require('../models');
let ws = db.warehouse;

const Warehouse = (data)=>{
    this.idwarehouse = data.warehouse;
    this.warehouse = data.warehouse;
    this.isActive = data.isActive;
}

Warehouse.fetchAll = (req, res)=>{
    ws.findAll({raw: true, plain: false})
    .then(result=>{
        let data=result.map((e,i)=>{
            return {
                id: e.idwarehouse,
                warehouse: e.warehouse,
                state: e.isActive === 1 ? 'ACTIVE' : 'INACTIVE'
            }
        })
        console.log(data)
        res.render('templates/view-warehouses', {warehouses: data})
        
    })
}


module.exports = Warehouse;