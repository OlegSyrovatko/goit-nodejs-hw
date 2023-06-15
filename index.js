console.log("Wellcome");

const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require('./contacts.js');





// Get contact by ID
// getContactById('10');

// Remove a contact
// removeContact('10');

// Add a new contact
addContact('333', '3@example.com', '(123) 333-333');
// listContacts();