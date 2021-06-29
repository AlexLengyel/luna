import styled from "styled-components";
import { BlockText } from "../../../style/GlobalInputs";
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

const RegText = styled(BlockText)`
`


const RegistrationMessage = () =>{
    return (
        <FormWrapper>
                <TabTitle>
                    REGISTRATION
                    <HorizontalLine/>
                </TabTitle>
            <RegText>
            Thanks for your registration.
            Our hard working monkeys are preparing a digital message called E-Mail that will be sent to you soon. Since monkeys aren't good in writing the message could end up in you junk folder. Our apologies for any inconvienience.
            </RegText>
        </FormWrapper>
    )
}

export default RegistrationMessage
