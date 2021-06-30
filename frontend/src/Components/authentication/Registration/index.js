import styled from "styled-components";
import { Button } from "../../../Style/GlobalButtons";
import { MidWrapper} from "../../../Style/GlobalWrappers";
import { BaseInput } from "../../BaseInput";

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

export const RegInput = styled(BaseInput)`
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

const RegistrationStart = () =>{
    return (
        <FormWrapper>
                <TabTitle>
                    REGISTRATION
                </TabTitle>
                <RegInput type= 'email' placeholder='Email address'>
                </RegInput>
                <RegisterButton>
                    Register
                </RegisterButton>
        </FormWrapper>
    )
}

export default RegistrationStart
