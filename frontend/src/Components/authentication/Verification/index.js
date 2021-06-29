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
    width: 65%;
    flex-direction: column;
    align-items: center;
    margin-top: 34px;
    justify-content: space-between;`

export const BaseInput = styled(FormInput)`
    font-size: 20px;

`

const ButtonWrapper = styled.div`
    display: flex;
    width: 200px;
    align-items: center;
    justify-content: center;
    margin-top: 50px;
        `
const FinishRegButton = styled(Button)`
    font-size: 20px;

`

const Verification = () =>{
    return (
        <FormWrapper>
                <TabTitle>
                    VERIFICATION
                    <HorizontalLine/>
                </TabTitle>
            <InputWrapper>
            <BaseInput placeholder='Email address' type='email' required= 'This field is required' />
            <BaseInput placeholder='Verification Code' type='number' required= 'This field is required' />
            <BaseInput placeholder='Username' type='text' required= 'This field is required' />
            <BaseInput placeholder='Location' type='text' required= 'This field is required' />
            <BaseInput placeholder='Password' type='password' required= 'This field is required' />
            <BaseInput placeholder='Password repeat' type='password' required= 'This field is required' />
            </InputWrapper>
            <ButtonWrapper>
                <FinishRegButton>
                    Finish Registration
                </FinishRegButton>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default Verification
