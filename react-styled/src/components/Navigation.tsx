import styled from "styled-components";

export const StyledNav = styled.nav`
  height: 75px;
  margin-bottom: 1.25rem;
  width: 90%;
  margin: 0 auto;
`;

export const StyledUl = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 20px;
  justify-content: end;
`;

export const StyledLi = styled.li`
  :hover {
    text-decoration: underline;
  }

  cursor: pointer;
`;

export const Navigation = () => {
  return (
    <StyledNav>
      <StyledUl>
        <StyledLi>Hem</StyledLi>
        <StyledLi>Om</StyledLi>
        <StyledLi>Kontakt</StyledLi>
      </StyledUl>
    </StyledNav>
  );
};
