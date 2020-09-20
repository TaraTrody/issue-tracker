import React from 'react';
import styled from 'styled-components';

export const SignupLogin = () => {
  return (
    <Background>
      <Container>
        <LeftPanel>
         <Image></Image>
        </LeftPanel>
      </Container>
      <Circle1></Circle1>
      <Circle2></Circle2>
    </Background>
  );
};

const Background = styled.div`
  background-color: #d1c4e9;
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Circle1 = styled.div`
  width: 88.5rem;
  height: 88.5rem;
  background-color: #fff;
  border-radius: 100%;
  opacity: 0.25;
  position: absolute;
  top: -732px;
  left: 24px;
`;
const Circle2 = styled.div`
  width: 88.5rem;
  height: 88.5rem;
  background-color: #fff;
  border-radius: 100%;
  opacity: 0.25;
  position: absolute;
  top: 200px;
  left: 370px;
`;
const Container = styled.div`
  width: 52rem;
  height: 38rem;
  border-radius: 24px;
  background-color: #fff;
  position: absolute;
  z-index: 1;
  overflow: hidden;
`;

const LeftPanel = styled.div`
  height: 100%;
  width: 28rem;
  background-color: #4527A0;
  display: flex;
  align-items: flex-end; 
  justify-content:center
  
`;

const Image = styled.div`
width: 28rem;
height: 26rem;
background: url('/Teamworksvg.svg') no-repeat;

`;



