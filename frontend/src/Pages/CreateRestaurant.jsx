import styled from "styled-components";
import { Button } from "../Style/GlobalButtons";
import Title from "../Components/BaseTitle";
import { BaseInput } from "../Components/BaseInput";
import { CreateRestaurantWrapper } from "../Style/container";
import { useForm } from "react-hook-form";


const InputSection = styled.form `
    display: grid;
    grid-template-columns: repeat(3, 1fr);  
    grid-template-rows: repeat(4, 1fr);
    column-gap: 2vw;
    row-gap: 1vw;
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

const ErrorMessage = styled.span`
    margin-top: -15px;
    color: ${props => props.theme.red};
    font-size: ${(props) => props.theme.textSizeXS};
`

const CreateRestaurant = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();
    const onSubmit = data => {
        let newrestaurant = new FormData();
        newrestaurant.append("name", data.name);
        newrestaurant.append("category", data.category);
        newrestaurant.append("country", data.country);
        newrestaurant.append("street", data.street);
        newrestaurant.append("city", data.city);
        newrestaurant.append("zip", data.zip);
        newrestaurant.append("website", data.website);
        newrestaurant.append("phone", data.phone);
        newrestaurant.append("email", data.email);
        newrestaurant.append("opening_hours", data.opening_hours);
        newrestaurant.append("price_level", data.price_level);
        newrestaurant.append("image", data.image[0]);
        console.log(data)

        //Connection to the database here
    } 
    
    return(
        <CreateRestaurantWrapper>
            <Title titlename="CREATE NEW RESTAURANT" linelength="200px" height="10vh"/>
            <InputSection onSubmit={handleSubmit(onSubmit)} id="form1" >
                <InputWrapper>
                    <SectionTitle>Basic</SectionTitle>
                    <InputTitle>Name *</InputTitle>
                    <BaseInput placeholder='' {...register("name", { required: true })} />
                    <br />{errors.name && <ErrorMessage>This field is required</ErrorMessage>}<br />
                </InputWrapper>
                <InputWrapper>
                    <InputTitle>Category *</InputTitle>
                    <SelectInput {...register("category", { required: true })} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled hidden>Select a value...</option>
                        <option value="Category 1">Category 1</option>
                        <option value="Category 2">Category 2</option>
                        <option value="Category 3">Category 3</option>
                    </SelectInput>
                </InputWrapper>
                <InputWrapper>
                    <InputTitle>Country *</InputTitle>
                    <SelectInput {...register("country", { required: true })} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled hidden>Select a value...</option>
                        <option value="Switzerland">Switzerland</option>
                        <option value="Austria">Austria</option>
                        <option value="Germany">Germany</option>
                        <option value="Italy">Italy</option>
                    </SelectInput>                
                </InputWrapper>
                <InputWrapper> 
                    <SectionTitle>Address</SectionTitle>
                    <InputTitle>Street *</InputTitle>
                    <BaseInput placeholder='' {...register("street", { required: true })} />
                    <br />{errors.street && <ErrorMessage>This field is required</ErrorMessage>}<br />
                </InputWrapper>
                <InputWrapper><InputTitle>City *</InputTitle>
                    <BaseInput placeholder='' {...register("city", { required: true })} />
                    <br />{errors.city && <ErrorMessage>This field is required</ErrorMessage>}<br />
                </InputWrapper>
                <InputWrapper><InputTitle>Zip</InputTitle>
                    <BaseInput placeholder='' {...register("zip", { required: false })}/>
                </InputWrapper>
                <InputWrapper>
                    <SectionTitle>Contact</SectionTitle>
                    <InputTitle>Website</InputTitle>
                    <BaseInput placeholder='' {...register("website", { required: false })}/>
                </InputWrapper>
                <InputWrapper><InputTitle>Phone *</InputTitle>
                    <BaseInput placeholder='' {...register("phone", { required: true })} pattern="[0-9]+"/>
                    <br />{errors.phone && <ErrorMessage>This field is required</ErrorMessage>}<br />
                </InputWrapper>
                <InputWrapper><InputTitle>Email</InputTitle>
                    <BaseInput placeholder='' {...register("email", { required: false })}/>
                </InputWrapper>
                <InputWrapper>
                    <SectionTitle>Details</SectionTitle>
                    <InputTitle>Opening hours *</InputTitle>
                    <BaseInput placeholder='' {...register("opening_hours", { required: true })} />
                    <br />{errors.opening_hours && <ErrorMessage>This field is required</ErrorMessage>}<br />
                </InputWrapper>
                <InputWrapper><InputTitle>Price level</InputTitle>
                    <SelectInput {...register("price_level", { required: false })} defaultValue={'DEFAULT'}>
                        <option value="DEFAULT" disabled hidden>Select a value...</option>
                        <option value="$">$</option>
                        <option value="$$">$$</option>
                        <option value="$$$">$$$</option>
                    </SelectInput>
                </InputWrapper>
                <InputWrapper>
                    <InputTitle>Image</InputTitle>                       
                    <UploadButton>
                        <UploadLabel>
                            <input hidden type="file" accept="image/png, image/jpg" {...register("image", { required: false })}/>                    
                            CHOOSE A FILE...
                        </UploadLabel>
                    </UploadButton>
                </InputWrapper>       
            </InputSection>
            <ButtonWrapper>
                <SubmitButton type="submit" value="Submit" form="form1">
                    Submit
                </SubmitButton>
            </ButtonWrapper>
        </CreateRestaurantWrapper>
    )
}

export default CreateRestaurant;