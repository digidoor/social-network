const router = require('express').Router();
const { User } = require('../models');

router.get('/users', async (req, res) =>
{
	try
	{
		const users = await User.find();
		res.json(users);
	} catch (error) { res.status(500).json(error); }
});

module.exports = router;