const product = require ('express').Router()
const { ControllerProduct } = require ('../controllers')
const adminAuth = require ('../middlewares/admin-authorization')

product.use(adminAuth)
product.post('/', ControllerProduct.post)
product.put('/:id', ControllerProduct.put)
product.delete('/:id', ControllerProduct.delete)


module.exports = product