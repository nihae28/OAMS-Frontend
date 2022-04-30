import {
    Component
} from "react";
import {
    FormControl,
    FormGroup,
    Button,
    Form,
    Container, Row, Col
} from 'react-bootstrap';
import './TrafficControllerExamDdetails.css';

export default class TrafficControllerExamDetails extends Component {
    disableFutureDate = () => {
        const today = new Date();
        const dd = String(today.getDate()).padStart(2, "0");
        const mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
        const yyyy = today.getFullYear();
        return yyyy + "-" + mm + "-" + dd;
    };

    constructor(props) {
        super(props);
        this.state = {
            username: props.match.params.ssn,
            last_exam_date: null,
            recorded_date: null
        }
        fetch(`/trafficController/lastExamDate/${this.state.username}`, {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                this.setState({
                    recorded_date: data.exam_date.split('T')[0]
                });
            })
    }

    render() {
        return (
            <Container><Row>
                <Col></Col>
                <Col xs={6}>
                    <Form id="userform" onSubmit={this.formHandler}>
                        <Form.Group className="mb-3" controlId="formLastExamDate">
                            <Form.Label>Enter Last Exam Date</Form.Label>
                            <Form.Control type="date"  name="Exam_date" max={this.disableFutureDate()} onChange={this.inputChangeHandler}/>
                        </Form.Group>
                        <Form.Text className="text-muted">
                            Your last submitted date was {this.state.recorded_date}
                        </Form.Text>
                        <br></br>
                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </Col>
                <Col></Col>
            </Row>
            </Container>
        )}

    inputChangeHandler = e => {
        this.setState({
            last_exam_date: e.target.value
        });
    }
    formHandler = e => {

        let x = this.state.username;
        e.preventDefault();
        fetch(`/trafficController/add/${this.state.username}?last_exam_date=${this.state.last_exam_date}`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => res.json())
            .then((data) => {
                let form = document.getElementById("userform");
                form.reset();
                this.setState({
                    recorded_date: data.exam_date.split('T')[0]
                });
                window.open(`/traffic-controller/${this.props.match.params.ssn}`,"_self")
            });
    }
}