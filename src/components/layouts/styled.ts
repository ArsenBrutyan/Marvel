import { Box } from "@mui/material";
import { styled as muiStyled } from "@mui/system";

export const StyledHeader = muiStyled(Box)(() => ({
  width: "100%",
  background: "#FAB89C",
  padding: "15px",
}));

export const StyledContent = muiStyled(Box)(() => ({
  width: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexWrap: "wrap",
  padding: "25px",
  gap: 30,
}));
