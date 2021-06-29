import styled from "styled-components";
import mock_image from "../../Assets/images/mock_image.png"

const Wrapper = styled.div`
  height: 410px;
  width: 271px;
  border: 1px solid ${props => props.theme.whisper};
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${props => props.theme.backgroundWhite};
  
  h1 {
    font-size: 20px;
    margin: 4% 5% 2% 5%;
  }
  
  h2 {
    font-size: 18px;
    margin: 2% 5%;
  }
  
  img {
    width: 100%;
    margin-top: 2%;
  }
`

const Line = styled.div`
  height: 8px;
  width: 100%;
  background: ${props => props.theme.orange};
  border-radius: 3px 3px 0 0;
`
const Stars = styled.div`
  height: fit-content;
  margin: 2% 5%;
  display: flex;
  justify-content: space-between;
`

const RestaurantComponent = () => {
    return (
        <Wrapper>
            <Line/>
            <h1>Restaurant Name</h1>
            <h2>Address</h2>
            <Stars>
                <p>Stars</p>
                <p>72</p>
            </Stars>
            <img src={mock_image} alt={"restaurant"} />
        </Wrapper>
    )
}

export default RestaurantComponent;