import { SyntheticEvent, useEffect, useState } from "react";
import s from "./Textarea.module.css";

interface Props {
  addComment: (text: string) => void;
}

export const Textarea = ({ addComment }: Props) => {
  const [text, setText] = useState<string>("");

  useEffect(() => {
    const localStorageText = localStorage.getItem("text");
    if (localStorageText) setText(localStorageText);
  }, []);

  const handleChange = (value: string) => {
    setText(value);
    localStorage.setItem("text", value);
  };

  const handleSumbit = (event: SyntheticEvent) => {
    event.preventDefault();
    addComment(text);
    // Clear form
    setText("");
    localStorage.removeItem("text");
  };

  return (
    <form onSubmit={handleSumbit}>
      <textarea
        className={s.textarea}
        value={text}
        onChange={(e) => handleChange(e.target.value)}
      />
      <button type="submit" className={s.button}>
        Send
      </button>
    </form>
  );
};
