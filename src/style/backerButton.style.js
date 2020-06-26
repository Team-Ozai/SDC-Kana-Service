import styled from 'styled-components';

const BackerButton = styled.button`
  color: rgb(255, 255, 255);
  background-color: rgb(7, 115, 3);
  Font being Rendered: Maison Neue Book;
  transition: all 0.25s ease-in-out !important;
  cursor: pointer;
  position: relative;
  font-size: 16px;
  display: inline-block;
  line-height: 48px;
  vertical-align: baseline;
  letter-spacing: normal;
  margin: 0px 0px 18px;
  padding: 0px 24px;
  font-weight: 500;
  text-align: right;
  Element Type: a;
  Element ID: back-project-button;
  Element Class: bttn, bttn-green, bttn-large, block, mb3;
  flex:1;
  display: flex;
  justify-content: center;
  transform: translateX(250px);

  &:hover:not(:disabled) {
    background-color: rgb(3, 115, 98);
  }

  &:focus {
    outline: 1px solid #282828;
    outline-offset: 1px;
    transition: outline 1s ease-in-out;
  }
`

export default BackerButton;