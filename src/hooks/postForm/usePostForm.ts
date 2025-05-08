import { useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import useCreatePost from "@/hooks/postForm/useCreatePost";
import { UI_ERRORS } from "@/constant";
import { useMediaQueryStore } from "@/store/useMediaQueryStore";
import useEditPost from "./useEditPost";
import useGetPost from "../postDetail/post/useGetPost";

export default function usePostForm() {
  const location = useLocation();
  const state = location.state as { postId?: number; isEdit?: boolean };
  const { postId, isEdit = false } = state || {};
  const [inputs, setInputs] = useState({ title: "", content: "" });
  const [error, setError] = useState({ titleMsg: "", contentMsg: "" });
  const { title, content } = inputs;
  const { createPost } = useCreatePost(title, content);
  const { editPost } = useEditPost(String(postId), title, content);
  const { postInfo } = useGetPost(String(postId), isEdit);

  useEffect(() => {
    if (isEdit && postInfo) {
      setInputs({ title: postInfo?.title, content: postInfo?.content });
    }
  }, [isEdit, postInfo]);

  const { titleMsg, contentMsg } = error;

  const handleSubmit = () => {
    if (title.length < 1) setError((prev) => ({ ...prev, titleMsg: UI_ERRORS.TITLE_LENGTH_ERROR }));
    if (content.length < 5) setError((prev) => ({ ...prev, contentMsg: UI_ERRORS.CONTENT_LENGTH_ERROR }));
    const isValid = title.length >= 1 && content.length >= 5;

    if (!isValid) return;
    if (isEdit && postId) editPost();
    else createPost();
  };
  const { isMobile } = useMediaQueryStore();
  const isBtnDisabled = isEdit && postInfo?.title === title && postInfo?.content === content;

  return { isMobile, handleSubmit, title, content, setInputs, titleMsg, contentMsg, setError, isEdit, isBtnDisabled };
}
