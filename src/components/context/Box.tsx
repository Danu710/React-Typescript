import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";

export const Box = () => {
  const theme = useContext(ThemeContext);

  return (
    <div
      style={{
        backgroundColor: theme.primary.main,
        color: theme.secondary.main,
      }}>
      <h1>Box</h1>
    </div>
  );
};
