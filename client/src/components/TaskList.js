import React from "react";
import {Button, Card, Col, FormControl, InputGroup, Row} from "react-bootstrap";
import axios from "axios";

class TaskList extends React.Component{
	state = {
		variant: "info",
		task: "", //current user entered task
		taskList: [], //hold all my tasks
		responseGet: ""
	}

	componentDidMount() {
		this.getTaskList();
	}

	getTaskList = () => {
		axios.get('http://localhost:4000/tasks')
			.then((response)  => response.data)
			.then(response => this.setState({taskList: response}))
	}

	onDoneClick = () => {
		console.log('inside done')
	}
	onDeleteClick = taskId => {
		console.log('inside delete');
		axios.post('http://localhost:4000/deleteTask/', {
			taskId: taskId
		});
	}
	onSubmitClick = () => {
		console.log('[Submit]');
		axios.post('http://localhost:4000/addTask', {
			task: this.state.task
		})
		.then((response)  => response.data)
		.then(response => this.setState({responseGet: response}))
		console.log('--> responseGet:'+this.state.responseGet);
		this.getTaskList();
	}

	render(){
		console.log(this.state.taskList)
		return(
			<div>
				<Row>
					{/* - - - [Title] - - - */}
					<div>
						<h1>TaskList</h1>
					</div>
					<hr/>

					{/* - - - [Input] - - - */}
					<div>
						<Row>
							<Col></Col>
							<Col>
								<InputGroup className="mb-3">
									<FormControl
										placeholder="your task ..."
										aria-label="your task ..."
										aria-describedby="basic-addon2"
										value={this.state.task}
										onChange={e => this.setState({
											task: e.target.value
										})}
									/>
									<Button variant="outline-success" id="button-addon2" onClick={
										() => this.onSubmitClick()
									}>Submit</Button>
								</InputGroup>
							</Col>
							<Col></Col>
						</Row>
					</div>
					<hr/>

					{/* - - - [Cards] - - - */}
					{
						this.state.taskList.map((task) => (
							<Card
								bg={this.state.variant.toLowerCase()}
								key={this.state.variant}
								text={this.state.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
								style={{ width: '18rem' }}
								className="mb-2"
							>
								<Card.Header>#{task.id} - {task.task}</Card.Header>
								<Card.Body>
									<Card.Title>Primary Card Title</Card.Title>
									<Card.Text>
										Some quick example text to build on the card title and make up the bulk
										of the card's content.
									</Card.Text>
									<Button variant="success" onClick={
										() => this.onDoneClick()
									}>Done</Button>
									<Button variant="danger" onClick={
										() => this.onDeleteClick(task.id)
									}>Delete</Button>
								</Card.Body>
							</Card>
						))
					}
				</Row>
			</div>
		)
	}
}

export default TaskList
