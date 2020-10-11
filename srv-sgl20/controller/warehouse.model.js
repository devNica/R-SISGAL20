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
        
        res.render('templates/view-warehouses', {warehouses: data})
        
    })
}

Warehouse.create = (req, res)=>{
    if(req.method === 'GET'){
        res.render('templates/create-warehouse')
    }
    if(req.method === 'POST'){
        
        ws.create({warehouse: req.body.warehouse, isActive: 1})
        .then(result =>{
            res.redirect('/sisgal/api/v1.0/warehouse-list')
        })
        .catch(error => console.log(error))
    }
    
}

module.exports = Warehouse;