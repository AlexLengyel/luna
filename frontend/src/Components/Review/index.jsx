import mock_image from "../../Assets/images/mock_image.png";
import styled from "styled-components";
import {Button} from "../../Style/GlobalButtons";
import like_icon from "../../Assets/svgs/like.svg"
import StarSystem from "../StarSystem"
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Axios from "../../helpers/axios";


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
justify-content: space-between;
flex-direction: row;

img {
  width: 66px;
}
.stars {
    padding: 20px 10px;
    width: 30%;
    height: 100%;
    padding-right: 40%;
}

.created {
    padding-top: 1%;
    padding-right: 1%;
    font-size: ${props => props.theme.textSizeM};
}

.user {
  height: 100%;
  width: 145px;
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

const ReviewComponent = (id) => {
  const token = useSelector((state) => state.token);
  const dispatch = useDispatch();
  const review = useSelector((state) => state.review);
  

  useEffect( (id) => {
      
      async function fetchReview() {
        const url = `reviews/${id}/`;
        const config = {
          headers: { Authorization: `Bearer ${token}` },
        };
        try {
          const resp = await Axios.get(url, config);
          if (resp.status === 200) {
              dispatch({
                  type: "setReview",
                  payload: resp.data,
                });
          }
        } catch (err) {
          if (err.response.status === 400) {
              console.log(err.response);
            }      
        }
      }
      fetchReview();
    }, [dispatch, token]);


    return (
        <ReviewWrapper>
            <Header>
                <img src={mock_image} alt={"restaurant"}/>
                <div className={"user"}>
                    <h1>{review.user.first_name}{review.user.last_name}</h1>
                    <h2>{review.user.user_reviews} Reviews in total</h2>
                </div>
                <div className={"stars"}>
                    <StarSystem rating={review.rating}/>
                </div>
                <p className={"created"}>{review.created}</p>
            </Header>
            <ReviewContent>
                <p>{review.content}</p>
            </ReviewContent>     
            <ReviewFooter>
                <ButtonWrapper>
                    <LikeButton>
                        <img src={like_icon} alt={"like icon"}/>
                        <p>Like</p>
                        <p>{review.liked_by.length}</p>
                    </LikeButton>
                    <CommentButton>
                        <p>Comment</p>
                        <p>{review.comments.length}</p>
                    </CommentButton>
                </ButtonWrapper>
                <div className={"comment_all"}>View all comments</div>
            </ReviewFooter>
        </ReviewWrapper>
    )
}

export default ReviewComponent;