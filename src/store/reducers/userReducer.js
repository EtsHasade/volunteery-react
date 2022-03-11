
const initialState = {
    filterBy: { txt: '' },
    users: null,
}

export function userReducer(state = initialState, action) {
console.log("🚀 ~ file: userReducer.js ~ line 8 ~ userReducer ~ action", action)

    let newState = state;

    switch (action.type) {
        case 'SET_USERS':
            newState = { ...state, users: [...action.users] }
            break;
    }
    return newState;
}
