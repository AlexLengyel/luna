import styled from "styled-components";
import { Button } from "../Store/GlobalButtons";
import Title from "../Components/BaseTitle";
import { BaseInput } from "../Components/BaseInput";

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

    const onUsernameChange = (event) => {
        setEmail(event.target.value);
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