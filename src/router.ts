import { Router} from 'express'
import {body, param} from 'express-validator'
import {createProduct, getProductById, getProducts, updateAvailability, updateProduct} from './handlers/product'
import { handleInputErrors } from './middleware'


const router = Router()

router.get('/', getProducts)
router.get('/:id', 
   param('id').isInt().withMessage('ID no valido'),
   handleInputErrors,
   getProductById
)
 
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
 
  router.put('/:id', 
       // Validacion  
   body('name')
       .notEmpty().withMessage('El nombre de producto no puede ir vacio'),
   body('price')
       .isNumeric().withMessage('Valor no válido')
       .notEmpty().withMessage('El precio de producto no puede ir vacio')
       .custom(value => value > 0).withMessage('Precio no valido'),
   body('availability')
      .isBoolean().withMessage('Disponibilidad no válida'),

   handleInputErrors,
   updateProduct)
 
  router.patch('/:id', updateAvailability)
  
  router.delete('/', (req, res) => {
 
     res.json('Desde DELETE')
  })
 

  export default router