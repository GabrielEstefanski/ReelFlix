import React from "react";
import icon from '../../../../images/icon.png';
import styled from "styled-components";

const Container = styled.div`
	background-color: #000;
	display: flex;
	justify-content: space-between;
	height: 55px;
	padding: 10px 2%;
	object-fit: cover;
	z-index: 100;
`

const Actions = styled.div`
	display: flex;
	align-items: center;
`

export default class Header extends React.Component {
  render() {
    return (
      <Container>
        <>
          <img src={icon} alt="icon"></img>
        </>
        <Actions>
          sair
        </Actions>
      </Container>
    )
  }
}