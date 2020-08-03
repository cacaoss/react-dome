// import {useHistory, useLocation, useRouteMatch, useParams} from "react-router-dom"
import {useHistory, useLocation, useRouteMatch, useParams} from "../kreact-router-dom"
function useHook() {
    const history = useHistory();
    const location = useLocation();
    const match = useRouteMatch();
    const params = useParams()

    console.log("----------------------------------------")
    console.log("history", history);
    console.log("location", location);
    console.log("match", match)
    console.log("params", params)

    return {history, location, match, params}
}

export {useHook};