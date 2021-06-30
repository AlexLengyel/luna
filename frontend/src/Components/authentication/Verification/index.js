import styled from "styled-components";
import { BaseInput } from "../../../Style/GlobalInput";
import { Button } from "../../../Style/GlobalButtons";
//import Title from "../../BaseTitle";

const FormGrid =styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  grid-gap: 30px;
  margin-top: 30px;
  width: 50%;
`
export const Wrapper = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 85vh;
    width: 100%;
    position: fixed;
    margin-top: 71px;
    background-color: ${props => props.theme.backgroundLightGrey};
`

const TabTitle = styled.h1`
    font-size: ${props => props.theme.textSizeXL};
    font-weight: ${props => props.theme.textWeightBold};
    margin-top: 3%;
    margin-bottom: 4%;
    padding-bottom: 15px;
    border-bottom: solid 3px ${props => props.theme.orange};
`


export const RegistrationInput = styled(BaseInput)`
    
    padding: 23px;
`

const FinishRegButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 200px;
    border-radius: 28px;
    border: none;
    margin-top: 5%;
    
`

const Verification = () =>{
    return (
        <Wrapper>
                 <TabTitle>
                    VERIFICATION
                </TabTitle>
                <FormGrid>
                    <RegistrationInput placeholder='Email address' type='email'/>
                    <RegistrationInput placeholder='Verification Code' type='text' />
                    <RegistrationInput placeholder='Username' type='text'/>
                    <RegistrationInput placeholder='Location' type='text'/>
                    <RegistrationInput placeholder='Password' type='password' />
                    <RegistrationInput placeholder='Password repeat' type='password' />
                </FormGrid>
                    <FinishRegButton>
                        Finish Registration
                    </FinishRegButton>
        </Wrapper>
    )
}

export default Verification
