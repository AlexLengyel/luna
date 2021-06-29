import styled from "styled-components";
import { BaseInput } from "../../../Style/GlobalInput";
import { Button } from "../../../Style/GlobalButtons";


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
    justify-content: center;
`


export const InputWrapper = styled.div `
    display: flex;
    width: 65%;
    flex-direction: column;
    align-items: center;
    margin-top: 34px;
    justify-content: space-between;`

export const RegistrationInput = styled(BaseInput)`
    font-size: 20px;

`

const FinishRegButton = styled(Button)`

`

const Verification = () =>{
    return (
        <Wrapper>
            
                 <TabTitle>
                    VERIFICATION
                </TabTitle>
                <FormGrid>
                <InputWrapper>
                    <BaseInput placeholder='Email address' type='email' required= 'This field is required' />
                    <BaseInput placeholder='Verification Code' type='text' required= 'This field is required' />
                    <BaseInput placeholder='Username' type='text' required= 'This field is required' />
                    <BaseInput placeholder='Location' type='text' required= 'This field is required' />
                    <BaseInput placeholder='Password' type='password' required= 'This field is required' />
                    <BaseInput placeholder='Password repeat' type='password' required= 'This field is required' />
                </InputWrapper>
                </FormGrid>
                    <FinishRegButton>
                        Finish Registration
                    </FinishRegButton>
        </Wrapper>
    )
}

export default Verification
