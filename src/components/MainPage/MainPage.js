import React, { useEffect, useState } from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./MainPage.css";
import { Link, useNavigate } from "react-router-dom";
import Weather from "./Weather";
import instance from "../../api/instance";

function MainPage() {
    const navigate = useNavigate(); // 네비게이션 훅을 초기화합니다.

    const [posts, setPosts] = useState([]);

    const handleLoginClick = () => {
        navigate("/login"); // 로그인 버튼 클릭 시 /login 경로로 이동
    };

    useEffect(() => {
        instance
            .get("/post/list")
            .then((res) => {
                console.log(res.data);
                setPosts(res.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }, []);

    const handlePostClick = (post) => {
        // 로컬 스토리지에 게시글 데이터 저장
        localStorage.setItem("currentPost", JSON.stringify(post));
    };

    return (
        <div>
            <Container className="my-5">
                <Row>
                    <Col md={9}>
                        {posts.map((post) => (
                            <Link
                                to="/post"
                                onClick={() => handlePostClick(post)} // 클릭 시 로컬 스토리지에 데이터 저장
                            >
                                <Card className="post-card mb-2" key={post.id}>
                                    <Row noGutters>
                                        <Col md={2}>
                                            <Card.Img
                                                variant="top"
                                                src={`https://via.placeholder.com/150?text=${post.id}`}
                                            />
                                        </Col>
                                        <Col md={10}>
                                            <Card.Body className="post-title">
                                                <Card.Title>
                                                    {post.title}
                                                </Card.Title>
                                            </Card.Body>
                                        </Col>
                                    </Row>
                                </Card>
                            </Link>
                        ))}
                    </Col>

                    <Col md={3}>
                        <Row>
                            <button
                                className="goto-login-btn"
                                onClick={handleLoginClick}
                            >
                                HARU 로그인
                            </button>
                        </Row>
                        <Row>
                            <Card>
                                <Card.Body className="post-title">
                                    <Weather />
                                </Card.Body>
                            </Card>
                        </Row>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default MainPage;
