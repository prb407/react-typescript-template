import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import {
    Container, Col, Form,
    FormGroup, Label, Input,
    Button,
} from 'reactstrap';

export interface ILoginProps extends RouteComponentProps {
}

class Login extends React.Component<ILoginProps> {
    handleSubmit = (value: any) => {
        console.log('done', value)
    }
    public render() {
        return (
            <Container className="App">
                <h2>Sign In</h2>
                <Form className="form" onSubmit={this.handleSubmit}>
                    <Col>
                        <FormGroup>
                            <Label>Email</Label>
                            <Input
                                type="email"
                                name="email"
                                id="exampleEmail"
                                placeholder="myemail@email.com"
                            />
                        </FormGroup>
                    </Col>
                    <Col>
                        <FormGroup>
                            <Label for="examplePassword">Password</Label>
                            <Input
                                type="password"
                                name="password"
                                id="examplePassword"
                                placeholder="********"
                            />
                        </FormGroup>
                    </Col>
                    <Button>Submit</Button>
                </Form>
            </Container>
        );
    }
}
export default Login