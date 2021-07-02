import styled from "styled-components";
import StarSystem from "../../StarSystem";
import {useEffect, useState} from "react";
import Axios from "../../../helpers/axios";

const Wrapper = styled.div`
  height: 148px;
  width: 100%;
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #EBEBEB;
  margin-top: 20px;
  overflow: hidden;
  
  .title {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }
  
  span {
    margin-top: 20px;
  }
`

const ReviewProfile = (props) => {
    return (
        <Wrapper>
            <div className={"title"}>
                <h1>Läderach Chocolatier Suisse</h1>
                <p>01.01.2018 15:22</p>
            </div>
            <StarSystem rating={4}/>
            <span>This location at the Bahnhofstrasse is quite friendly and easily located across the street from the train station.
                The people there seem to be quite good and helpful in their service. </span>
        </Wrapper>
    )
}

const ReviewsProfile = (props) => {

    const [review, setReview] = useState(null);

    useEffect(() => {
        async function fetchUser() {
            const url = `reviews/user/${props.user_id}/`;
            const config = {
                headers: {Authorization: `Bearer ${localStorage.getItem('token')}`},
            };
            try {
                const resp = await Axios.get(url, config);
                if (resp.status === 200) {
                    setReview(resp.data);
                }
            } catch (err) {
                if (err.response.status === 400) {
                    console.log(err.response);
                }
            }
        }

        fetchUser()
    }, [props.user_id]);

    console.log(review)

    return (
        <>
            <h1>REVIEWS</h1>
            { review ? review.map((item, index) => <ReviewProfile key={`${index}-${item.id}`} review={item}/>): <h1>No reviews</h1>}
        </>
    )
}

export default ReviewsProfile