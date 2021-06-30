import styled from "styled-components";
import { Button } from "../Style/GlobalButtons";
import Title from "../Components/BaseTitle";
import { BaseInput } from "../Components/BaseInput";

const FormWrapper =styled.div`
    display: flex;
    height: 80vh;
    justify-content: space-around;
    flex-direction: column;
    align-items: center;
`

const InputWrapper = styled.div `
    display: grid;  
    grid-template-rows: repeat(8, 1fr);
    height: 60vh;
    width: 80vw;
    margin-top: 5vh;
    `


const ButtonWrapper =styled.div`
    max-height: 56px;
    display: flex;
    justify-content: space-around;
    margin-top: 7vh;
`

const SearchButton = styled(Button)`
    width: 14vw;
    min-width: 100px;
    border-radius: 28px;
`
const SelectInput = styled.select`
    outline: none;
    margin-bottom: 18px;
    border: ${props => props.theme.whisper} 1px solid;
    border-radius: 3px;
    padding: 10px 30px;
    color: ${props => props.theme.lightSilver};
`

const InputLabel = styled.label`
    display: flex;
    flex-direction: column;
    align-items: space-between;
    `

const BasicWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2vw;
`

const AdressWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2vw;
`

const ContactWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2vw;
`
const DetailWrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 2vw;
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

const CreateRestaurant = () => {
    return(
        <FormWrapper>
            <Title titlename="CREATE NEW RESTAURANT" linelength="200px" height="10vh"/>
            <InputWrapper>
                <SectionTitle>Basic</SectionTitle>
                <BasicWrapper>
                    <InputLabel><InputTitle>Name *</InputTitle>
                        <BaseInput placeholder='' required/>
                    </InputLabel>
                    <InputLabel><InputTitle>Category *</InputTitle>
                        <SelectInput required>
                            <option value="" selected disabled hidden>Select a value...</option>
                            <option value="Category 1">Category 1</option>
                            <option value="Category 2">Category 2</option>
                            <option value="Category 3">Category 3</option>
                        </SelectInput>
                    </InputLabel>
                    <InputLabel><InputTitle>Country *</InputTitle>
                        <SelectInput required>
                            <option value="" selected disabled hidden>Select a value...</option>
                            <option value="Switzerland">Switzerland</option>
                            <option value="Austria">Austria</option>
                            <option value="Germany">Germany</option>
                            <option value="Italy">Italy</option>
                        </SelectInput>                
                    </InputLabel>
                </BasicWrapper>
                <SectionTitle>Address</SectionTitle>
                <AdressWrapper>
                    <InputLabel><InputTitle>Street *</InputTitle>
                        <BaseInput placeholder='' required/>
                    </InputLabel>
                    <InputLabel><InputTitle>City *</InputTitle>
                        <BaseInput placeholder='' required/>
                    </InputLabel>
                    <InputLabel><InputTitle>Zip</InputTitle>
                        <BaseInput placeholder=''/>
                    </InputLabel>
                </AdressWrapper>
                <SectionTitle>Contact</SectionTitle>
                <ContactWrapper>
                    <InputLabel><InputTitle>Website</InputTitle>
                        <BaseInput placeholder=''/>
                    </InputLabel>
                    <InputLabel><InputTitle>Phone *</InputTitle>
                        <BaseInput placeholder='' required/>
                    </InputLabel>
                    <InputLabel><InputTitle>Email</InputTitle>
                        <BaseInput placeholder=''/>
                    </InputLabel>
                </ContactWrapper>
                <SectionTitle>Details</SectionTitle>
                <DetailWrapper>
                    <InputLabel><InputTitle>Opening hours *</InputTitle>
                        <BaseInput placeholder='' required/>
                    </InputLabel>
                    <InputLabel><InputTitle>Price level</InputTitle>
                        <SelectInput>
                            <option value="" selected disabled hidden>Select a value...</option>
                            <option value="$">$</option>
                            <option value="$$">$$</option>
                            <option value="$$$">$$$</option>
                        </SelectInput>
                    </InputLabel>
                    <InputLabel><InputTitle>Image</InputTitle>
                        <SearchButton >
                            CHOOSE A FILE...
                        </SearchButton>
                    </InputLabel>
                </DetailWrapper>
            </InputWrapper>
            <ButtonWrapper>
                <SearchButton >
                    Search
                </SearchButton>
            </ButtonWrapper>
        </FormWrapper>
    )
}

export default CreateRestaurant;