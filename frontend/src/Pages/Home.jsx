import styled from "styled-components";
import banner from "../Assets/images/banner.png"
import RestaurantComponent from "../Components/RestaurantComponent";
import {Button} from "../Style/GlobalButtons";
import Title from "../Components/BaseTitle";
import {RestaurantsWrapper} from "../Style/container";

const Search = styled.form`
  height: 20vh;
  width: 100%;
  background-image: linear-gradient(rgba(0, 0, 0, 0.35), rgba(0, 0, 0, 0.35)), url(${banner});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
  
  input {
    height: 20%;
    width: 25%;
    margin-right: 2%;
    border-radius: 3px;
    border: none;
    font-size: 16px;
    padding: 0 10px;
  }
  
  button {
    height: 20%;
    width: 7%;
    border-radius: 28px;
  }
`

const Home = () => {
    return (
        <>
            <Search>
                <input type="text" placeholder={"Search..."}/>
                <Button>Search</Button>
            </Search>
            <Title titlename="BEST RATED RESTAURANTS" linelength="270px" height="10vh"/>
            <RestaurantsWrapper>
                <RestaurantComponent/>
                <RestaurantComponent/>
                <RestaurantComponent/>
                <RestaurantComponent/>
            </RestaurantsWrapper>
        </>
    )
}

export default Home;