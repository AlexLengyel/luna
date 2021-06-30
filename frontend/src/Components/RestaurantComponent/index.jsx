import styled from "styled-components";
import mock_image from "../../Assets/images/mock_image.png"
import {ListLine, ListWrapper} from "../../Style/container";

const ListWrapperRestaurant = styled(ListWrapper)`
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

const StarsWrapper = styled.div`
  height: fit-content;
  margin: 2% 5%;
  display: flex;
  justify-content: space-between;
`

const RestaurantComponent = () => {
    return (
        <ListWrapperRestaurant>
            <ListLine/>
            <h1>Restaurant Name</h1>
            <h2>Address</h2>
            <StarsWrapper>
                <p>Stars</p>
                <p>72</p>
            </StarsWrapper>
            <img src={mock_image} alt={"restaurant"}/>
        </ListWrapperRestaurant>
    )
}

export default RestaurantComponent;
