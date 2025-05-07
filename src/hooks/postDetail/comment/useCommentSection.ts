import useEditComment from "@/hooks/postDetail/comment/useEditComment";
import { useState } from "react";
import usePostComment from "@/hooks/postDetail/comment/usePostComment";
import { Comment } from "@/types/interface";

export default function useCommentSection(postId: string | undefined) {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editCommentId, setEditCommentId] = useState<string | null>(null);
  const { editComment } = useEditComment();
  const { postComment } = usePostComment();
  const onEnterSubmit = (e: React.KeyboardEvent<HTMLInputElement>) => e.key === "Enter" && onSubmit();

  const startEditing = (comment: Comment) => {
    setIsEditing(true);
    setEditCommentId(comment.id);
    setInput(comment.content);
  };

  const cancelEditing = () => {
    setIsEditing(false);
    setEditCommentId(null);
    setInput("");
  };

  const onSubmit = () => {
    if (!input) return;
    if (isEditing && editCommentId) {
      editComment({
        postId,
        commentId: editCommentId,
        content: input,
      });
    } else {
      postComment({
        postId,
        content: input,
      });
    }
    cancelEditing();
  };
  return { input, setInput, startEditing, isEditing, onEnterSubmit, onSubmit };
}
