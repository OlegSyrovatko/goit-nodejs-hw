
const fs = require('fs').promises;
const path = require('path');
const { nanoid } = require('nanoid');

const contactsPath = path.join(__dirname, 'db', 'contacts.json');

async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    return contacts;
  } catch (err) {
    console.error(err);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath);
    const contacts = JSON.parse(data);
    const index = await contacts.findIndex((item) => item.id === contactId)
    if (index === -1) return null
    const contact = contacts.find((c) => c.id === contactId);
    return contact;
  } catch (err) {
    console.error(err);
  }
}

async function removeContact(contactId) {
  try {
    let data = await fs.readFile(contactsPath);
    let contacts = JSON.parse(data);
    const index = await contacts.findIndex((item) => item.id === contactId)
    if (index === -1) return null
    contacts = contacts.filter((c) => c.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return 'Contact removed successfully';
  } catch (err) {
    console.error(err);
  }
}

async function addContact(name, email, phone) {
  try {
    let data = await fs.readFile(contactsPath);
    let contacts = JSON.parse(data);
    const newContact = {
      id: nanoid(),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
    return 'Contact added successfully';
  } catch (err) {
    console.error(err);
  }
}
module.exports = {
  listContacts,
  getContactById,
  removeContact,
  addContact,
};