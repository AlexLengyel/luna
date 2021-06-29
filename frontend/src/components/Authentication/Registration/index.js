import styled from "styled-components";
import { Button } from "../../../style/GlobalButtons";
import { FormInput } from "../../../style/GlobalInputs";
import { Title } from "../../../style/GlobalTitles";
import { MidWrapper} from "../../../style/GlobalWrappers";


const FormWrapper =styled(MidWrapper)`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 85vh;
    `

const TabTitle = styled(Title)`
    margin-top: 50px;

    `

const HorizontalLine = styled.hr `
    margin-top: 16px;
    width:80%;
    color: #E47D31;
    text-align: center;
    border-width: 2px;`

export const InputWrapper = styled.div `
    display: flex;
    align-items: center;
    margin-top: 34px;`

export const Input = styled(FormInput)`
    font-size: 20px;

`

const ButtonWrapper = styled.div`
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
        `
const RegisterButton = styled(Button)`
    font-size: 20px;

`

const Registration = () =>{
    return (
        <FormWrapper>
                <TabTitle>
                    REGISTRATION
                    <HorizontalLine/>
                </TabTitle>
            <InputWrapper>
                <Input type= 'email' placeholder='Email address'>
                </Input>
            </InputWrapper>
            <ButtonWrapper>
                <RegisterButton>
                    Register
                </RegisterButton>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default Registration
