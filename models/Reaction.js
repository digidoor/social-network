const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
{
	reactionId: { //I don't think this prop needs to exist; I think it's a mistake
		type: Schema.Types.ObjectId, //but I don't have enough time to test it right now
		default: () => new Types.ObjectId() //Seems better to just use the builtin _id
	},
	reactionBody: {
		type: String,
		required: true,
		maxLength: [ 280, 'Must be no more than 280 chars, got {VALUE}.'],
	},
	username: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: time => dateFormat(time),
	}
},
{
	toJSON: { virtuals: true},
	id: false
});

module.exports = reactionSchema;