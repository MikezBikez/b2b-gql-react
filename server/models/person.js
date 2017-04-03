const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Every b2b person has the following:
const PersonSchema = new Schema({
  name: String,
  surname: String,
  avatar: String,
  lastAttended: String,
});

mongoose.model('person', PersonSchema);
