import { useEffect, useState } from "react";
import { IComment, IComments } from "types";
import { Comment } from "./Comment/Comment";
import { Textarea } from "components/Textarea/Textarea";

export const Comments = () => {
  const [comments, setComments] = useState<IComment[]>([]);

  const deleteComment = (id: number) => {
    setComments(comments.filter((comment) => comment.id !== id));
  };
  const addComment = (text: string) => {
    // Check if empty array to get new id
    const id = comments.length > 0 ? comments[comments.length - 1].id + 1 : 1;

    const comment: IComment = {
      id,
      body: text,
      postId: 50,
      user: { id: 42, username: "User" },
    };
    setComments([...comments, comment]);
  };

  useEffect(() => {
    fetch("https://dummyjson.com/comments?limit=5")
      .then((response) => response.json())
      .then((response: IComments) => setComments(response.comments));
  }, []);
  return (
    <>
      {comments &&
        comments.map((comment, i) => (
          <Comment comment={comment} key={i} deleteComment={deleteComment} />
        ))}
      <Textarea addComment={addComment} />
    </>
  );
};
