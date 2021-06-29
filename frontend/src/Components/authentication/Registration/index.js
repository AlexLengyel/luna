import styled from "styled-components";
import { Button } from "../../../Style/GlobalButtons";
import { MidWrapper} from "../../../Style/GlobalWrappers";
import { BaseInput } from "../../../Style/GlobalInput";

const FormWrapper =styled(MidWrapper)`

    `

const TabTitle = styled.h1`
    font-size: ${props => props.theme.textSizeXL};
    font-weight: ${props => props.theme.textWeightBold};
    margin-top: 3%;
    margin-bottom: 4%;
    padding-bottom: 15px;
    border-bottom: solid 3px ${props => props.theme.orange};
    `


export const InputWrapper = styled.div `
    display: flex;
    align-items: center;
    margin-top: 34px;
    justify-content: center;`

export const Input = styled(BaseInput)`
    min-width: 300px;
    width: 20%;
    padding: 23px;
`

const RegisterButton = styled(Button)`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 56px;
    width: 200px;
    border-radius: 28px;
    border: none;

`

const Registration = () =>{
    return (
        <FormWrapper>
                <TabTitle>
                    REGISTRATION
                </TabTitle>
            <InputWrapper>
                <Input type= 'email' placeholder='Email address'>
                </Input>
            </InputWrapper>
            
                <RegisterButton>
                    Register
                </RegisterButton>
        </FormWrapper>
    )
}

export default Registration
