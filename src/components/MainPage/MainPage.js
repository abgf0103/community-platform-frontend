import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate(); // 네비게이션 훅을 초기화합니다.

    const handleLoginClick = () => {
        navigate("/login"); // 로그인 버튼 클릭 시 /login 경로로 이동
    };

    const handlePostClick = () => {
        navigate("/post"); // 로그인 버튼 클릭 시 /login 경로로 이동
    };

    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col md={9}>
                        <Card className="post-card mb-2">
                            <Row noGutters onClick={handlePostClick}>
                                <Col md={2}>
                                    <Card.Img
                                        variant="top"
                                        src={"https://via.placeholder.com/150"}
                                    />
                                </Col>
                                <Col md={10}>
                                    <Card.Body className="post-title">
                                        <Card.Title>게시물 제목</Card.Title>
                                    </Card.Body>
                                </Col>
                            </Row>
                        </Card>
                    </Col>
                    <Col md={3}>
                        <button
                            className="goto-login-btn"
                            onClick={handleLoginClick}
                        >
                            HARU 로그인
                        </button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainPage;
