import styled from "styled-components";
import facebook from "../../Assets/svgs/facebook.svg"
import twitter from "../../Assets/svgs/twitter.svg"
import googleplus from "../../Assets/svgs/googleplus.svg"
import instagram from "../../Assets/svgs/instagram.svg"

const Wrapper = styled.div `
    height: 10%;
    `
const Footer = styled.div `
    width: 100vw;
    height: 10%;
    background-color: ${(props) => props.theme.backgroundWhite};
    position: absolute;
    bottom: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    `

const SocialMediaWrapper = styled.img`
    height: 4vh;
    width: auto;
`
const NavigationSectionLeft = styled.div`
    width: 40%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 30px;
    `
const NavigationSectionRight = styled.div`
    width: 20%;
    display: flex;
    justify-content: space-around;
    padding-right: 10px;
    `
const CopyrightWrapper = styled.div`
    border-top: ${(props) => props.theme.whisper} solid 1px;
    display: flex;
    justify-content: flex-start;   
    align-items: center;
    height: 40%;
    width: 100vw;
    padding-left: 10px;
    font-size: ${(props) => props.theme.textSizeXS};
    color: ${(props) => props.theme.dimGrey};
    padding-left: 30px;
    `
const NavWrapper = styled.div`
    height: 60%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    width: 100vw;
    `
const NavTitle = styled.p`
    color: ${(props) => props.theme.dimGrey};
    padding: 5px;
    `


const NavFooter = () =>{
    return (
        <Wrapper>
            <Footer>
                <NavWrapper>
                    <NavigationSectionLeft>
                        <NavTitle>
                            About Us
                        </NavTitle>
                        <NavTitle>
                            Press
                        </NavTitle>
                        <NavTitle>
                            Blog
                        </NavTitle>
                        <NavTitle>
                            iOS
                        </NavTitle>
                        <NavTitle>
                            Android
                        </NavTitle>
                    </NavigationSectionLeft>
                    <NavigationSectionRight>
                        <SocialMediaWrapper src={facebook}/>
                        <SocialMediaWrapper src={twitter}/>
                        <SocialMediaWrapper src={googleplus}/>
                        <SocialMediaWrapper src={instagram}/>
                    </NavigationSectionRight>
                </NavWrapper>
                <CopyrightWrapper>
                    © Copyright Luna 2021
                </CopyrightWrapper>
            </Footer>
        </Wrapper>
    )
}

export default NavFooter