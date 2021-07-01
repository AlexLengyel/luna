import mock_image from "../../Assets/images/mock_image.png";
import {ListContent, ListLine, ListUser} from "../../Style/container";
import styled from "styled-components";
import {Button} from "../../Style/GlobalButtons";
import like_icon from "../../Assets/svgs/like.svg"
import StarSystem from "../StarSystem"


const ReviewWrapper =  styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background: ${props => props.theme.backgroundWhite};
    margin-bottom: 25px;
 `

const LikeButton = styled(Button)`
  height: 33px;
  width: 49%;
  border-radius: 28px 0 0 28px;
  margin-right: 1px;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${props => props.theme.mediumGrey60};
`
const CommentButton = styled(Button)`
  height: 33px;
  width: 49%;
  border-radius: 0 28px 28px 0;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background: ${props => props.theme.mediumGrey60};
`
const ButtonWrapper = styled.div`
  width: 50%;
  min-width: 200px;
  height: fit-content;
  display: flex;
  justify-content: center;
  padding: 2% 2%;
  p {
      font-size: ${props => props.theme.textSizeM};
      color: white;
  }
`

const ReviewFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center; 
  div {
      padding-right: 3%; 
  }
  .comment_all {
    color: ${props => props.theme.orange};
    font-size: ${props => props.theme.textSizeS};
    font-weight: ${props => props.theme.textWeightBold};
  }
`
const ReviewContent = styled.div`

`
const Header = styled.div`
height: 70px;
width: 100%;
border-bottom: 1px solid ${props => props.theme.whisper};
display: flex;

img {
  width: 66px;
}
.stars {
    padding: 20px 10px;
    width: 30%;
    height: 10%;
}

.created {
    font-size: ${props => props.theme.textSizeM};
}

.user {
  height: 100%;
  width: 205px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  padding: 0 10px;

  h1 {
    color: ${props => props.theme.orange};
    font-weight: ${props => props.theme.textWeightBold};
  }

  h2 {
    font-size: ${props => props.theme.textSizeS};
    font-weight: ${props => props.theme.textWeightBold};
  }
}
`

const ReviewComponent = () => {
    return (
        <ReviewWrapper>
            <Header>
                <img src={mock_image} alt={"restaurant"}/>
                <div className={"user"}>
                    <h1>Laurent H.</h1>
                    <h2>6 Reviews in total</h2>
                </div>
                <div className={"stars"}>
                    <StarSystem rating={"7"}/>
                </div>
                <p className={"created"}>01.01.2018 15:22 </p>
            </Header>
            <ReviewContent>
                <p>This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station. The people there seem to be quite good and helpful in their service.</p>
            </ReviewContent>     
            <ReviewFooter>
                <ButtonWrapper>
                    <LikeButton>
                        <img src={like_icon} alt={"like icon"}/>
                        <p>Like</p>
                        <p>23</p>
                    </LikeButton>
                    <CommentButton>
                        <p>Comment</p>
                        <p>23</p>
                    </CommentButton>
                </ButtonWrapper>
                <div className={"comment_all"}>View all comments</div>
            </ReviewFooter>
        </ReviewWrapper>
    )
}

export default ReviewComponent;