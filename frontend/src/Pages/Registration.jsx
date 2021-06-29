import {Route, Switch} from "react-router-dom";
import Registration from "../Components/authentication/Registration/index";
import Verification from "../Components/authentication/Verification";

const Registrationpage = () => {
    return(
        <Switch>
                <Route path="/registration/start" component={ Registration } exact/>
                <Route path="/registration/validation" component={ Verification } exact/>
            </Switch>
    )
}

export default Registrationpage;