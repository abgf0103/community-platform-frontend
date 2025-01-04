import React from "react";
import { Container, Row, Col, Button, Card } from "react-bootstrap";
import "./MainPage.css";
import { useNavigate } from "react-router-dom";
import Weather from "./Weather";

function MainPage() {
    const navigate = useNavigate(); // 네비게이션 훅을 초기화합니다.

    const handleLoginClick = () => {
        navigate("/login"); // 로그인 버튼 클릭 시 /login 경로로 이동
    };

    const handlePostClick = () => {
        navigate("/post"); // 로그인 버튼 클릭 시 /login 경로로 이동
    };

    //const API_KEY = "d0089c9f48bab0ba5e08f6088fdec4f0";
    // const getWeather = (lat, lon) => {
    //     fetch(
    //         `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    //     )
    //         .then((res) => {
    //             return res.json();
    //         })
    //         .then((json) => {
    //             console.log(json.main.temp);
    //             console.log(json.weather[0].description);
    //             const icon = json.weather[0].icon;
    //             const iconUrl = `http://openweathermap.org/img/wn/${icon}@2x.png`;

    //             iconSection.setAttribute("src", iconUrl);
    //         });
    // };

    // //Seoul weather
    // getWeather(37.5642, 127.0016);

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
