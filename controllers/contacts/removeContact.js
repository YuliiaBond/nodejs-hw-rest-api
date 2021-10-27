const { NotFound } = require('http-errors')
const { Contact } = require('../../models')

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

module.exports = removeContact
