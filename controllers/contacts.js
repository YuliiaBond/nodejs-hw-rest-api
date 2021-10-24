// const { NotFound } = require('http-errors')

const { Contact } = require('../models')

// const listContacts = async (req, res, next) => {
//   const contacts = await contactsOperations.listContacts()
//   res.json({
//     status: 'success',
//     code: 200,
//     data: {
//       contacts
//     }
//   })
// }

// const getContactById = async (req, res, next) => {
//   const { id } = req.params
//   const contact = await contactsOperations.getContactById(Number(id))
//   if (!contact) {
//     throw new NotFound(`Contact with id=${id} not found`)
//   }
//   res.json(contact)
// }

const addContact = async (req, res) => {
  const result = await Contact.create(req.body)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      result
    }
  })
}

// const updateById = async (req, res, next) => {
//   const { id } = req.params
//   const result = await contactsOperations.updateById(Number(id), req.body)
//   if (!result) {
//     throw new NotFound(`Contact with id=${id} not found`)
//   }
//   res.json({
//     status: 'success',
//     code: 200,
//     data: {
//       result
//     }
//   })
// }

// const removeContact = async (req, res, next) => {
//   const { id } = req.params
//   const result = await contactsOperations.removeContact(Number(id))
//   if (!result) {
//     throw new NotFound(`Contact with id=${id} not found`)
//   }
//   res.json({
//     status: 'success',
//     code: 200,
//     message: 'Success delete'
//   })
// }

module.exports = {
  // listContacts,
  // getContactById,
  addContact,
  // updateById,
  // removeContact
}
