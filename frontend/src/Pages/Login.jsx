import styled from "styled-components";
import { Button } from "../Style/GlobalButtons";
import Title from "../Components/BaseTitle";
import { BaseInput } from "../Components/BaseInput";
import { useHistory } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import Axios from "../helpers/axios";

const FormWrapper =styled.div`
    display: flex;
    justify-content: space-around;
    flex-direction: column;
    align-content:space-between;
    align-items: center;
    height: 60vh;
    `

const InputWrapper = styled.div `
    display: flex;
    height: 15vh;
    width: 20vw;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    margin-top: 7vh;
    `


const ButtonWrapper =styled.div`
    max-height: 56px;
    display: flex;
    justify-content: space-around;
    margin-top: 7vh;
    `

const LogingButton = styled(Button)`
    width: 14vw;
    min-width: 100px
    `


const Login = () => {

    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const dispatch = useDispatch();
    const history = useHistory();

    const onUsernameChange = (event) => {
        setUsername(event.target.value);
      };
    
    const onPasswordChange = (event) => {
        setPassword(event.target.value);
      };

    const onHandleSubmit = async () => {
        const url = "auth/token/";
        const body = {
          username: username,
          password: password,
        };

        try {
            const resp = await Axios.post(url, body);
            if (resp.status === 200) {
              setUsername("");
              setPassword("");
      
              dispatch({
                type: 'auth/login',
                payload: resp.data,
              });

              localStorage.setItem("token", resp.data.access);
              history.push("/");
            }
          } catch (err) {
            if (err.response.status === 400) {
              console.log(err.response);
            }
        }
    };
    
    
    return(
        <FormWrapper>
            <Title titlename="LOGIN" linelength="100px"/>
            <InputWrapper>
                <BaseInput placeholder='Username' type='username' required= 'This field is required' onChange={onUsernameChange}/>
                <BaseInput placeholder='Password' type='password' required= 'This field is required' onChange={onPasswordChange}/>
            </InputWrapper>
            <ButtonWrapper>
                <LogingButton onClick={onHandleSubmit}>
                     Login
                </LogingButton>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default Login;