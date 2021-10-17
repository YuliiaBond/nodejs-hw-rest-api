const express = require('express')

const contactsOperations = require('../../model/index')

const router = express.Router()

router.get('/', async (req, res) => {
  const result = await contactsOperations.listContacts()
  res.json(result)
})

// router.get('/', async (req, res, next) => {
//   res.json({ message: 'template message' })
// })

router.get('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.post('/', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.delete('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

router.patch('/:contactId', async (req, res, next) => {
  res.json({ message: 'template message' })
})

module.exports = router
