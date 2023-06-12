const router = require('express').Router();
const { User } = require('../../models');

// use the "older" controller method for the user for refernce
router.get('/', async (req, res) => // get all users
{
	try
	{
		const users = await User.find();
		res.json(users);
	} catch (error) { res.status(500).json(error); }
});

router.get('/:userId', async (req, res) =>
{
	try
	{
		const user = await User.findOne({ _id: req.params.userId })
			.select('-__v') // I think this refers to the newest version of the object
			.populate('friends')
			.populate('thoughts');
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

module.exports = router;