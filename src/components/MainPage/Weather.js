import React, { useState, useEffect } from "react";
import { Carousel, Card, Spinner, Container } from "react-bootstrap";

const locations = [
    { name: "서울", lat: 37.5642, lon: 127.0016 },
    { name: "강원도", lat: 37.5551, lon: 128.2093 },
    { name: "충남", lat: 36.5184, lon: 126.8009 },
    { name: "충북", lat: 36.6357, lon: 127.4917 },
    { name: "경북", lat: 36.5761, lon: 128.5056 },
    { name: "경남", lat: 35.2383, lon: 128.6927 },
    { name: "전북", lat: 35.8204, lon: 127.1088 },
    { name: "전남", lat: 34.8679, lon: 126.991 },
];

const Weather = () => {
    const [weatherData, setWeatherData] = useState([]);
    const [loading, setLoading] = useState(true);
    const API_KEY = "d0089c9f48bab0ba5e08f6088fdec4f0";

    useEffect(() => {
        const fetchWeather = async () => {
            try {
                const promises = locations.map(async (location) => {
                    const response = await fetch(
                        `https://api.openweathermap.org/data/2.5/weather?lat=${location.lat}&lon=${location.lon}&appid=${API_KEY}&units=metric&lang=kr`
                    );
                    const data = await response.json();
                    return {
                        name: location.name,
                        temp: Math.round(data.main.temp), // 기온을 반올림하여 정수로 변환
                        description: data.weather[0].description,
                        icon: data.weather[0].icon,
                    };
                });
                const results = await Promise.all(promises);
                setWeatherData(results);
                setLoading(false);
            } catch (error) {
                console.error("Error fetching weather data:", error);
            }
        };

        fetchWeather();
    }, [API_KEY]);

    if (loading) {
        return (
            <div className="text-center mt-5">
                <Spinner animation="border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </Spinner>
            </div>
        );
    }

    return (
        <Container className="mt-4">
            <Carousel indicators={false}>
                {weatherData.map((weather, index) => (
                    <Carousel.Item key={index}>
                        <div className="d-flex justify-content-center">
                            <Card style={{ width: "18rem" }}>
                                <Card.Body className="text-center">
                                    <Card.Title>{weather.name}</Card.Title>
                                    <Card.Subtitle className="mb-2 text-muted">
                                        {weather.temp}°C
                                    </Card.Subtitle>
                                    <Card.Text>{weather.description}</Card.Text>
                                    <img
                                        src={`https://openweathermap.org/img/wn/${weather.icon}@2x.png`}
                                        alt="weather icon"
                                    />
                                </Card.Body>
                            </Card>
                        </div>
                    </Carousel.Item>
                ))}
            </Carousel>
        </Container>
    );
};

export default Weather;
