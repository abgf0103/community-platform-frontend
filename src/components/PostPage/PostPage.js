import React, { useEffect, useState } from "react";
import { FaUser, FaCalendarAlt } from "react-icons/fa";
import { BiLike, BiDislike } from "react-icons/bi";
import "./PostPage.css";
import instance from "../../api/instance";
import { writeTime } from "../../utills/formatters";

const PostPage = () => {
    const [comments, setComments] = useState([]); // 댓글 배열 상태
    const [commentText, setCommentText] = useState(""); // 댓글 입력 텍스트 상태

    const [post, setPost] = useState(null);

    const [nickname, setNickname] = useState("");

    useEffect(() => {
        // 로컬 스토리지에서 데이터 불러오기
        const storedPost = localStorage.getItem("currentPost");
        if (storedPost) {
            setPost(JSON.parse(storedPost));
        }
    }, []);

    const getNickname = () => {
        instance
            .get(`/member/getNickname?memberID=${post.authorID}`)
            .then((res) => {
                setNickname(res.data);
            });
    };

    if (!post) {
        return <div>게시글을 불러오는 중...</div>;
    }

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
    getNickname();

    return (
        <div className="post-page">
            <div className="post-header">
                <h1 className="post-title">{post.title}</h1>
                <div className="post-info">
                    <div className="post-author">
                        <FaUser className="icon" />
                        <span>작성자 : {nickname}</span>
                    </div>
                    <div className="post-time">
                        <FaCalendarAlt className="icon" />
                        <span>작성일 : {writeTime(post.createdAt)}</span>
                    </div>
                </div>
            </div>

            <div className="post-content">
                <p>{post.content}</p>
            </div>

            <div className="reaction-buttons">
                <button className="like-button">
                    <BiLike className="icon" />
                </button>
                <button className="dislike-button">
                    <BiDislike className="icon" />
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
