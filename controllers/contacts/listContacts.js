const { Contact } = require('../../models')

const listContacts = async (req, res) => {
  // console.log(req.query)
  const { page = 1, limit = 20 } = req.query
  const skip = (page - 1) * limit
  const { _id } = req.user
  const contacts = await Contact.find({ owner: _id }, '_id contsct owner', { skip, limit: +limit }).populate('owner', 'email')
  res.json({
    status: 'success',
    code: 200,
    data: {
      contacts
    }
  })
}

module.exports = listContacts
