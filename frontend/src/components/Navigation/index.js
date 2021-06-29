import styled from 'styled-components';
import Logo from '../../assets/logo.svg';
import { NavTabWrapper } from '../../style/GlobalWrappers';
import { Button } from '../../style/GlobalButtons';


const Wrapper = styled.div `
    height: 71px;`


const Header = styled.div`
    width: 100vw;
    height: 71px;
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
    color: #4A4A4A;
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

export default Navigation