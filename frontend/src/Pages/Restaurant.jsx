import styled from "styled-components"
import laederach from "../Assets/images/DSC_0213.png"
import pin from "../Assets/svgs/pin.svg"
import money from "../Assets/svgs/money.svg"
import clock from "../Assets/svgs/clock.svg"
import phone from "../Assets/svgs/phone.svg"
import laptop from "../Assets/svgs/laptop.svg"
import screenshot from "../Assets/svgs/screenshot.svg"
import StarSystem from "../Components/StarSystem"
import ReviewsSearchComponent from "../Components/Search/ReviewsSearch"
import { Button } from "../Style/GlobalButtons"
import { RestaurantsWrapper } from "../Style/container"
import { useHistory } from "react-router-dom"


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
    align-items: center;
    border: blue solid 2px;
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
        
        p{
            color: white;
        }
        
    }

    h1 {
        color: white;
    }

    h2 {
        color: white;
    }
`

const LocationTab = styled.div`
    width: 40%;
    min-width: 200px;
    height: 170%;
    max-height: 140%
    min-height: 200px;
    background-color: white;
    display: flex;
    justify-content: center;
    flex-direction: column; 
    margin-top: 10%;
    margin-right: 5vw;  

    p {
        font-size: 16px
    }
    img {
        height: 80%;
        width: auto;
    }

`
const Map = styled.div`
    height: 50%;
    background-image: url(${screenshot});
`
const Leftcontainer = styled.div`
    width: 50%;
    border: red solid;
`

const Rightcontainer = styled.div`
    width: 50%;
    height: 40vh;
    display: flex;
    justify-content: center;
    flex-direction column;
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
const InfoWrapper = styled.div`
  width: 90%;
  height: 40vh; 
  background-color: ${(props) => props.theme.whitesmoke}
  display: flex;
  justify-content: center;
  `
const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5% 5%;
`
const WriteReviewBtn = styled(Button)`
  border-radius: 28px;
  width: 40%;
`

const EditDataBtn = styled(Button)`
  border-radius: 28px;
  width: 40%;

` 

const DetailInfoWrapper = styled.div`
  display: grid;
  grid-template-columns: 0.15fr 1fr;
  padding: 2% 5%;

  p {
      font-weight: ${(props)=> props.theme.textWeightThin}
  }
`
const DetailWrapperBorder = styled(DetailInfoWrapper)`
    border-top: ${(props)=> props.theme.lightSilver} 1px solid;

`
const Restaurant = () => {
    const history = useHistory();

    const reviewHandler = () =>{
        history.push("/newreview");
    }

    const editHandler = () =>{
        history.push("/createrestaurant");
    }
    return(
        // <h1>Restaurant Page</h1>
        <>
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
                        <DetailInfoWrapper>
                            <img src={pin} alt="pin"/><p>Bahnhofstrasse 106</p>
                        </DetailInfoWrapper>
                        <DetailInfoWrapper>
                            <img src={phone} alt="phone"/><p>+41 44 211 53 72</p> 
                        </DetailInfoWrapper>
                        <DetailInfoWrapper>
                            <img src={laptop} alt="laptop"/>  <p>laederach.com</p>  
                        </DetailInfoWrapper>
                    </LocationTab>
                </BannerWrapper>
           </Uppercontainer>
           <RestaurantsWrapper>
                <Leftcontainer>
                    {/* <SearchBar>
                        <input type={"text"} placeholder={"Filter list..."}/>
                    </SearchBar>
                    <FilterButton>Filter</FilterButton>
                    <ReviewsSearchComponent/>
                                   <ReviewsSearchComponent/>
                                   <ReviewsSearchComponent/>
                                   <ReviewsSearchComponent/>
                                   <ReviewsSearchComponent/>
                                   <ReviewsSearchComponent/> */}
                </Leftcontainer>
                <Rightcontainer>
                    <InfoWrapper>
                        <DetailInfoWrapper>
                             <img src={clock} alt="clock"/> <p>Monday</p>
                        </DetailInfoWrapper>
                        <DetailWrapperBorder>
                            <img src={money} alt="money"/> <p>Price Level</p>
                        </DetailWrapperBorder>
                        <ButtonWrapper>
                            <WriteReviewBtn onclick={reviewHandler}>WRITE A REVIEW</WriteReviewBtn>
                            <EditDataBtn onclick={editHandler}>EDIT DATA</EditDataBtn>
                        </ButtonWrapper>
                    </InfoWrapper>
                </Rightcontainer>
            </RestaurantsWrapper>
       
        </>
    )
}

export default Restaurant;