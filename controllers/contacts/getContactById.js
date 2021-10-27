const { NotFound } = require('http-errors')
const { Contact } = require('../../models')

const getContactById = async (req, res) => {
  const { id } = req.params
  const contact = await Contact.findById(id, '_id name email phone favorite')
  // const contact = await Contact.findOne({ _id: id }, '_id name email phone favorite')
  if (!contact) {
    throw new NotFound(`Contact with id=${id} not found`)
  }
  res.json(contact)
}
module.exports = getContactById
