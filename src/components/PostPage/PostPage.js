import React, { useState } from "react";
import { FaUser, FaCalendarAlt, FaComment } from "react-icons/fa"; // 아이콘을 사용
import "./PostPage.css";

const PostPage = () => {
    const [likes, setLikes] = useState(0); // 좋아요 수 상태 관리
    const [dislikes, setDislikes] = useState(0); // 싫어요 수 상태 관리
    const [comments, setComments] = useState([]); // 댓글 배열 상태
    const [commentText, setCommentText] = useState(""); // 댓글 입력 텍스트 상태

    const handleLike = () => {
        setLikes(likes + 1); // 좋아요 클릭 시 좋아요 수 증가
    };

    const handleDislike = () => {
        setDislikes(dislikes + 1); // 싫어요 클릭 시 싫어요 수 증가
    };

    const handleCommentChange = (e) => {
        setCommentText(e.target.value); // 댓글 입력 텍스트 상태 업데이트
    };

    const handlePostComment = () => {
        if (commentText.trim()) {
            const newComment = {
                author: "사용자",
                time: new Date().toLocaleString(),
                content: commentText,
            };
            setComments([newComment, ...comments]); // 새로운 댓글을 댓글 목록에 추가
            setCommentText(""); // 댓글 작성 후 텍스트 초기화
        }
    };

    return (
        <div className="post-page">
            <div className="post-header">
                <h1 className="post-title">게시글 제목</h1>
                <div className="post-info">
                    <div className="post-author">
                        <FaUser className="icon" />
                        <span>작성자: 홍길동</span>
                    </div>
                    <div className="post-time">
                        <FaCalendarAlt className="icon" />
                        <span>작성 시간: 2024-12-30 12:00</span>
                    </div>
                </div>
            </div>

            <div className="post-content">
                <p>
                    여기에 게시글 내용이 들어갑니다. 이 부분은 길어질 수
                    있습니다.
                </p>
            </div>

            <div className="reaction-buttons">
                <button className="like-button" onClick={handleLike}>
                    좋아요 {likes}
                </button>
                <button className="dislike-button" onClick={handleDislike}>
                    싫어요 {dislikes}
                </button>
            </div>

            {/* 댓글 작성란 */}
            <div className="comment-section">
                <h2>댓글</h2>
                <div className="comment-input">
                    <textarea
                        className="comment-textarea"
                        placeholder="댓글을 입력하세요"
                        value={commentText}
                        onChange={handleCommentChange}
                    ></textarea>
                    <button
                        className="post-comment-button"
                        onClick={handlePostComment}
                    >
                        댓글 작성
                    </button>
                </div>

                {/* 댓글 목록 */}
                <div className="comment-list">
                    {comments.map((comment, index) => (
                        <div key={index} className="comment">
                            <div className="comment-header">
                                <FaUser className="icon" />
                                <span className="comment-author">
                                    {comment.author}
                                </span>
                                <span className="comment-time">
                                    {comment.time}
                                </span>
                            </div>
                            <p className="comment-content">{comment.content}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default PostPage;
