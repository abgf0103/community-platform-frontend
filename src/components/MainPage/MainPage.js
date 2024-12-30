import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";

function MainPage() {
    const navigate = useNavigate(); // 네비게이션 훅을 초기화합니다.
    // 게시물 목록 (10개)
    const posts = new Array(10).fill().map((_, index) => ({
        id: index + 1,
        title: `게시물 제목 ${index + 1}`,
        imgSrc: "https://via.placeholder.com/150",
    }));

    const handlePostClick = () => {
        navigate("/post"); // 로그인 버튼 클릭 시 /login 경로로 이동
    };

    return (
        <div>
            <Container className="my-5">
                <Row>
                    {/* 오른쪽: 게시물 목록 */}
                    <Col md={12}>
                        {posts.map((post) => (
                            <Card key={post.id} className="post-card mb-2">
                                <Row noGutters onClick={handlePostClick}>
                                    <Col md={3}>
                                        <Card.Img
                                            variant="top"
                                            src={post.imgSrc}
                                        />
                                    </Col>
                                    <Col md={9}>
                                        <Card.Body className="post-title">
                                            <Card.Title>
                                                {post.title}
                                            </Card.Title>
                                        </Card.Body>
                                    </Col>
                                </Row>
                            </Card>
                        ))}
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainPage;
