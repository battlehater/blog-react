import './Comments.css'
export const Comments = ({ comment }) => {
  return (
    <div className="comment">
      <h4>{comment.name}</h4>
      <code>{comment.email}</code>
      <p>{comment.body}</p>
    </div>
  );
};
