import React from "react";
import styled from "styled-components";
import Header from "./layout/Header";
import Home from "./pages/Home";

export default function App() {
  return (
    <Container>
      <Header />
      <Home />
    </Container>
  );
}

const Container = styled.div`
  width: min(1159px, 100%);
  padding: 74px 24px;
  margin: 0 auto;
  @media (max-width: 548px) {
    padding: 13px 16px;
  }
`;
