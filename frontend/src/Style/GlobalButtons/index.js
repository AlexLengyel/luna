import styled from 'styled-components';

export const Button = styled.button `
border: none;
width: 100px;
height: 41px;
color: ${(props) => props.theme.backgroundWhite};
background-color: ${(props) => props.theme.orange};
font-size: ${(props) => props.theme.textSizeM};
flex-shrink: 0;
:hover {
    cursor: pointer;
}
`

/* display: flex;
justify-content: center;
align-items: center;
height: 56px;
width: 200px;
border-radius: 28px;
border: none;
color: ${(props) => props.theme.backgroundWhite};
font-size: ${(props) => props.theme.textSizeM};
background-color: ${(props) => props.theme.orange};
margin-top: 4%;
 */