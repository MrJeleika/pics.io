import { IComment } from "types";
import s from "./Comment.module.css";

interface Props {
  comment: IComment;
  deleteComment: (postId: number) => void;
}

export const Comment = ({ comment, deleteComment }: Props) => {
  return (
    <div className={s.comment}>
      <div className={s.initials}>{comment.user.username[0]}</div>
      <div className={s.name}>{comment.user.username}</div>
      <div className={s.delete} onClick={() => deleteComment(comment.id)}></div>
      {comment.body}
    </div>
  );
};
