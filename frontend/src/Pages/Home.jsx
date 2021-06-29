import styled from "styled-components";
import banner from "../Assets/images/banner.png"
import RestaurantComponent from "../Components/RestaurantComponent";
import {Button} from "../Style/GlobalButtons";

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

const Title = styled.div`
  height: 10vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  
  h1 {
    font-size: ${props => props.theme.textSizeXL};
    font-weight: ${props => props.theme.textWeightBold};
  }
`

const Line = styled.div`
  height: 3px;
  width: 270px;
  margin-top: 3vh;
  background: ${props => props.theme.orange};
`

const Restaurants = styled.div`
  height: fit-content;
  width: 80%;
  display: flex;
  padding: 2% 0;
  margin: 0 10%;
  justify-content: space-evenly;
  flex-wrap: wrap;
`

const Home = () => {
    return (
        <>
            <Search>
                <input type="text" placeholder={"Search..."}/>
                <Button>Search</Button>
            </Search>
            <Title>
                <h1>BEST RATED RESTAURANTS</h1>
                <Line/>
            </Title>
            <Restaurants>
                <RestaurantComponent/>
                <RestaurantComponent/>
                <RestaurantComponent/>
                <RestaurantComponent/>
            </Restaurants>
        </>
    )
}

export default Home;