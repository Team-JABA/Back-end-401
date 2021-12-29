'use strict';
const express = require('express');
const router = express.Router();
const { incident, user } = require('../model');
const Collection = require('../model/lib/Collection');
const modelWare = require('../middleware/modelWare');

const modelMap = {
	incident: new Collection(incident),
	user: new Collection(user),
};

router.use('/:model', modelWare, (req, res, next) => {
	const model = modelMap[req.params.model];
	req.model = model;
	next();
});

router.post('/:model', async (req, res, next) => {
	const model = req.model;
	const json = req.body;
	console.log(json, 'this is the request console log --------------->>>>>>>>');
	let newRecord = await model.create(json);
	console.log(newRecord, 'this is the new record log');
	res.status(201).send(newRecord);
});

router.get('/:model', async (req, res, next) => {
	const model = req.model;
	let records = await model.read();
	res.status(200).send(records);
});

router.get('/:model/:id', async (req, res, next) => {
	const model = req.model;
	const id = req.params.id;
	let record = await model.read(id);
	res.status(200).send(record);
});

router.put('/:model/:id', async (req, res, next) => {
	console.log('put');
	const model = req.model;
	const id = req.params.id;
	const json = req.body;
	console.log(model.model);
	if (model.model === user) {
		console.log('in the if on modelRoute');
		let updatedRecord = await model.updateUser(id, json);
		res.status(200).send(updatedRecord);
	} else {
		let updatedRecord = await model.update(id, json);
		res.status(200).send(updatedRecord);
	}
});

router.delete('/:model/:id', async (req, res, next) => {
	const model = req.model;
	const id = req.params.id;
	let deletedRecord = await model.delete(id);
	res.status(204).send(deletedRecord);
});

module.exports = router;
