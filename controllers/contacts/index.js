const listContacts = require('./listContacts')
const getContactById = require('./getContactById')
const addContact = require('./addContact')
const updateById = require('./updateById')
const updateStatusContact = require('./updateStatusContact')
const removeContact = require('./removeContact')

module.exports = {
  listContacts,
  getContactById,
  addContact,
  updateById,
  updateStatusContact,
  removeContact
}
