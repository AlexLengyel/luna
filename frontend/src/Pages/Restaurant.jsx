import styled from "styled-components"
import laederach from "../Assets/images/DSC_0213.png"
import StarSystem from "../Components/StarSystem"
import ReviewsSearchComponent from "../Components/Search/ReviewsSearch"
import { Button } from "../Style/GlobalButtons"

const RestaurantWrapper = styled.div`
    width: 100%;
    display: flex; 
    justify-content: space-around;
    flex-direction: column;
`

const Uppercontainer = styled.div`
    height: 40vh;
    border: green solid;
    background-image: url(${laederach});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: top;
    justify-content: center;
`

const Lowercontainer = styled.div`
    border: blue solid;
    width: 80vw;

`
const BannerWrapper = styled.div`
    height: 20vh;
    width: 100%;
    background-color: rgb(0,0,0,0.5);
    display: flex;
    justify-content: space-between;
`
const InfoTab = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column; 
    margin: 5vw;
    
    div {
        display: flex;
        justify-content: space-between;
    }

    h1 {
        color: white;
    }

    h2 {
        color: white;
    }
`

const LocationTab = styled.div`
    width: 80%;
    height: 30vh;
    background-color: white;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column; 
    margin: 5vw;
    
    div {
        display: flex;
        justify-content: space-between;
    }

`
const Map = styled.div`
    height: 50%;
    background-image: url(${laederach});
`
const Leftcontainer = styled.div`
    width: 50%;
`

const Rightcontainer = styled.div`
    width: 50%;
`

const SearchBar = styled.form`
  height: 100%;
  width: 80%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 2%;

  input {
    border: none;
    outline: none;
    width: 40%;
  }
`

const FilterButton = styled(Button)`
  border-radius: 28px;
`
 
const Restaurant = () => {
    return(
        // <h1>Restaurant Page</h1>
        <RestaurantWrapper>
            <Uppercontainer>
                <BannerWrapper>
                    <InfoTab>
                        <h1>Läderach Chocolatier Suisse</h1>
                        <h2>Chocolatiers & Shops</h2>
                        <div className={"stars"}>
                            <StarSystem rating={"7"}/>
                            <p>68 reviews</p>
                        </div>
                    </InfoTab>
                    <LocationTab>
                        <Map/>
                        <p>Bahnhofstrasse 106</p>
                        <p>+41 44 211 53 72</p>  
                        <p>laederach.com</p>  
                    </LocationTab>
                </BannerWrapper>
           </Uppercontainer>
            <Lowercontainer>
                <Leftcontainer>
                    <SearchBar>
                        <input type={"text"} placeholder={"Filter list..."}/>
                    </SearchBar>
                    <FilterButton>Filter</FilterButton>
                    <ReviewsSearchComponent/>
                                   <ReviewsSearchComponent/>
                                   <ReviewsSearchComponent/>
                                   <ReviewsSearchComponent/>
                                   <ReviewsSearchComponent/>
                                   <ReviewsSearchComponent/>
                </Leftcontainer>
                <Rightcontainer>

                </Rightcontainer>
            </Lowercontainer>
            
        </RestaurantWrapper>
    )
}

export default Restaurant;