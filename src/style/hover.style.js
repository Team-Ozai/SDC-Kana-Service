import styled from 'styled-components';
import BackerButton from './backerButton.style.js';

const Hover= styled.button`
  flex: none;
  transition: fill 0.25s;
  ${BackerButton}:hover & {
    fill: red;
  }
`

export default Hover;