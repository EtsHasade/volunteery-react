import { eventiService } from "../../services/eventiService.js";
import { eventiFilterService } from "../../services/eventiFilterService.js";

export function loadEventis(forUser = {favs: []}) {
    return async (dispatch) => {
        try {
            console.log('setEventis');
            const eventis = await eventiService.query();
            const popularestEventis = eventiFilterService.popularestEventis(eventis);
            const newestEventis = eventiFilterService.newestEventis(eventis);
            const suggestEventis = eventiFilterService.suggestEventis(eventis, forUser.favs);

            dispatch({ type: 'SET_EVENTIS', eventis, popularestEventis, newestEventis, suggestEventis });
            return { type: true, err: null };
        } catch (err) {
            console.log('err', err);
            return { type: false, err };
        }
    }
}

export function saveEventi(eventi) {
    return async (dispatch) => {
        try {
            console.log('saveStoreEventi', eventi);
            const actionType = (eventi._id) ? 'UPDATE_EVENTI' : 'ADD_EVENTI';
            const savedEventi = await eventiService.save(eventi);
            console.log('saved', savedEventi);
            dispatch({ type: actionType, eventi: savedEventi });
            return { type: true, err: null };
        } catch (err) {
            return { type: false, err };
        }
    }
}

export function removeEventi(eventiId) {
    return async (dispatch) => {
        try {
            console.log('removeEventi', eventiId);
            const removedEventi = await eventiService.remove(eventiId);
            console.log('removed', removedEventi);
            dispatch({ type: 'REMOVE_EVENTI', eventiId });
            return { type: true, err: null };
        } catch (err) {
            return { type: false, err };
        }
    }
}

export function setSortEventis(sortBy) {
    return async (dispatch) => {
        try {
            console.log('setSortEventis', sortBy);
            const sortedEventis = await eventiService.getSortList(sortBy);
            console.log('sorted', sortedEventis);
            dispatch({ type: 'SET_EVENTIS', sortedEventis });
            return { type: true, err: null };
        } catch (err) {
            return { type: false, err };
        }
    }
}
