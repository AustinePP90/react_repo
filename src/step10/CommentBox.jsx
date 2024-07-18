export function CommentBox(comm) {
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
        <span className="name-text">{comm.name}</span>
        <span className="comment-text">{comm.comment}</span>
      </div>
    </div>
  );
}
