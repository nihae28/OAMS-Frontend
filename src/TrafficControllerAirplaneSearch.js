import { render } from "@testing-library/react";
import React from "react";
import {
    FormControl,
    FormGroup,
    Button,
    Form,
    Table, striped, bordered, hover, Container, Row, Col, xs
} from 'react-bootstrap';
import './TrafficControllerExamDdetails.css';

export default class TrafficControllerAirplaneSearch extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            planeNumber: "1001",
            planes: [],
        }
    }

    render() {
        return (
        <Container>
            <Row>
                <Col></Col>
                <Col xs={6}>
            <Form id="userform" onSubmit={this.formHandler}>
                <Form.Group className="mb-3" controlId="planeNumber">
                    <Form.Label>Enter Plane Number</Form.Label>
                    <Form.Control type="number"  name="airplane" value={this.state.planeNumber} onChange={this.inputChangeHandler}/>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Search
                </Button>
            </Form>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>Registration Number</th>
                        <th>Model Number</th>
                        <th>Capacity</th>
                        <th>Weight</th>
                    </tr>
                </thead>
                <tbody>
                    <this.PlaneTableRow planes={this.state.planes}></this.PlaneTableRow>
                </tbody>
            </Table>
            </Col>
            <Col></Col>
            </Row>
        </Container>    
    )}

    PlaneTableRow(props) {
        const planes = props.planes || [];
        const listItems = planes.map((plane) => <tr>
            <td>{plane.regNo}</td>
            <td>{plane.modelNo}</td>
            <td>{plane.capacity}</td>
            <td>{plane.weight}</td>
        </tr>
        )
        return listItems;
    }
    inputChangeHandler = e => {
        this.setState({
            planeNumber: e.target.value
        });
    }
    formHandler = e => {
        let x = this.state.planeNumber;
        e.preventDefault();
        fetch(`/plane-controller/getPlane/${x}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then((res) => res.json())
        .then((data) => {
            console.log(data);
            this.setState({planes : data});
        })
    }
}