const { Router } = require("express");
const { getAllProducts, getSingleProduct, createProduct, updateProduct, deleteProduct } = require("../controller/productsController");

const router = Router()

router.get('/all',getAllProducts)
router.get('/:id',getSingleProduct)
router.post('/add',createProduct)
router.patch('/update/:id',updateProduct)
router.delete('/delete/:id',deleteProduct)

module.exports = router