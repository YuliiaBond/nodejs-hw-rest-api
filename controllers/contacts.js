const { NotFound } = require('http-errors')

const { Contact } = require('../models')

const listContacts = async (req, res) => {
  const contacts = await Contact.find({}, '_id name email phone favorite')
  res.json({
    status: 'success',
    code: 200,
    data: {
      contacts
    }
  })
}

const getContactById = async (req, res) => {
  const { id } = req.params
  const contact = await Contact.findById(id, '_id name email phone favorite')
  // const contact = await Contact.findOne({ _id: id }, '_id name email phone favorite')
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json(contact)
}

const addContact = async (req, res) => {
  const contact = await Contact.create(req.body)
  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      contact
    }
  })
}

const updateById = async (req, res) => {
  const { id } = req.params
  const result = await Contact.findByIdAndUpdate(id, req.body, { new: true })
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

const updateStatusContact = async (req, res) => {
  if (req.body.favorite === undefined) {
    res.status(400).json({
      status: 'error',
      code: 404,
      message: 'Missing field favorite'
    })
    return
  }
  const { id } = req.params
  const { favorite } = req.body
  const result = await Contact.findByIdAndUpdate(id, { favorite }, { new: true })
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    data: {
      result
    }
  })
}

const removeContact = async (req, res, next) => {
  const { id } = req.params
  const result = await Contact.findByIdAndDelete(id)
  if (!result) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json({
    status: 'success',
    code: 200,
    message: 'Success delete'
  })
}

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateById,
  updateStatusContact,
  removeContact
}
