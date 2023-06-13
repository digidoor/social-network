const router = require('express').Router();
const { User } = require('../../models');

// use the "older" controller method for the user for refernce
router.get('/', async (req, res) => // get all users
{
	try
	{
		const users = await User.find()
			.select('-__v')
			.populate('thoughts');
		res.json(users);
	} catch (error) { res.status(500).json(error); }
});

router.get('/:userId', async (req, res) => // get a single user
{
	try
	{
		const user = await User.findOne({ _id: req.params.userId })
			.select('-__v') // I think this refers to the newest version of the object
			.populate('friends')
			.populate('thoughts');
			// is there a way to get reaction count on the getUsers query? yes, line 11
		res.json(user);
	} catch (error) { res.status(500).json(error); }
});

router.post('/', async (req, res) => // create a new user
{
	try
	{
		const user = await User.create(req.body);
		res.json(user);
	} catch (error) { res.status(500).json(error); }
});

router.put('/:userId', async (req, res) => // update a single user
{
	try
	{
		//const userold = await User.findOne({ _id: req.params.userId });
		const user = await User.findOneAndUpdate(
			{ _id: req.params.userId },
			//{ $set: { ...userold, ...req.body } }, // this doesn't work for some reason
			{ $set: req.body },
			{ new: true, runValidators: true },) // return the new version
			.select('-__v');
		
		return res.json(user);
	} catch (error) { res.status(500).json(error); }
});

			

module.exports = router;