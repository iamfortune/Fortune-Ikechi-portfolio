import { useContext } from "react";
import styled from "styled-components";
import { AppContext } from "../../../store/AppState";

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(AppContext);

  return (
    <StyledButton
      title="Toggle theme"
      onClick={toggleTheme}
      className="flex items-center cursor-pointer"
      style={{ background: theme === "dark" ? "#3a7ebf" : "#01192f" }}
    >
      <div
        className={`fk-dot ${
          theme === "dark" ? "translate-x-[18px]" : "translate-x-0"
        }`}
        style={{ background: theme === "dark" ? "#01192f" : "#3a7ebf" }}
      />
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 45px;
  height: 25px;
  padding: 0 4px;
  border-radius: 12px;

  & .fk-dot {
    width: 19px;
    height: 19px;
    border-radius: 12px;
    transition: all 0.4s ease;
  }
`;

export default ThemeToggle;
