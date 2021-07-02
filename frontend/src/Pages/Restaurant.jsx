import styled from "styled-components"
import laederach from "../Assets/images/DSC_0213.png"
import pin from "../Assets/svgs/pin.svg"
import money from "../Assets/svgs/money.svg"
import clock from "../Assets/svgs/clock.svg"
import phone from "../Assets/svgs/phone.svg"
import laptop from "../Assets/svgs/laptop.svg"
import screenshot from "../Assets/svgs/screenshot.svg"
import StarSystem from "../Components/StarSystem"
import { Button } from "../Style/GlobalButtons"
import { RestaurantsWrapper } from "../Style/container"
import { useHistory } from "react-router-dom"
import ReviewComponent from "../Components/Review"
import { useEffect } from "react";
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import Axios from "../helpers/axios";


const Uppercontainer = styled.div`
    height: 40vh;
    background-image: url(${laederach});
    background-repeat: no-repeat;
    background-size: cover;
    width: 100%;
    display: flex;
    align-items: top;
    justify-content: center;
`

const BannerWrapper = styled.div`
    height: 20vh;
    width: 100%;
    background-color: rgb(0,0,0,0.5);
    display: flex;
    justify-content: space-between;
    align-items: center;
`
const InfoTab = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: flex-start;
    flex-direction: column; 
    margin: 5vw;
    
    .stars {
        display: flex;
        justify-content: space-between;
        align-items: center;
     
        p{
            color: ${(props)=> props.theme.backgroundWhite};
            font-weight: ${(props)=> props.theme.textWeightThin};
        }
        
    }

    h1 {
        color: ${(props)=> props.theme.backgroundWhite};
        font-size: ${(props)=> props.theme.textSizeXXL};
        font-weight: ${(props)=> props.theme.textWeightBold};
    
    }

    h2 {
        color: ${(props)=> props.theme.backgroundWhite};
        font-size: ${(props)=> props.theme.textSizeXL};
        font-weight: ${(props)=> props.theme.textWeightThin};
        padding-top: 1%;
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
  width: 80%;
  margin-left: 10%;
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

const SearchHeader = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding-bottom: 1%;
`


const Restaurant = () => {
    const history = useHistory();
    const token = useSelector((state) => state.token);
    const dispatch = useDispatch();
    const restaurant = useSelector((state) => state.restaurant);
    

    useEffect(() => {

        async function fetchRestaurant() {
          const url = "restaurants/1/";
          const config = {
            headers: { Authorization: `Bearer ${token}`},
          };
          try {
            const resp = await Axios.get(url, config);
            if (resp.status === 200) {
                dispatch({
                    type: "setRestaurant",
                    payload: resp.data,
                  });
            }
          } catch (err) {
            if (err.response.status === 400) {
                console.log(err.response);
              }      
          }
        }
        fetchRestaurant();
      }, [dispatch, token]);



    const reviewHandler = () =>{
        history.push("/");
    }

    const editHandler = () =>{
        history.push("/createrestaurant");
    }
    
    console.log(restaurant);

    return(
        <>
        {restaurant &&
            <div>
                <Uppercontainer>
                    <BannerWrapper>
                        <InfoTab>
                            <h1>{restaurant ? restaurant.name : 'loading'}</h1>
                            <h2>{restaurant.category}</h2>
                            <div className={"stars"}>
                                <StarSystem rating={restaurant.average.rating}/>
                                <p>{restaurant.review_count} reviews</p>
                            </div>
                        </InfoTab>
                        <LocationTab>
                            <Map/>
                            <DetailInfoWrapper>
                                <img src={pin} alt="pin"/><p>{restaurant.street}</p>
                            </DetailInfoWrapper>
                            <DetailInfoWrapper>
                                <img src={phone} alt="phone"/><p>{restaurant.phone_number}</p> 
                            </DetailInfoWrapper>
                            <DetailInfoWrapper>
                                <img src={laptop} alt="laptop"/>  <p>{restaurant.website}</p>  
                            </DetailInfoWrapper>
                        </LocationTab>
                    </BannerWrapper>
                </Uppercontainer>
                <RestaurantsWrapper>
                    <Leftcontainer>
                        <SearchHeader>
                            <SearchBar>
                                <input type={"text"} placeholder={"Filter list..."}/>
                            </SearchBar>
                            <FilterButton>Filter</FilterButton>
                        </SearchHeader>
                        { restaurant.reviews.length > 0 ? restaurant.reviews.map((id) => {
                            return (
                                <ReviewComponent data={id}/>
                            );
                        }) : null}
                    </Leftcontainer>
                    <Rightcontainer>
                        <InfoWrapper>
                            <DetailInfoWrapper>
                                <img src={clock} alt="clock"/> <p>{restaurant.opening_hours}</p>
                            </DetailInfoWrapper>
                            <DetailWrapperBorder>
                                <img src={money} alt="money"/> <p>{restaurant.price_level === 1? "$": restaurant.price_level === 2? "$$": "$$$" }</p>
                            </DetailWrapperBorder>
                            <ButtonWrapper>
                                <WriteReviewBtn onClick={reviewHandler} >WRITE A REVIEW</WriteReviewBtn>
                                <EditDataBtn onClick={editHandler}>EDIT DATA</EditDataBtn>
                            </ButtonWrapper>
                        </InfoWrapper>
                    </Rightcontainer>
                </RestaurantsWrapper>  
            </div>}
        </>
    )
}

export default Restaurant;