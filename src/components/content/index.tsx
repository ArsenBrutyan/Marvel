import { Typography } from "@mui/material";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import store from "../../store";
import { getMarvelHeroes } from "../../store/marvel-slice/marvel-action";
import { heroesSelector } from "../../store/marvel-slice/selector";
import { StyledImage, StyledWrapper } from "./styled";

export const Content = () => {
  const heroesData = useSelector(heroesSelector);

  useEffect(() => {
    store.dispatch(getMarvelHeroes());
  }, []);

  return (
    <>
      {heroesData?.map((item) => {
        return (
          <StyledWrapper key={item.id}>
            <Typography variant={"h6"}>{item.name}</Typography>
            <StyledImage src={item.link} />
            <Typography variant={"caption"}>{item.description}</Typography>
          </StyledWrapper>
        );
      })}
    </>
  );
};
