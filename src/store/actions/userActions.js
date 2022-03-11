import userService from "../../services/userService";

export function loadUsers() {
    return async (dispatch, getState) => {
        console.log('state', getState());
        
        const users = await userService.query()
        const action = { type: 'SET_USERS', users }
        dispatch(action)
        return users
    }
}