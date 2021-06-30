import mock_image from "../../../Assets/images/mock_image.png";
import {ListContent, ListLine, ListUser, ListWrapper} from "../../../Style/container";
import styled from "styled-components";
import {Button} from "../../../Style/GlobalButtons";
import like_icon from "../../../Assets/svgs/like.svg"

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
  width: 100%;
  height: fit-content;
  display: flex;
  justify-content: center;
  
  p {
      font-size: ${props => props.theme.textSizeM};
      color: white;
  }
`

const ReviewsSearchComponent = () => {
    return (
        <ListWrapper>
            <ListLine/>
            <ListUser>
                <img src={mock_image} alt={"restaurant"}/>
                <div className={"user"}>
                    <h1>Laurent H.</h1>
                    <h2>6 Reviews in total</h2>
                </div>
            </ListUser>
            <ListContent>
                <h1>Colinz Bar</h1>
                <h2>Ugh. Don't waste your time. Pizza dough good, thin crust but ingredients so so. Side of mixed vegetables very oily and mainly bell... read
                    more</h2>
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
                <p className={"latest_comments"}>Latest comments</p>
                <div className={"comment"}>
                    <p className={"comment_user"}>Colin Wirz</p>
                    <p className={"comment_text"}>Actually you have no taste!</p>
                </div>
                <div className={"comment"}>
                    <p className={"comment_user"}>Laurent Meyer</p>
                    <p className={"comment_text"}>Sorry bro!</p>
                </div>
            </ListContent>
        </ListWrapper>
    )
}

export default ReviewsSearchComponent;
