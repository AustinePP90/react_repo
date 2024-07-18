import "./Comment.css";

const comments = [
  { name: "손흥민", comment: "정말 재미있는 영화였음" },
  { name: "홍길동", comment: "정말 감동의 서사시였음" },
];

export function App() {
  return (
    <>
      {comments.map((comment) => {
        return (
          <div className="wrapper">
            <div className="image-container">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/8/89/Portrait_Placeholder.png"
                className="image"
                alt="Profile Image"
              />
            </div>
            <div className="content-container">
              <span className="name-text">{comment.name}</span>
              <span className="comment-text">{comment.comment}</span>
            </div>
          </div>
        );
      })}
    </>
  );
}
