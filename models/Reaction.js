const { Schema, Types } = require('mongoose');

const reactionSchema = new Schema(
{
	reactionId: {
		type: Schema.Types.ObjectId,
		default: () => new Types.ObjectId()
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
	toJSON: { getters: true},
	id: false
});

module.exports = reactionSchema;