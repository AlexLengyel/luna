import banner from "../Assets/images/banner.png";
import styled from "styled-components";
import StarSystem from "../Components/StarSystem";
import {Button} from "../Style/GlobalButtons";
import StarRating from "../Components/StarRating";
import Rating from "../Components/StarRating";

const Banner = styled.div`
  height: 25vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5vh 10%;
  
  h1 {
    color: white;
    font-size: ${props => props.theme.textSizeXXL};
    font-weight: ${props => props.theme.textWeightBold};
  }
  
  h2 {
    color: white;
    font-size: ${props => props.theme.textSizeXL};
    font-weight: ${props => props.theme.textWeightThin};
  }
  
  p {
    color: white;
    font-weight: ${props => props.theme.textWeightThin};
  }
  .stars {
    display: flex;
    align-items: center;
    
    p {
      margin-left: 30px;
    }
  }
`

const ReviewWrapper = styled.form`
  width: 100%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 5vh 20%;
  
  textarea {
    height: 20vh;
    padding: 5px;
    resize: none;
  }
`

const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`

const SubmitButton = styled(Button)`
  border-radius: 28px;
  color: black;
  height: 50px;
  width: 15%;
`

const NewReview = () => {
    return (
        <>
            <Banner>
                <h1>Läderach Chocolatier Suisse</h1>
                <h2>Chocolatiers & Shops</h2>
                <div className={"stars"}>
                    <StarSystem rating={"7"}/>
                    <p>68 reviews</p>
                </div>
            </Banner>
            <ReviewWrapper>
                <StarRating/>
                <textarea  placeholder={"Your review helps others learn about great local businesses. \n" +
                "\n" +
                "Please don't review this business if you received a freebie for writing this review, or if you're connected in any way to the owner or employees."}/>
                <ButtonWrapper>
                    <SubmitButton type={"submit"}>SUBMIT</SubmitButton>
                </ButtonWrapper>
            </ReviewWrapper>
        </>
    )
}

export default NewReview;