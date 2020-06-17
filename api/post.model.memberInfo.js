const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let MemberInfo = new Schema({
  username: {
    type: String
  },
  password: {
    type: String
  },
  telegramUsernames:[{
    type: String
  }]
},{
    collection: 'userCredential'
});

module.exports = mongoose.model('Post', MemberInfo);