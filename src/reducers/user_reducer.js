import types from "../actions/types";

const DEFAULT_STATE =  {
    auth: false,
    email: "",
    username: ""
};

export default ( state = DEFAULT_STATE, action) => {
    switch(action.type) {
        case types.SIGN_IN:
        case types.SIGN_UP:
            return { auth: true, email: action.email, username: action.username};
        case types.SIGN_OUT:
            return { auth: false, email: "", username:""};
        default:
            return state;
    }
}