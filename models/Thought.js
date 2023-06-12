const { Schema, model } = require('mongoose');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
{
	thoughtText: {
		type: String,
		require: true,
		minLength: [1, 'Must be at least 1 character.'],
		maxLength: [280, 'Must be no more than 280 chars, got {VALUE}.'],
	},
	createdAt: {
		type: Date,
		default: Date.now,
		get: time => dateFormat(time)
	},
	username: {
		type: String,
		required: true,
	},
	reactions: [reactionSchema]
},
{
	toJSON: {
		getters: true,
	},
	id: false,
});

thoughtSchema.virtual('reactionCount').get(function() { return this.reactions.length; });

const Thought = model('Thought', thoughtSchema);
	
module.exports = Thought;		