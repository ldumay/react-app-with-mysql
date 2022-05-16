import React from "react";
import {Button, Card, Col, FormControl, InputGroup, Row} from "react-bootstrap";

class TaskList extends React.Component{
	state = {
		variant: "info",
		task:""
	}

	onDoneClick = () => {
		console.log('inside done')
	}
	onDeleteClick = () => {
		console.log('inside delete')
	}
	onSubmitClick = () => {
		console.log('inside onsubmit')
	}

	render(){
		return(
			<div>
				<Row>
					<div>
						<h1>TaskList</h1>
					</div>
					<hr/>
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
					<Col>
						<Card
							bg={this.state.variant.toLowerCase()}
							key={this.state.variant}
							text={this.state.variant.toLowerCase() === 'light' ? 'dark' : 'white'}
							style={{ width: '18rem' }}
							className="mb-2"
						>
							<Card.Header>Header</Card.Header>
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
									() => this.onDeleteClick()
								}>Delete</Button>
							</Card.Body>
						</Card>
					</Col>
				</Row>
			</div>
		)
	}
}

export default TaskList
