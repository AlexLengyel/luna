import {ListContent, ListLine, ListUser, ListWrapper} from "../../../Style/container";
import mock_image from "../../../Assets/images/mock_image.png";
import styled from "styled-components";

const ListWrapperUser = styled(ListWrapper)`
  height: 192px;
`

const ListContentUser = styled(ListContent)`
  height: 118px;
`

const UserSearchComponent = () => {
    return (
        <ListWrapperUser>
            <ListLine/>
            <ListUser>
                <img src={mock_image} alt={"restaurant"}/>
                <div className={"user"}>
                    <h1>Laurent H.</h1>
                    <h2>6 Reviews in total</h2>
                </div>
            </ListUser>
            <ListContentUser>
                <h2>Im professional photographer with an eye for details in every thing I do in my live. Every time a pass by a nice restaurant i have to stop
                    and take notes... read more</h2>
            </ListContentUser>
        </ListWrapperUser>
    )
}

export default UserSearchComponent;
