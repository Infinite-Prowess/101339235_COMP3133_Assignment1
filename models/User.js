const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    username: { 
        type: String,
        required: [true, 'Please enter username'],
        unique: [true, "Duplicate Username Not allowed"],
        trim: true
    },
    email: {
        type: String,
        required: true,
        //index: true, //Optional if unique is defined
        unique: [true, "Duplicate Email Not allowed"],
        trim: true,
        uppercase: true,
        //minlength:10,
        //maxlength: 50,
        //Custom validation
        validate: function(value) {
            var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
            return emailRegex.test(value);
        }
    },
    password: {
        type: String,
        required: [true, 'Please enter password'],
        trim: true
    }
});

const User = mongoose.model("User", UserSchema);
module.exports = User;