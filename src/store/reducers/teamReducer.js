
const initialState = {
    filterBy: { txt: '' },
    teams: null,
}

export function teamReducer(state = initialState, action) {
console.log("🚀 ~ file: teamReducer.js ~ line 8 ~ teamReducer ~ action", action)

    let newState = state;

    switch (action.type) {
        case 'SET_TEAMS':
            newState = { ...state, teams: [...action.teams] }
            break;
    }
    return newState;
}
