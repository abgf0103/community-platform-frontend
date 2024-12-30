import React from "react";
import { FaUserAlt, FaLock } from "react-icons/fa"; // 아이콘 가져오기
import "./Login.css"; // CSS 파일 연결

function Login() {
    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">로그인</h2>
                <form className="login-form">
                    <div className="input-group">
                        <FaUserAlt className="input-icon" />
                        <input
                            type="text"
                            placeholder="아이디를 입력하세요"
                            className="input-field"
                        />
                    </div>
                    <div className="input-group">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            className="input-field"
                        />
                    </div>
                    <button type="submit" className="login-btn">
                        로그인
                    </button>
                </form>
            </div>
        </div>
    );
}

export default Login;
