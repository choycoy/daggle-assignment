import useModifyComment from "@/hooks/postDetail/comment/useModifyComment";
import { useState } from "react";
import usePostComment from "@/hooks/postDetail/comment/usePostComment";
import { Comment } from "@/types/interface";

export default function useCommentSection(postId: string | undefined, accessToken: string | null) {
  const [input, setInput] = useState("");
  const [isEditing, setIsEditing] = useState(false);
  const [editCommentId, setEditCommentId] = useState<string | null>(null);
  const { modifyComment } = useModifyComment();
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
      modifyComment({
        postId,
        accessToken,
        commentId: editCommentId,
        content: input,
      });
    } else {
      postComment({
        postId,
        accessToken,
        content: input,
      });
    }
    cancelEditing();
  };
  return { input, setInput, startEditing, isEditing, onEnterSubmit, onSubmit };
}
