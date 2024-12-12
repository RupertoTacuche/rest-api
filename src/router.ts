import { Router} from 'express'
import {body} from 'express-validator'
import {createProduct, getProducts} from './handlers/product'
import { handleInputErrors } from './middleware'

const router = Router()

router.get('/', getProducts)
 
 router.post('/', 
    // Validacion  
    body('name')
        .notEmpty().withMessage('El nombre de producto no puede ir vacio'),
        
    body('price')
        .isNumeric().withMessage('Valor no válido')
        .notEmpty().withMessage('El precio de producto no puede ir vacio')
        .custom(value => value > 0).withMessage('Precio no valido'),


    handleInputErrors,
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
 
  router.delete('/', (req, res) => {
 
     res.json('Desde DELETE')
  })
 
  export default router