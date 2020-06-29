import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import Nav from "../nav";

import Button from "../button";

const buttonStyle = {
  alignSelf: "flex-end",
};

const Container = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  margin: 70px 165px 165px 165px;
`;

const NavBar = () => {
  return (
    <Container>
      <Nav inline />
      <Link to='/contact'>
        <Button style={buttonStyle}>contact us</Button>
      </Link>
    </Container>
  );
};

export default NavBar;
