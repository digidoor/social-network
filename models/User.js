const { Schema, model } = require('mongoose');

const userSchema = new Schema(
{
    username: {
		type: String,
		required: true,
		unique: true,
		trim: true,
	},
	email: {
		type: String,
		required: true,
		unique: true,
		match: [/[\w!#$%&'*+\/=?^`{|}~-]+(\.[\w!#$%&'*+\/=?^`{|}~-])*@(([a-zA-Z]+[0-9]*|[0-9]+[a-zA-Z]+)\.)+[a-zA-Z]{1,63}/, 'Please use an actual email.'],
	},
	thoughts: [
	{
		type: Schema.Types.ObjectId,
		ref: 'Thought',
	}],
	friends: [
	{
		type: Schema.Types.ObjectId,
		ref: 'User',
	}],
},
{
	toJSON: {
		virtuals: true,
	},
	id: false,
});

userSchema.virtual('friendCount').get( function () { this.friends.length; } );

const User = model('User', userSchema);

module.exports = User;