import styled from "styled-components";
import mock_image from "../../Assets/images/mock_image.png"
import {ListLine, ListWrapper} from "../../Style/container";
import StarSystem from "../StarSystem";

const ListWrapperRestaurant = styled(ListWrapper)`
  h1 {
    font-size: 20px;
    margin: 4% 5% 2% 5%;
  }

  h2 {
    font-size: 18px;
    margin: 2% 5%;
  }

  .restaurant_img {
    width: 100%;
    margin-top: 2%;
  }
`

const StarsWrapper = styled.div`
  height: fit-content;
  margin: 2% 5%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const RestaurantComponent = () => {
    return (
        <ListWrapperRestaurant>
            <ListLine/>
            <h1>Restaurant Name</h1>
            <h2>Address</h2>
            <StarsWrapper>
                <StarSystem rating={"7"}/>
                <p>72</p>
            </StarsWrapper>
            <img className={"restaurant_img"} src={mock_image} alt={"restaurant"}/>
        </ListWrapperRestaurant>
    )
}

export default RestaurantComponent;
