const router = require('express').Router();
const { User } = require('../models');

router.get('/', async (req, res) =>
{
	try
	{
		const users = await User.find();
		res.json(users);
	} catch (error) { res.status(500).json(error); }
});

router.post('/:userId', async (req, res) =>
{
	try
	{
		const x = 0;
	} catch (error) { res.status(500).json(error); }
});

module.exports = router;