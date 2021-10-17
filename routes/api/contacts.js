const express = require('express')
const { NotFound, BadRequest } = require('http-errors')
const Joi = require('joi')

const contactsOperations = require('../../model/index')

const joiSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required()
})
const router = express.Router()

router.get('/', async (req, res, next) => {
  try {
    const contacts = await contactsOperations.listContacts()
    res.json({
      status: 'success',
      code: 200,
      data: {
        contacts
      }
    })
  } catch (error) {
    next(error)
  }
})

router.get('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const contact = await contactsOperations.getContactById(Number(id))
    if (!contact) {
      throw new NotFound(`Product with id=${id} not found`)
      // const error = new Error(`Product with id=${contactId} not found`)
      // error.status = 404
      // throw error

      // res.status(404).json({
      //   status: 'error',
      //   code: 404,
      //   message: `Product with id=${contactId} not found`
      // })
      // return
    }
    res.json(contact)
  } catch (error) {
    next(error)
  }
})

router.post('/', async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body)
    if (error) {
      throw new BadRequest(error.message)
    }
    const result = await contactsOperations.addContact(req.body)
    res.status(201).json({
      status: 'success',
      code: 201,
      data: {
        result
      }
    })
  } catch (error) {
    next(error)
  }
})

router.put('/:id', async (req, res, next) => {
  try {
    const { error } = joiSchema.validate(req.body)
    if (error) {
      throw new BadRequest(error.message)
    }
    const { id } = req.params
    const result = await contactsOperations.updateById(Number(id), req.body)
    if (!result) {
      throw new NotFound(`Product with id=${id} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      data: {
        result
      }
    })
  } catch (error) {

  }
})

router.delete('/:id', async (req, res, next) => {
  try {
    const { id } = req.params
    const result = await contactsOperations.removeContact(Number(id))
    if (!result) {
      throw new NotFound(`Product with id=${id} not found`)
    }
    res.json({
      status: 'success',
      code: 200,
      message: 'Success delete'
    })
  } catch (error) {
    next(error)
  }
})

// router.get('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.get('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.post('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.delete('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

// router.patch('/:contactId', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

module.exports = router
