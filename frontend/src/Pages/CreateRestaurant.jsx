import styled from "styled-components";
import { Button } from "../Style/GlobalButtons";
import Title from "../Components/BaseTitle";
import { BaseInput } from "../Components/BaseInput";
import {useState} from 'react';
import { CreateRestaurantWrapper } from "../Style/container";
import { useForm } from "react-hook-form";


const InputSection = styled.div `
    display: grid;
    grid-template-columns: repeat(3, 1fr);  
    grid-template-rows: repeat(4, 1fr);
    column-gap: 2vw;
    align-items: flex-end;
    margin-top: 5vh;
`

const ButtonWrapper =styled.div`
    max-height: 56px;
    display: flex;
    justify-content: space-around;
    margin-top: 7vh;
`

const SubmitButton = styled(Button)`
    width: 14vw;
    min-width: 100px;
    border-radius: 28px;
`
const UploadButton = styled(Button)`
    width: 14vw;
    min-width: 100px;
    border-radius: 28px;
    margin-bottom: 20px;
`

const SelectInput = styled.select`
    outline: none;
    margin-bottom: 18px;
    border: ${props => props.theme.whisper} 1px solid;
    border-radius: 3px;
    padding: 10px 30px;
    color: ${props => props.theme.lightSilver};
`

const InputWrapper = styled.label`
    display: flex;
    flex-direction: column;
    align-content: bottom;
`

const SectionTitle = styled.p`
    padding-bottom: 5px;
`

const InputTitle = styled.p`
    font-weight: ${(props) => props.theme.textWeightBold};
    color: ${props => props.theme.nobel};
    padding-bottom: 5px;
    padding-top: 5px;
`
const UploadLabel = styled.label`
    color: ${props => props.theme.backgroundWhite};
    font-size: ${(props) => props.theme.textSizeM};
`



const CreateRestaurant = () => {

	const changeHandler = (event) => {
        
	};

    const submitHandler = (event) => {

	};

    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    return(
        <CreateRestaurantWrapper>
            <Title titlename="CREATE NEW RESTAURANT" linelength="200px" height="10vh"/>
            <InputSection>
                <InputWrapper>
                    <SectionTitle>Basic</SectionTitle>
                    <InputTitle>Name *</InputTitle>
                    <BaseInput placeholder='' required/>
                </InputWrapper>
                <InputWrapper>
                    <InputTitle>Category *</InputTitle>
                    <SelectInput required>
                        <option value="" selected disabled hidden>Select a value...</option>
                        <option value="Category 1">Category 1</option>
                        <option value="Category 2">Category 2</option>
                        <option value="Category 3">Category 3</option>
                    </SelectInput>
                </InputWrapper>
                <InputWrapper>
                    <InputTitle>Country *</InputTitle>
                    <SelectInput required>
                        <option value="" selected disabled hidden>Select a value...</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Austria">Austria</option>
                        <option value="Germany">Germany</option>
                        <option value="Italy">Italy</option>
                    </SelectInput>                
                </InputWrapper>
                <InputWrapper> 
                    <SectionTitle>Address</SectionTitle>
                    <InputTitle>Street *</InputTitle>
                    <BaseInput placeholder='' required/>
                </InputWrapper>
                <InputWrapper><InputTitle>City *</InputTitle>
                    <BaseInput placeholder='' required/>
                </InputWrapper>
                <InputWrapper><InputTitle>Zip</InputTitle>
                    <BaseInput placeholder=''/>
                </InputWrapper>
                <InputWrapper>
                    <SectionTitle>Contact</SectionTitle>
                    <InputTitle>Website</InputTitle>
                    <BaseInput placeholder=''/>
                </InputWrapper>
                <InputWrapper><InputTitle>Phone *</InputTitle>
                    <BaseInput placeholder='' required/>
                </InputWrapper>
                <InputWrapper><InputTitle>Email</InputTitle>
                    <BaseInput placeholder=''/>
                </InputWrapper>
                <InputWrapper>
                    <SectionTitle>Details</SectionTitle>
                    <InputTitle>Opening hours *</InputTitle>
                    <BaseInput placeholder='' required/>
                </InputWrapper>
                <InputWrapper><InputTitle>Price level</InputTitle>
                    <SelectInput>
                        <option value="" selected disabled hidden>Select a value...</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                    </SelectInput>
                </InputWrapper>
                <InputWrapper>
                    <InputTitle>Image</InputTitle>                       
                    <UploadButton>
                        <UploadLabel>
                            <input hidden type="file" accept="image/png, image/jpg" onChange={changeHandler}/>                    
                            CHOOSE A FILE...
                        </UploadLabel>
                    </UploadButton>
                </InputWrapper>    
            </InputSection>
            <ButtonWrapper>
                <SubmitButton onclick={submitHandler}>
                    Submit
                </SubmitButton>
            </ButtonWrapper>
        </CreateRestaurantWrapper>
    )
}

export default CreateRestaurant;