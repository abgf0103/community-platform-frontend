import React from "react";
import { Container, Row, Col, Card, Button, Form } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const SignUp = () => {
    const navigate = useNavigate();

    return (
        <Container className="d-flex justify-content-center align-items-center vh-100">
            <Row>
                <Col>
                    <Card style={{ width: "400px", padding: "20px" }}>
                        <Card.Body>
                            <h2 className="text-center mb-4">회원가입</h2>
                            <Form>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formName"
                                >
                                    <Form.Label>아이디</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="아이디를 입력하세요"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formEmail"
                                >
                                    <Form.Label>이메일</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="이메일을 입력하세요"
                                    />
                                </Form.Group>
                                <Form.Group
                                    className="mb-3"
                                    controlId="formPassword"
                                >
                                    <Form.Label>비밀번호</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="비밀번호를 입력하세요"
                                    />
                                </Form.Group>
                                <Button
                                    variant="success"
                                    type="submit"
                                    className="w-100"
                                >
                                    회원가입
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default SignUp;
