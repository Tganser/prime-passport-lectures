var mongoose = require('mongoose');
var Schema = mongoose.Schema;


// Mongoose Schema
var ItemSchema = new Schema({
    item: String,
    description: String,
    imageUrl: String,
    user: {type: Schema.Types.ObjectId, ref: 'User'}
});



// // Called before adding a new user to the DB. Encrypts password.
// UserSchema.pre('save', function(next) {
//     var user = this;
//
//     if(!user.isModified('password')) {
//       return next();
//     }
//
//     bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
//         if(err) {
//           return next(err);
//         }
//
//         bcrypt.hash(user.password, salt, function(err, hash) {
//             if(err) {
//               return next(err);
//             }
//
//             user.password = hash;
//             next();
//         });
//     });
// });
//
// // Used by login methods to compare login form password to DB password
// UserSchema.methods.comparePassword = function(candidatePassword, callback) {
//     // 'this' here refers to this instance of the User model
//     bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
//         if(err) {
//           return callback(err);
//         }
//
//         callback(null, isMatch);
//     });
// };


module.exports = mongoose.model('Item', ItemSchema);
