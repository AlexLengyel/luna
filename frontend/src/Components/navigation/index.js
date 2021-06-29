import styled from 'styled-components';
import Logo from '../../Assets/images/LUNA.png';
 //import { NavTabWrapper } from '../../Style/GlobalWrappers';
import { Button } from '../../Style/GlobalButtons';


const NavBarMain = styled.div`
width: 100%;
height: 71px;
display: flex;
justify-content: space-between;
align-items: center;
position: fixed; 
top: 0;
border-bottom:${(props) => props.theme.lightSilver} 1px solid;
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


const SignUpButton =  styled(Button)`
border-radius: 28px 0px 0px 28px;
margin-right: 1px;
`
const LoginButton =  styled(Button)`
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



/*
const Wrapper = styled.div `
    height: 5%;`


const Header = styled.div`
    width: 100vw;
    height: 5%;
    background-color: ${(props) => props.theme.backgroundWhite};
    position: absolute;
    display: flex;
    align-items: center;
    `

const NavigationSectionLeft = styled.div `
    display: flex;
    justify-content: flex-start;
    width: 60%;
    `
const NavigationSectionRight = styled.div `
    display: flex;
    justify-content: space-around;
    width: 40%;
    min-width: 40%;`

const HeaderNavBar = styled.div`
    display: flex;
    justify-content: space-around;
    width: 70%;
    `

const HomeWrapper = styled(NavTabWrapper) `
    
    `

const SearchWrapper = styled(NavTabWrapper) `
    
    `
const ProfileWrapper = styled(NavTabWrapper) `
    
`
const TabTitle = styled.p`
    font-size: 20px;
    color: ${(props) => props.theme.charcoal};
`
const ButtonWrapper = styled.div `
    display: flex;
    width: 30%;
    align-items: center;
    margin-right: 10px;
    `

const LoginButton = styled(Button)`
    border-top-left-radius: 0px;
    border-bottom-left-radius: 0px;
    border: none;
    margin-left: 1px;

    `
const SignupButton = styled(Button)`
    border-top-right-radius: 0px;
    border-bottom-right-radius: 0px;
    border: none;

`
const LogoWrapper = styled.img `
    padding: 10px 30px;`


const Navigation = () =>{
    return (
        <Wrapper>
            <Header>
                <NavigationSectionLeft>
                    <LogoWrapper src= {Logo} alt='logo'/>
                </NavigationSectionLeft>

                <NavigationSectionRight>
                    <HeaderNavBar>
                        <HomeWrapper>
                            <TabTitle>
                                Home
                            </TabTitle>
                        </HomeWrapper>
                        <SearchWrapper>
                            <TabTitle>
                                Search
                            </TabTitle>
                        </SearchWrapper>
                        <ProfileWrapper>
                            <TabTitle>
                                Profile
                            </TabTitle>
                        </ProfileWrapper>
                    </HeaderNavBar>
                    <ButtonWrapper>
                        <SignupButton>
                            SIGNUP
                        </SignupButton>
                        <LoginButton>
                            LOGIN
                        </LoginButton>
                    </ButtonWrapper>
                </NavigationSectionRight>
            </Header>
        </Wrapper>
    )
}

export default Navigation */