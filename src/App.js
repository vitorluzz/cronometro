import React from "react";
import "./styles.css";
import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    
    font-weight: 300;
    text-decoration: none;
    list-style: none;
   background-color: #FFFFFF;

  }
 `;
const SectionPrincipal = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: 7.2vw;
  @media (max-width: 800px) {
    margin-top: 24vw;
  }
`;
const Title = styled.h1`
  text-align: center;
  margin-top: 1vw;
  font-size: 3vw;
  font-family: Fredoka;
  font-weight: 500;
  @media (max-width: 800px) {
    font-size: 12vw;
    margin-top: 3vw;
  }
`;

const Cronometro = styled.div`
  background-color: #ebebeb;
  width: 19vw;
  height: 44vh;
  border-radius: 50%;
  border: 9px solid #3d3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 75vw;
    height: 38vh;
  }
`;
const DivCronometro = styled.div`
  background-color: #7a698c;
  width: 23vw;
  height: 51vh;
  border-radius: 50%;
  border: 9px solid #3d3d3d;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 800px) {
    width: 90vw;
    height: 45vh;
  }
`;
const Numero = styled.h1`
  color: white;
  position: absolute;
  background-color: #1f1f1f;
  font-family: "Orbitron", sans-serif;
  font-size: 3.5vw;
  @media (max-width: 800px) {
    font-size: 15vw;
  }
`;

const CronometroLigamento = styled.div`
  background-color: #998ba7;
  position: absolute;
  top: 8.8vw;
  width: 4vw;
  height: 8vh;
  border: 9px solid #3d3d3d;
  @media (max-width: 800px) {
    width: 12vw;
    height: 8vh;
    top: 26vw;
  }
`;
const CronometroClick = styled.div`
  background-color: #7a698c;
  position: absolute;
  border: 9px solid #3d3d3d;
  top: 8vw;
  width: 8vw;
  height: 6vh;
  border-radius: 2vw;
  @media (max-width: 800px) {
    width: 24vw;
    height: 5vh;
    top: 26vw;
    border-radius: 4vw;
  }
`;
const ContainerNumero = styled.div`
  background-color: #1f1f1f;
  width: 15vw;
  height: 11vh;
  position: absolute;
  border-radius: 1.5vw;
  border: 5px solid #3d3d3d;
  @media (max-width: 800px) {
    width: 60vw;
    border-radius: 5vw;
  }
`;
const Sombra = styled.div`
  width: 20vw;
  height: 2vw;
  background-color: #c2c2c2;
  border-radius: 50%;
  margin-top: 2vw;
  @media (max-width: 800px) {
    width: 70vw;
    height: 2vh;
    margin-top: 3vw;
  }
`;
const ContainerButton = styled.div`
  display: flex;
  justify-content: space-evenly;

  margin-top: 1vw;
  width: 51vw;
  height: 12vh;
  @media (max-width: 800px) {
    width: 100vw;
    padding: 2vw;
    height: 38;
    margin-top: 4vw;
  }
`;
const BotaoStart = styled.button`
  width: 10vw;
  height: 12vh;
  border-radius: 1.5vw;
  background-color: #37ff8b;
  border: none;
  font-size: 2.5vw;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 30vw;
    height: 28vh;
    border-radius: 4vw;
    font-size: 20vw;
  }
`;

const BotaoStop = styled.button`
  width: 10vw;
  height: 12vh;
  border-radius: 1.5vw;
  font-weight: bold;
  font-size: 2.5vw;
  background-color: #e71d36;
  border: none;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 30vw;
    height: 28vh;
    border-radius: 4vw;
    font-size: 20vw;
  }
`;
const BotaoRestart = styled.button`
  width: 10vw;
  height: 12vh;
  border-radius: 1.5vw;
  font-size: 2.5vw;
  background-color: aquamarine;
  border: none;
  cursor: pointer;
  @media (max-width: 800px) {
    width: 30vw;
    height: 28vh;
    border-radius: 4vw;
    font-size: 20vw;
  }
`;

export default class App extends React.Component {
  state = {
    number: 0
  };

  start = () => {
    const ParaAiMeuParceiro = setInterval(() => {
      this.setState({ number: this.state.number + 1 });
    }, 1000);

    this.stop = () => {
      clearInterval(ParaAiMeuParceiro);
    };
  };

  restart = () => {
    this.setState({ number: 0 });
  };

  render() {
    return (
      <>
        <Title>O CRONÔMETRO</Title>
        <GlobalStyle />
        <SectionPrincipal>
          <DivCronometro>
            <Cronometro>
              <CronometroLigamento></CronometroLigamento>
              <CronometroClick></CronometroClick>
              <ContainerNumero></ContainerNumero>
              <Numero>{this.state.number}</Numero>
            </Cronometro>
          </DivCronometro>
          <Sombra></Sombra>
          <ContainerButton>
            <BotaoStart onClick={this.start}>&#9658; </BotaoStart>
            <BotaoRestart onClick={this.restart}> &#8634;</BotaoRestart>
            <BotaoStop onClick={this.stop}>II</BotaoStop>
          </ContainerButton>
        </SectionPrincipal>
        <style>
          @import
          url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Changa:wght@200;300;400;500;600;700;800&family=Fredoka:wght@300;400;500;600;700&family=IBM+Plex+Mono:wght@100;200;300;400;500;600;700&family=Orbitron:wght@400;500;600;700;800;900&family=Space+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
        </style>
      </>
    );
  }
}
