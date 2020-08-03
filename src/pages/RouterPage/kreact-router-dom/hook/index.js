import {useContext} from "react";
import RouterContext from "../context/RouterContext";

function useHistory() {
    const {history} = useContext(RouterContext)
    return history;
}

function useLocation() {
    const {history} = useContext(RouterContext)
    return history.location;
}

function useRouteMatch() {
    const {match} = useContext(RouterContext)
    return match;
}

function useParams() {
    const {match} = useContext(RouterContext)
    return match.params;
}

export {useHistory, useLocation, useRouteMatch, useParams}