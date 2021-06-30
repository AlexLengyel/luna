import styled from "styled-components";
import { BaseInput } from "../../../Style/GlobalInput";
import { Button } from "../../../Style/GlobalButtons";
import Title from "../../BaseTitle";
import { useHistory } from "react-router-dom";
import { useState } from "react";

const FormGrid =styled.div`
  display: grid;
  grid-template: repeat(3, 1fr) / repeat(2, 1fr);
  grid-gap: 30px;
  margin-top: 100px;
  width: 50%;
`
export const VerifyWrapper = styled.form`
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

/* const TabTitle = styled.h1`
    font-size: ${props => props.theme.textSizeXL};
    font-weight: ${props => props.theme.textWeightBold};
    margin-top: 3%;
    margin-bottom: 4%;
    padding-bottom: 15px;
    border-bottom: solid 3px ${props => props.theme.orange};
`
 */

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


    const [email, setEmail] = useState("");
    const [username, setUsername] = useState("");
    const [code, setCode] = useState("");
    const [password, setPassword] = useState("");
    const [password_repeat, setPasswordRepeat] = useState("");
    const [location, setLocation] = useState("");
    const history = useHistory();
    
    const onEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
    };

    const onVCodeChange = (event) => {
        setCode(event.target.value);
    };

    const onPasswordChange = (event) => {
        setPassword(event.target.value);
    };

    const onPasswordRepeatChange = (event) => {
        setPasswordRepeat(event.target.value);
    };

    const onLocationChange = (event) => {
        setLocation(event.target.value);
    };

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const url = "auth/registration/validation/";
        const body = {
          email: email,
          username: username,
          code: code,
          password: password,
          password_repeat: password_repeat,
          location: location,
        }
        history.push("/login");

        
    /* 
        try {
          const resp = await Axios.patch(url, body);
          if (resp.status === 200) {
            history.push("/login");
          }
        } catch (err) {
          console.log(err.response);
        } */
    };

    return (
        <VerifyWrapper onSubmit={onSubmitHandler}>
               <Title titlename= 'Verification' linelength='100px' height= '10vh'/>
                <FormGrid>
                    <RegistrationInput placeholder='Email address' type='email' onChange={onEmailChange}/>
                    <RegistrationInput placeholder='Verification Code' type='text' onChange={onVCodeChange} />
                    <RegistrationInput placeholder='Username' type='text' onChange={onUsernameChange}/>
                    <RegistrationInput placeholder='Location' type='text' onChange={onLocationChange}/>
                    <RegistrationInput placeholder='Password' type='password' onChange={onPasswordChange}/>
                    <RegistrationInput placeholder='Password repeat' type='password' onChange={onPasswordRepeatChange}/>
                </FormGrid>
                    <FinishRegButton>
                        Finish Registration
                    </FinishRegButton>
        </VerifyWrapper>
    )
}

export default Verification
