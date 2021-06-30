import styled from "styled-components";
import { Button } from "../../../Style/GlobalButtons";
import { MidWrapper} from "../../../Style/GlobalWrappers";
import { BaseInput } from "../../BaseInput";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import Title from "../../BaseTitle";

const FormWrapper =styled(MidWrapper)`
    `
export const RegInput = styled(BaseInput)`
    padding: 23px;
    margin-top: 77px;
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


        const history = useHistory();
        const [email, setEmail] = useState("");
    
        const OnEmailChange = (event) => {
            setEmail(event.target.value);
        }
    
        const onSubmitHandler = async (event) => {
            event.preventDefault();
            const url = "auth/registration/";
            const body = {
                email
            };
            history.push('/registration/verified')
        }

        /* try {
            const response = await Axios.post(url, body);

            if (response.status === 200) {
                history.push("/signup/success");
            }
        }
        catch(err) {
            if (err.response.status === 400) {
                console.log("This email is taken");
            }
        } 
    }*/


    return (
        <FormWrapper onSubmit={onSubmitHandler} >
                <Title titlename= 'REGISTRATION' linelength='100px' height= '10vh' />
                <RegInput type= 'email' placeholder='Email address' onChange={OnEmailChange}>
                </RegInput>
                <RegisterButton>
                    Register
                </RegisterButton>
        </FormWrapper>
    )
}

export default RegistrationStart
