const fs = require('fs/promises')
const path = require('path')
const contacts = require('./contacts.json')

const contactsPath = path.join(__dirname, 'contacts.json')

const updateContact = async (contacts) => {
  const newContact = await fs.writeFile(contactsPath, JSON.stringify(contacts))
  return newContact
}

const listContacts = async() => contacts

// async function listContacts() {
//   const data = await fs.readFile(contactsPath)
//   const contacts = JSON.parse(data)
//   return contacts
// }

async function getContactById(id) {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === id)
  // const contact = contacts.find(item => item.id === id)
  if (idx === -1) {
    return null
  }
  // if (!contact) {
  //   return null
  // }
  return contacts[idx]
  // return contact
};

async function removeContact(id) {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === id)
  if (idx === -1) {
    return null
  }
  contacts.splice(idx, 1)
  await updateContact(contacts)
  return true
};

async function addContact(data) {
  const contacts = await listContacts()
  const newId = contacts.length + 1
  const newContact = { id: newId, ...data }
  // console.log(newContact)
  contacts.push(newContact)
  await updateContact(contacts)
  return contacts
};

const updateById = async(id, data) => {
  const contacts = await listContacts()
  const idx = contacts.findIndex(item => item.id === id)
  if (idx === -1) {
    return null
  }
  contacts[idx] = { ...contacts[idx], ...data }
  await updateContact(contacts)
  return contacts[idx]
}

module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
  updateById,
}
