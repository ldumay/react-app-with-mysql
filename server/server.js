const express = require('express');
const cors = require('cors');
const bodyParser = require("body-parser");
const connection = require('./db');

// - - - - [ Task - Server - Init ] - - - -
const app = express();
app.use(cors());
app.use(bodyParser.json())
app.listen(4000, () => {
	console.log('running on port 4000');
});

// - - - - [ Task - List ] - - - -
app.get('/tasks',(req,res)=>{
	console.log('[Tasks list]');
	//-
	const getQuery = "SELECT * FROM tasks";
	connection.query(getQuery, (err, response) => {
		if(err) {
			console.log(err);
		}
		else {
			console.log('--> OK');
			res.send(response);
		}
	})
});

// - - - - [ Task - Add ] - - - -
app.post('/addTask',(req,res)=>{
	console.log('[New task]');
	//-
	let task = req.body.task;
	console.log('--> New task: '+task);
	//-
	const addQuery = "INSERT INTO tasks (task) VALUES (\'"+task+"\')";
	connection.query(addQuery, (err) => {
		if(err) {
			console.log(err);
		}
		else{
			let message = '--> OK\nNew task has been added';
			console.log(message);
			res.send(message);
		}
	})
});

// - - - - [ Task - Delete ] - - - -
app.post('/deleteTask/',(req,res)=>{
	console.log('[Delete task]');
	//-
	let taskId = req.body.taskId;
	console.log('--> Delete task: '+taskId);
	//-
	const deleteQuery = "DELETE FROM tasks WHERE id="+taskId+"";
	connection.query(deleteQuery, (err) => {
		if(err) {
			console.log(err);
		}
		else{
			let message = '--> OK\nTask has been deleted';
			console.log(message);
			res.send(message);
		}
	})
});
