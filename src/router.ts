import { Router} from 'express'
import {body} from 'express-validator'
import {createProduct} from './handlers/product'

const router = Router()

router.get('/', (req, res) => {

    res.json('Desde GET')
 })
 
 router.post('/', 
    // Validacion  
    body('name')
        .notEmpty().withMessage('El nombre de producto no puede ir vacio'),
        
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no valido'),
        


    createProduct
)
 
  router.put('/', (req, res) => {
 
     res.json('Desde PUT')
  })
 
  router.patch('/', (req, res) => {
 
     res.json('Desde PATCH')
  })
 
  router.delete('/', (req, res) => {
 
     res.json('Desde DELETE')
  })
 
  export default router