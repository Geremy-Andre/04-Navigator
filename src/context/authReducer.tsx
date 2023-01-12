import { AuthState } from "./AuthContext";

type AuthAction = 
    | {type: 'signIn'}
    | {type: 'changeFavIcon', payload:string}
    | {type: 'changeUserName', payload:string}

export const authReducer = (state:AuthState, action: AuthAction):AuthState => {
    switch (action.type) {
        case "signIn":
            return {
                ...state,
                isLoggedIn: true,
                username: 'no-name-yet'
            }
            break;
        case "changeFavIcon":
            return {
                ...state,
                favoriteIcon: action.payload
            }
            break;
        case "changeUserName":
            return {
                ...state,
                username: action.payload
            }
            break;
    
        default:
            return state;
    }
}