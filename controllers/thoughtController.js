const { User, Thought } = require('../models');

module.exports = {
	async getThoughts(req, res)
	{
		try
		{
			console.log("\n\nwe're in getThoughts\n\n");
			const thoughts = await Thought.find();
			console.log("const thoughts: ", thoughts, "\n\n");
			return res.json(thoughts);
		} catch (error) { res.status(500).json(error); }
	},
	async getThought(req, res)
	{
		try
		{
			const thought = await Thought.findOne({ _id: req.params.thoughtId });
			return res.json(thought);
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
};