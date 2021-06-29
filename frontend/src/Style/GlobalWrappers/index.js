import styled from 'styled-components';

export const NavTabWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    cursor: pointer;
    `

export const MidWrapper = styled.form`
/*     background-color: #F2F2F2;
    display: flex;
    width: 100vw;
    align-items: center;
    justify-content: flex-start; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 100vh;
    width: 100%;
    background-color: ${props => props.theme.backgroundGrey};

    `
/* const Wrapper = styled.form`
display: flex;
flex-direction: column;
align-items: center;
justify-content: flex-start;
height: 100vh;
width: 100%;
background-color: ${props => props.theme.backgroundGrey};
` */
