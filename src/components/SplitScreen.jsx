import React from 'react'
import { styled } from "styled-components";

const Container = styled.div`
  display: flex;
  background-color: #fff;
  height: 100vh;
`;

const Panel = styled.div`
  flex: ${(p) => p.flex};
  min-width: ${({width})=> `${width}px`};
`;

export const SplitScreen = ({ children, leftWidth = 1, rightWidth = 1 }) => {
  const [left, right] = children;
  return (
    <Container>
      <Panel width={leftWidth}>{left}</Panel>
      <Panel flex={rightWidth}>{right}</Panel>
    </Container>
  );
};
