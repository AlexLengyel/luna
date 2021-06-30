import styled from 'styled-components';
import Logo from '../../Assets/images/LUNA.png';
import {Button} from '../../Style/GlobalButtons';


const NavBarMain = styled.div`
  width: 100%;
  height: 71px;
  display: flex;  
  justify-content: space-between;
  background: ${props => props.theme.backgroundWhite};
  align-items: center;
  position: fixed;
  top: 0;
  border-bottom: ${(props) => props.theme.lightSilver} 1px solid;
  z-index: 10;
`

const LogoWrapper = styled.img`
  margin-left: 2%;
`

const NavBarRight = styled.div`
  display: flex;
  height: 100%;
  width: 40%;
  align-items: center;
  justify-content: flex-end;
`


const SignUpButton = styled(Button)`
  border-radius: 28px 0px 0px 28px;
  margin-right: 1px;
`
const LoginButton = styled(Button)`
  border-radius: 0px 28px 28px 0px;
  margin-right: 5%;
`

const NavButton = styled.button`
  height: 100%;
  box-sizing: border-box;
  font-size: ${(props) => props.theme.textSizeM};
  width: auto;
  border: none;
  background: none;
  border-bottom: 3px solid transparent;
  margin-right: 11%;
  flex-shrink: 1;
  font-size: 20px;

  :hover {
    border-bottom: 3px solid ${(props) => props.theme.orange};
    cursor: pointer;
  }
`

const Navigation = () => {
    return (
        <NavBarMain>
            <LogoWrapper src={Logo}/>
            <NavBarRight>
                <NavButton>Home</NavButton>
                <NavButton>Search</NavButton>
                <NavButton>Profile</NavButton>
                <SignUpButton>SIGN UP</SignUpButton>
                <LoginButton>LOGIN</LoginButton>
            </NavBarRight>
        </NavBarMain>
    )
}

export default Navigation;