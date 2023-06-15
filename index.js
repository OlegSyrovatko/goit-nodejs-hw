console.log("Wellcome");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts.js');



listContacts();

// Get contact by ID
// getContactById('10');

// Remove a contact
// removeContact('10');

// Add a new contact
// addContact('Oleg', 'oleg@example.com', '(123) 999-9999');