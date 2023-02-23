import React from "react";
import { StyledContent, StyledHeader } from "./styled";

interface IMainLayout {
  header?: JSX.Element;
  children?: JSX.Element;
}

const MainLayout: React.FC<IMainLayout> = ({ header, children }) => {
  return (
    <>
      <StyledHeader>{header}</StyledHeader>
      <StyledContent>{children}</StyledContent>
    </>
  );
};

export default MainLayout;
