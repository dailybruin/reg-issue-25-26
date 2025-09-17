import React from "react";
import styled from "styled-components";
import LandingImage from "../images/reg-issue-landing-2025.gif";

const Container = styled.div`
  width: 100%;
  height: fit-content;
  position: relative;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #d5e7f2;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const Image = styled.img`
  width: 100vw;
  height: auto;
  object-fit: cover;
`;

const Credits = styled.div`
  position: absolute;
  bottom: 2%;
  right: 1%;
  background-color: #d9d9d9;
  color: black;
  padding: clamp(1px, 0.8vw, 10px) clamp(1px, 1.5vw, 2px);
  font-family: "Roboto", sans-serif;
  font-size: clamp(8px, 1.5vw, 10px);
  @media (max-width: 768px) {
    bottom: 5px;
    right: 5px;
    padding: 4px 8px;
    font-size: 5px;
  }
`;

const Landing = ({ landing, credits }) => {
  return (
    <div id="title">
      <Container>
        <Image src={LandingImage} alt="Landing image" />
        <Credits>Illustration by Helen Juwon Park</Credits>
      </Container>
    </div>
  );
};
export default Landing;
