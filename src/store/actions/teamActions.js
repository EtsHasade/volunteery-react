import teamService from "../../services/teamService";

export function loadTeams() {
    return async (dispatch, getState) => {
        console.log('state', getState());
        
        const teams = await teamService.query()
        const action = { type: 'SET_TEAMS', teams }
        dispatch(action)
        return teams
    }
}