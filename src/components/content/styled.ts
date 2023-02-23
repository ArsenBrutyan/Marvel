import { Box } from "@mui/material";
import { styled as muiStyled } from "@mui/system";
import styled from "styled-components";

export const StyledWrapper = muiStyled(Box)(() => ({
  width: "200px",
  height: "200px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "flex-start",
  alignItems: "center",
  overflow: "auto",
  transition: "1s",
  ":hover": {
    cursor: "pointer",
  },
}));

export const StyledImage = styled.img`
  width: 180px;
  height: 150px;
`;
