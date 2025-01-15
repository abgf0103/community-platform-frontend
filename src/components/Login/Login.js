import React, { useState } from "react";
import { FaUserAlt, FaLock } from "react-icons/fa"; // 아이콘 가져오기
import "./Login.css"; // CSS 파일 연결
import { useNavigate } from "react-router-dom";
import instance from "../../api/instance";
import Swal from "sweetalert2";

function Login() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        username: "",
        password: "",
    });

    // 아이디와 비밀번호를 입력할때마다 이벤트를 발생시켜 값을 저장
    const onChangeUserData = (e) => {
        const { name, value } = e.target;
        setUserData((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    const handleLoginClick = (e) => {
        e.preventDefault();
        instance
            .post("/user/login", {
                username: userData.username,
                password: userData.password,
            })
            .then(() => {
                Swal.fire({
                    title: "성공",
                    text: "로그인 성공",
                    icon: "success",
                });
                navigate("/");
            })
            .catch((error) => {
                Swal.fire({
                    title: "실패",
                    text: "아이디 또는 비밀번호가 일치하지 않습니다",
                    icon: "error",
                });
                console.error(error);
                setUserData({ password: "" });
            });
    };

    return (
        <div className="login-container">
            <div className="login-box">
                <h2 className="login-title">로그인</h2>
                <form className="login-form" onSubmit={handleLoginClick}>
                    <div className="input-group">
                        <FaUserAlt className="input-icon" />
                        <input
                            type="text"
                            placeholder="아이디를 입력하세요"
                            className="input-field"
                            onChange={onChangeUserData}
                            name="username"
                        />
                    </div>
                    <div className="input-group">
                        <FaLock className="input-icon" />
                        <input
                            type="password"
                            placeholder="비밀번호를 입력하세요"
                            className="input-field"
                            onChange={onChangeUserData}
                            name="password"
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
