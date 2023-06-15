
const fs = require('fs').promises;
const path = require('path');

// const contacts = require('./db/contacts.json');
//     console.log(contacts);
// const contactsPath = "./db/contacts.json";
const contactsPath = path.join(__dirname, 'db', 'contacts.json');


function generateRandomId(length) {
  let result = '';
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    result += characters.charAt(randomIndex);
  }

  return result;
}
async function listContacts() {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);
    console.log(contacts);
  } catch (err) {
    console.error(err);
  }
}

async function getContactById(contactId) {
  try {
    const data = await fs.readFile(contactsPath, 'utf8');
    const contacts = JSON.parse(data);
    const contact = contacts.find((c) => c.id === contactId);
    console.log(contact);
  } catch (err) {
    console.error(err);
  }
}

async function removeContact(contactId) {
  try {
    let data = await fs.readFile(contactsPath, 'utf8');
    let contacts = JSON.parse(data);
    contacts = contacts.filter((c) => c.id !== contactId);
    await fs.writeFile(contactsPath, JSON.stringify(contacts), 'utf8');
    console.log('Contact removed successfully');
  } catch (err) {
    console.error(err);
  }
}

async function addContact(name, email, phone) {
  try {
    let data = await fs.readFile(contactsPath, 'utf8');
    let contacts = JSON.parse(data);
    const newContact = {
      id: generateRandomId(20),
      name,
      email,
      phone,
    };
    contacts.push(newContact);
    await fs.writeFile(contactsPath, JSON.stringify(contacts), 'utf8');
    console.log('Contact added successfully');
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