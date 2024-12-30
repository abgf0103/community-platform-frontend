import React from "react";
import { useNavigate } from "react-router-dom"; // useNavigate 훅을 가져옵니다.
import "./Header.css";

function Header() {
    const navigate = useNavigate(); // 네비게이션 훅을 초기화합니다.

    const handleHomeClick = () => {
        navigate("/");
    };

    const handleLoginClick = () => {
        navigate("/login"); // 로그인 버튼 클릭 시 /login 경로로 이동
    };

    return (
        <header className="header">
            <h1 className="platform-name" onClick={handleHomeClick}>
                하루하루
            </h1>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="검색..."
                />
            </div>
            <button className="login-btn-header" onClick={handleLoginClick}>
                로그인
            </button>
        </header>
    );
}

export default Header;
