const express = require('express');
const router = express.Router();
const { getGoals, setGoals } = require('../controllers/goalController');

router.get('/', getGoals);

router.post('/', setGoals);

router.put('/:id', (req, res) => {
	res.status(300).send({ express: 'update goals' });
});

router.delete('/:id', (req, res) => {
	res.status(300).send({ express: 'delete goals' });
});

module.exports = router;
