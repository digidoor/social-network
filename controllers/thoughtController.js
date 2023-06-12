const { User, Thought } = require('../models');

module.exports = {
	async getThoughts(req, res)
	{
		try 
		{
			const thoughts = await Thought.find();
			res.json(thoughts);
		} catch (error) { res.status(500).json(error); }
	},
	async makeThought(req, res)
	{
		try
		{
			const thought = await Thought.create(req.body);
			const user = await User.findOneAndUpdate(
				{ _id: req.body.userId },
				{ $push: { thoughts: thought._id } },
				{ new: true }, // return the new version
			);

			if(!user)
				return res.status(404).json("Can a thought exist without someone to think it?");
			return res.json("Someone had a thought.");
			// I don't think prev line NEEDS a return but looks weird without it
		} catch (error) { res.status(500).json(error); }
	}
}