//description: get all goals
//route: GET /api/goals
//access: private

const getGoals = (req, res) => {
	res.status(200).send({
		goals: 'get goals',
	});
};

//description: get all goals
//route: POST /api/goals
//access: private

const setGoals = (req, res) => {
	res.status(200).send({
		goals: 'set goals',
	});
};

//description: get all goals
//route: PUT /api/goals/:id
//access: private

const updateGoals = (req, res) => {
	res.status(200).send({
		goals: 'get goals',
	});
};

//description: get all goals
//route: DELETE /api/goals:id
//access: private

const deleteGoals = (req, res) => {
	res.status(200).send({
		goals: 'get goals',
	});
};

module.exports = {
	getGoals,
	setGoals,
};
